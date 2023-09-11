from django.db import models

from ..mainmodels.hospitals import Hospital


class Sensors(models.Model):
    hospital = models.ForeignKey(Hospital, related_name='sensors', on_delete=models.CASCADE)
    pressure = models.FloatField(blank=True, null=False)
    tempin = models.FloatField(blank=True, null=False)
    purity = models.FloatField(blank=True, null=False)
    tempout = models.FloatField(blank=True, null=False)
    datetime = models.DateTimeField(blank=False, null=False)
