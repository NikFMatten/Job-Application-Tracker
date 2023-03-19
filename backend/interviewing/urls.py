from django.urls import path
from . import views

urlpatterns = [
    path('', views.interviewing_jobs_list),
    path('<int:pk>/', views.interviewing_job_detail)
]