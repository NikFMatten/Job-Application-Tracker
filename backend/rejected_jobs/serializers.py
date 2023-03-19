from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'company_name', 'job_title', 'job_description', 'job_listing_url', 'salary_range', 'office_policy', 'job_location', 'date_applied']
        