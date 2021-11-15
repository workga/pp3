#from django.shortcuts import render

from rest_framework import viewsets

from .models import Advert
from .serializers import AdvertSerializer

class AdvertViewSet(viewsets.ModelViewSet):
    queryset = Advert.objects.all().order_by('author')
    serializer_class = AdvertSerializer
