import pandas as pd

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import EmissionRecordSerializer

from .models import (
    Company,
    DataSource,
    EmissionRecord,
    AuditLog
)


@api_view(['GET'])
def get_records(request):

    records = EmissionRecord.objects.all()

    serializer = EmissionRecordSerializer(
        records,
        many=True
    )

    return Response(serializer.data)


@api_view(['POST'])
def approve_record(request, record_id):

    try:

        record = EmissionRecord.objects.get(id=record_id)

        record.status = 'APPROVED'

        record.locked = True

        record.save()

        AuditLog.objects.create(
            record=record,
            action='APPROVED'
        )

        return Response({
            "message": "Record approved"
        })

    except EmissionRecord.DoesNotExist:

        return Response({
            "error": "Record not found"
        })


@api_view(['POST'])
def reject_record(request, record_id):

    try:

        record = EmissionRecord.objects.get(id=record_id)

        record.status = 'REJECTED'

        record.save()

        AuditLog.objects.create(
            record=record,
            action='REJECTED'
        )

        return Response({
            "message": "Record rejected"
        })

    except EmissionRecord.DoesNotExist:

        return Response({
            "error": "Record not found"
        })


@api_view(['POST'])
def upload_sap(request):

    file = request.FILES.get('file')

    if not file:

        return Response({
            "error": "No file uploaded"
        })

    df = pd.read_csv(file)

    company, _ = Company.objects.get_or_create(
        name="Demo Company"
    )

    source = DataSource.objects.create(
        company=company,
        source_type='SAP',
        file_name=file.name
    )

    created_rows = []

    for _, row in df.iterrows():

        quantity = float(row['Quantity'])

        emission_factor = 2.68

        emission_value = quantity * emission_factor

        suspicious = False

        if quantity < 0 or quantity > 100000:

            suspicious = True

        record = EmissionRecord.objects.create(

            company=company,

            source=source,

            scope='Scope 1',

            category='Fuel',

            activity_type=row['Fuel Type'],

            raw_unit=row['Unit'],

            normalized_unit='liters',

            quantity=quantity,

            normalized_quantity=quantity,

            emission_factor=emission_factor,

            emission_value=emission_value,

            is_suspicious=suspicious
        )

        created_rows.append(record.id)

    return Response({

        "message": "SAP data uploaded successfully",

        "records_created": len(created_rows)

    })