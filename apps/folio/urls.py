from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.Index.as_view(), name="index"),
    url(r'^mail/', views.Mail.as_view(), name="mail"),
]
