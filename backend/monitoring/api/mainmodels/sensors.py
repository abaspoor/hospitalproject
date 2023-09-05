from django.db import models

from api.mainmodels.hospitals import Hospital


class Sensors(models.Model):
    hospital = models.ForeignKey(Hospital, related_name='sensors', on_delete=models.CASCADE)
    pressure = models.FloatField(blank=True, null=False)
    temp = models.FloatField(blank=True, null=False)
    datetime = models.DateTimeField(blank=False, null=False)
