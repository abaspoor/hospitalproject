import pytz
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from datetime import datetime
# models
from api.mainmodels.hospitals import Hospital
from api.mainmodels.sensors import Sensors
from api.serializers.sensorserializer import SensorSerializer


class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensors.objects.all()
    serializer_class = SensorSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [AllowAny]