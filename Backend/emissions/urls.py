from django.urls import path
from .views import *

urlpatterns = [
    path('upload/sap/', upload_sap),

    path('records/', get_records),

    path(
    'records/<int:record_id>/approve/',
    approve_record
),

   path(
    'records/<int:record_id>/reject/',
    reject_record
),
]