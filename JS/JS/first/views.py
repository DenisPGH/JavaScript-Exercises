from django.contrib.auth import views
from django.shortcuts import render

# Create your views here.

class FirstPage(views.TemplateView):
    template_name = 'index.html'
