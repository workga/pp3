from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from django.forms import modelform_factory

from .models import (
    Advert,
    CustomUser
)


class AdvertsList(APIView):
    # permission_classes = (IsAuthenticated,)
    
    def get(self, request, *args, **kwargs):
        search_str = request.query_params.get("search")

        if search_str:
            advert_objects = Advert.search_manager.search(search_str)
            additional_user_ids = CustomUser.search_manager.search(search_str).values_list("id", flat=True)

            objects = advert_objects.union(
                Advert.objects.filter(author__in=additional_user_ids)
            )
        else:
            objects = Advert.objects

        qset = objects.values(
            "id",
            "title",
            "author__id",
            "author__first_name",
            "author__last_name",
            "author__abstract",
            "abstract",
            "date"
        ).order_by("date")


        if qset.exists():
            return Response(list(qset))
        else:
            print("[ERROR] Advert queryset doesn't exist")
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, *args, **kwargs):
        advert_data = request.data

        form = modelform_factory(Advert, fields=(
            "title",
            "author",
            "abstract",
            "description"
        ))
        filled_form = form(data=advert_data)

        if not filled_form.is_valid():
            # [!] use filled_form.errors
            print("[ERROR] Invalid Advert data")
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        # [!] update if exists (use get()?)
        filled_form.save()

        # [!] return advert (use get()?)
        return Response(status=status.HTTP_200_OK)


class AdvertDetails(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        advert_id = int(kwargs["id"])

        qset = Advert.objects.values(
            "id",
            "title",
            "author__id",
            "author__first_name",
            "author__last_name",
            "author__abstract",
            "abstract",
            "description",
            "date",
        )

        try:
            advert = qset.get(id=advert_id)
            return Response(advert)

        except Advert.DoesNotExist as exc:
            print("[ERROR]", exc)
            return Response(status=status.HTTP_404_NOT_FOUND)

        except Exception as exc:
            print("[ERROR]", exc)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CustomUserList(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        qset = CustomUser.objects.values(
            "id",
            "first_name",
            "last_name",
            "abstract",
        ).order_by("date_joined")

        if qset.exists():
            return Response(list(qset))
        else:
            print("[ERROR] CustomUser queryset doesn't exist")
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    # registration
    def put(self, request, *args, **kwargs):
        user_data = request.data

        qset = CustomUser.objects.values("id")
        try:
            custom_user = qset.get(email=user_data["email"])
            return Response(status=status.HTTP_400_BAD_REQUEST)

        except CustomUser.DoesNotExist as exc:
            user = CustomUser.objects.create_user(
                user_data['email'],
                user_data['first_name'],
                user_data["last_name"],
                user_data['password']
            )
            if user:
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        except Exception as exc:
            print("[ERROR]", exc)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CustomUserDetails(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        custom_user_id = int(kwargs["id"])

        qset = CustomUser.objects.values(
            "id",
            "first_name",
            "last_name",
            "abstract",
            "description"
        )

        try:
            custom_user = qset.get(id=custom_user_id)
            return Response(custom_user)

        except CustomUser.DoesNotExist as exc:
            print("[ERROR]", exc)
            return Response(status=status.HTTP_404_NOT_FOUND)

        except Exception as exc:
            print("[ERROR]", exc)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CustomUserProfile(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        custom_user_id = request.user.id

        qset = CustomUser.objects.values(
            "id",
            "first_name",
            "last_name",
            "abstract",
            "description"
        )

        try:
            custom_user = qset.get(id=custom_user_id)
            return Response(custom_user)

        except CustomUser.DoesNotExist as exc:
            print("[ERROR]", exc)
            return Response(status=status.HTTP_404_NOT_FOUND)

        except Exception as exc:
            print("[ERROR]", exc)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# Model.DoesNotExist
# Model.MultipleObjectsReturned
