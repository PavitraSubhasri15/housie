from django.db import models
from django.contrib import admin

# Create your models here.
class Feature(models.Model):
    name=models.CharField(max_length=100)
    password=models.CharField(max_length=100)