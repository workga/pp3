from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import (
    Advert,
    CustomUser
)


class AdvertsList(APIView):
    def get(self, request):
        qset = Advert.objects.values(
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


class AdvertDetails(APIView):
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


class CustomUserDetails(APIView):
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


# Model.DoesNotExist
# Model.MultipleObjectsReturned
