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
from ..mainmodels.hospitals import Hospital
from ..mainmodels.sensors import Sensors
from ..serializers.sensorserializer import SensorSerializer


class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensors.objects.all()
    serializer_class = SensorSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [AllowAny]

    @action(methods=['POST'], detail=False)
    def sensorsvaluse(self, request):
        num = request.data['num']
        datas = Sensors.objects.order_by('-datetime')[:int(num)]
        datas = SensorSerializer(datas, many=True)
        finaldata = datas.data
        return Response(finaldata,status=status.HTTP_200_OK)