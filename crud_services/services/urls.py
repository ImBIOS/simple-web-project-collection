from django.urls import path
from services.views import HomeView
from services.apiView import DataCreate
urlpatterns = [
    path('home/', HomeView.as_view(), name='home'),
]