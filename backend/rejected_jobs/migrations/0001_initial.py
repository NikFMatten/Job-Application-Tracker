# Generated by Django 4.1.7 on 2023-03-19 23:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=255)),
                ('job_title', models.CharField(max_length=255)),
                ('job_description', models.CharField(max_length=8000)),
                ('job_listing_url', models.URLField(max_length=255)),
                ('salary_range', models.CharField(max_length=25)),
                ('office_policy', models.CharField(max_length=10)),
                ('job_location', models.CharField(max_length=50)),
                ('date_applied', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
