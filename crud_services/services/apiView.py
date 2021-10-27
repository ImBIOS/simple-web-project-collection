from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import DataSerializer
from .models import Data

class DataCreate(APIView):
    def post(self, request):
        serializer = DataSerializer(data=request.data)
        data       = Data.objects.all()

        if serializer.is_valid():
            serializer.save()
            return Response({
                'message':'it works',
                'data':serializer.data
            })
        return Response(serializer.errors)

class ListData(APIView):
    def get(self, request):
        data = Data.objects.all()
        serializer = DataSerializer(data, many=True)
    
        return Response({
            'message': 'fetch data berhasil',
            'data': serializer.data
        })

