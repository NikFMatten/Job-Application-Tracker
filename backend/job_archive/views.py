from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import JobSerializer
from .models import Job

@api_view(['GET', 'POST'])
def archived_jobs_list(request):
    if request.method == 'GET':
        archived_jobs = Job.objects.all()
        serializer = JobSerializer(archived_jobs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = JobSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    

@api_view(['GET', 'PUT', 'DELETE'])
def archived_job_detail(request, pk):
    archived_job = get_object_or_404(Job, pk=pk)

    if request.method == 'GET':
        serializer = JobSerializer(archived_job)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = JobSerializer(archived_job, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        archived_job.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)