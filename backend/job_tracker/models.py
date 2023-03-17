from django.db import models

class JobTracker(models.Model):
    company_name: models.CharField(max_length=255)
    job_title: models.CharField(max_length=255)
    job_description: models.CharField(max_length=8000)
    job_listing_url: models.URLField(max_length=255)
    salary_range: models.CharField(max_length=25)
    office_policy: models.CharField(max_length=10)
    job_location: models.CharField(max_length=50)
    date_applied: models.DateTimeField()
