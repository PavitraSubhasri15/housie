from django.urls import path
from . import views

app_name = 'minidjango'
urlpatterns = [
    path('', views.open, name='open'),  # This should be defined before other paths
    path('c2/', views.c2, name='c2'),
    path('half1/', views.half1, name='half1'),
        path('login/', views.login, name='login'),

    path('register/', views.register, name='register'),
path('user_login/', views.user_login, name='user_login')]
