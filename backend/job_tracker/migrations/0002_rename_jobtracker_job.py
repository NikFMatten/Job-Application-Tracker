# Generated by Django 4.1.7 on 2023-03-17 17:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('job_tracker', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='JobTracker',
            new_name='Job',
        ),
    ]