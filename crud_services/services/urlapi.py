from django.urls import path
from .apiView import DataCreate, ListData

urlpatterns = [
    path('create/', DataCreate.as_view(), name='create'),
    path('list/', ListData.as_view(), name='list'),

]