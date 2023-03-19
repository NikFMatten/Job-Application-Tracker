from django.urls import path
from . import views

urlpatterns = [
    path('', views.archived_jobs_list),
    path('<int:pk>/', views.archived_job_detail)
]