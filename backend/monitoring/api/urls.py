from . import views
from django.conf.urls import include
from rest_framework import routers
from django.urls import path, re_path
# from rest_framework.authtoken.views import obtain_auth_token
# user imports
from .serializers.hospitalserializer import CustomObtainAuthTooken
from .viewsets.HospitalViewset import HospitalViewSet
from .viewsets.sensorviewset import SensorViewSet

router  = routers.DefaultRouter()
router.register(r'hospitals', HospitalViewSet)
router.register(r'sensors', SensorViewSet)

urlpatterns = [
    re_path(r'^', include(router.urls)),
    path('authenticate/', CustomObtainAuthTooken.as_view())
]