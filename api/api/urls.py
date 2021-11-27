from django.urls import path, include
from .views import *


urlpatterns = [
    path('adverts', AdvertsList.as_view()),
    path('adverts/<int:id>', AdvertDetails.as_view()),
    path('users/<int:id>', CustomUserDetails.as_view()),
    path('login', include('rest_framework.urls', namespace='rest_framework'))
]
