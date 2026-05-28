# MODEL.md

# Overview

This project is built to collect ESG-related data from different enterprise sources like SAP exports, utility electricity data, and corporate travel platforms.

Since every source gives data in different formats, the system converts all records into a common structure so analysts can review and approve them easily.

---

# Main Goals

- Handle data from multiple companies
- Store original source data safely
- Normalize different units and formats
- Track approvals and edits
- Maintain audit history

---

# Main Tables

## Organization

Stores company details.

Fields:
- id
- company_name
- created_at

Reason:
Used for multi-tenancy so each company’s data stays separate.

---

## DataSource

Stores details about where the data came from.

Examples:
- SAP CSV Export
- Utility Portal CSV
- Travel Platform Export

Fields:
- id
- organization_id
- source_name
- source_type
- uploaded_at

Reason:
Helps track which source produced the data.

---

## RawRecord

Stores the original uploaded data before processing.

Fields:
- id
- datasource_id
- raw_data
- status
- error_message

Reason:
Keeps original records safe for debugging and audit purposes.

---

## EmissionRecord

Stores cleaned and normalized ESG records.

Fields:
- id
- organization_id
- category
- scope
- activity_type
- unit
- value
- approval_status

Reason:
Provides a common format for all ESG data.

---

## AuditLog

Stores analyst actions.

Fields:
- id
- emission_record_id
- action
- updated_by
- timestamp

Reason:
Tracks approvals, edits, and changes for auditing.

---

# Scope Handling

Scope 1:
Fuel-related emissions

Scope 2:
Electricity-related emissions

Scope 3:
Business travel emissions

The scope is assigned automatically during normalization.

---

# Unit Normalization

Examples:
- Electricity converted to kWh
- Fuel converted to liters
- Travel distance converted to kilometers

This helps maintain consistency across all records.

---

# Approval Flow

1. User uploads data
2. System validates records
3. Failed rows are marked
4. Analyst reviews suspicious records
5. Approved records are locked

---

# Why Raw and Normalized Data are Separate

Raw data is stored separately so:
- original uploads are never lost
- errors can be debugged easily
- records can be reprocessed later
- audit transparency is maintained

---

# Future Improvements

- Real-time API integrations
- Automatic anomaly detection
- PDF utility bill parsing
- Advanced analytics dashboard
