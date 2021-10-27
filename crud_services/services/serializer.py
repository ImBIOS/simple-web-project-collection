from rest_framework import serializers
from services.models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Data
        fields =['name','age','address','job'] 