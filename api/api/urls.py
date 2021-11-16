from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'advert', views.AdvertViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', include('rest_framework.urls', namespace='rest_framework'))
]