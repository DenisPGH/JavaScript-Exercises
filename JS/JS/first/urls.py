from django.urls import path

from JS.first.views import FirstPage

urlpatterns = [
    path('',FirstPage.as_view(),name='index'),

]