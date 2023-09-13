from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.db.models import Sum
from django.utils import timezone
import re
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from api.mainmodels.sensors import Sensors


# models

class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensors
        fields = ('hospital', 'pressure', 'tempin', 'purity', 'tempout', 'datetime')