from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views
from .views import *

router = routers.DefaultRouter()


# urls start from /api/
urlpatterns = [
    # for root url /api/
    path('', include(router.urls)),
    # for login page /api/login
    path('', include('rest_framework.urls', namespace='rest_framework')),
    # JWT authentication
    path('token/', jwt_views.TokenObtainPairView.as_view()),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view()),


    path('adverts/', AdvertsList.as_view()),
    path('adverts/<int:id>', AdvertDetails.as_view()),
    path('users/', CustomUserList.as_view()),
    path('users/<int:id>', CustomUserDetails.as_view()),
    path('profile/', CustomUserProfile.as_view())
]