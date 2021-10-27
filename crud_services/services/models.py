from django.db import models

class Data(models.Model):
    name    = models.CharField(max_length=100, null= True, blank=True)
    age     = models.IntegerField()
    address = models.CharField(max_length=100, null=True, blank=True)
    job     = models.CharField(max_length=100, null=True, blank=True)