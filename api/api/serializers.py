from rest_framework import serializers

from .models import Advert

class AdvertSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Advert
        fields = ('title', 'author')