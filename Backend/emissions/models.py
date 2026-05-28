from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)


class DataSource(models.Model):
    SOURCE_TYPES = [
        ('SAP', 'SAP'),
        ('UTILITY', 'UTILITY'),
        ('TRAVEL', 'TRAVEL'),
    ]

    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    source_type = models.CharField(max_length=20, choices=SOURCE_TYPES)
    file_name = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)


class EmissionRecord(models.Model):

    STATUS_CHOICES = [
        ('PENDING', 'PENDING'),
        ('APPROVED', 'APPROVED'),
        ('REJECTED', 'REJECTED'),
    ]

    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    source = models.ForeignKey(DataSource, on_delete=models.CASCADE)

    scope = models.CharField(max_length=20)
    category = models.CharField(max_length=100)
    activity_type = models.CharField(max_length=100)

    raw_unit = models.CharField(max_length=50)
    normalized_unit = models.CharField(max_length=50)

    quantity = models.FloatField()
    normalized_quantity = models.FloatField()

    emission_factor = models.FloatField()
    emission_value = models.FloatField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='PENDING'
    )

    is_suspicious = models.BooleanField(default=False)

    locked = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)


class AuditLog(models.Model):

    record = models.ForeignKey(
        EmissionRecord,
        on_delete=models.CASCADE
    )

    action = models.CharField(max_length=100)

    old_value = models.TextField(null=True, blank=True)
    new_value = models.TextField(null=True, blank=True)

    timestamp = models.DateTimeField(auto_now_add=True)