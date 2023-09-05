from django.db import models
from django.contrib.auth.models import User, UserManager


class Hospital(models.Model):
    universityuser = models.ForeignKey(User, related_name='universityuser', on_delete=models.CASCADE)
    user = models.OneToOneField(User, related_name='user', on_delete=models.CASCADE)
    university = models.CharField(max_length=255, blank=False, null=False)
    city = models.CharField(max_length=255, blank=False, null=False)
    name = models.CharField(max_length=255, blank=False, null=False)