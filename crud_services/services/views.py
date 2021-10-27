from django.shortcuts import render
from django.views import View
from services.models import Data

class HomeView(View):
    template_name = 'home.html'
    def get(self, request):
        data = Data.objects.all()
        return render(request, self.template_name, {'data':data})
        