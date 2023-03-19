from django.urls import path
from . import views

urlpatterns = [
    path('', views.rejected_job_list),
    path('<int:pk>/', views.rejeceted_job_detail)
]