# Breathe ESG Tech Intern Assignment

## Overview

This project is a prototype ESG data ingestion platform built using Django REST Framework and React.

The system ingests ESG-related data from multiple enterprise sources such as:

* SAP exports
* Utility electricity data
* Corporate travel data

The uploaded data is normalized into a common structure so analysts can review, validate, and approve records before audit submission.

---

# Problem Statement

Enterprise ESG data usually comes from multiple disconnected systems and formats.

Examples:

* SAP procurement exports
* Utility electricity reports
* Corporate travel platform exports

The goal of this project is to:

* ingest data from different sources
* normalize inconsistent formats
* validate records
* allow analyst review
* maintain audit tracking

---

# Tech Stack

## Backend

* Python
* Django
* Django REST Framework

## Frontend

* React

## Database

* SQLite / PostgreSQL

---

# Features

* Multi-source data ingestion
* CSV upload support
* ESG data normalization
* Analyst review dashboard
* Failed record handling
* Suspicious record detection
* Approval workflow
* Audit tracking
* Source tracking
* Scope 1/2/3 categorization

---

# Supported Data Sources

## 1. SAP Data

Handled:

* Fuel records
* Procurement records

Format:

* CSV / Flat file export

Examples:

* fuel quantity
* plant codes
* procurement values

---

## 2. Utility Electricity Data

Handled:

* Electricity usage records
* Meter readings
* Billing periods

Format:

* Utility portal CSV export

Examples:

* kWh usage
* billing dates
* meter values

---

## 3. Corporate Travel Data

Handled:

* Flight records
* Hotel bookings
* Ground transport

Format:

* Travel platform style CSV export

Examples:

* airport codes
* travel category
* distance values

---

# Normalization

Different sources contain:

* different units
* different field names
* different date formats

The system converts records into a common structure for easier reporting and analyst review.

Examples:

* Electricity → kWh
* Fuel → Liters
* Distance → Kilometers

---

# Scope Classification

## Scope 1

Direct fuel emissions

## Scope 2

Purchased electricity emissions

## Scope 3

Business travel emissions

---

# Workflow

1. Upload source data
2. Validate records
3. Normalize data
4. Flag failed/suspicious rows
5. Analyst reviews records
6. Approved records are locked
7. Audit logs are maintained

---

# Main Modules

## Organization

Stores company information.

## DataSource

Tracks where uploaded data came from.

## RawRecord

Stores original uploaded records.

## EmissionRecord

Stores normalized ESG records.

## AuditLog

Tracks analyst actions and approvals.

---

# Validation Rules

Examples:

* Missing values
* Invalid units
* Incorrect dates
* Negative usage values

Failed rows are flagged for analyst review.

---

# Documents Included

* MODEL.md
* DECISIONS.md
* TRADEOFFS.md
* SOURCES.md

---

# Deployment

## Frontend

https://vercel.com/sujeth-xs-projects/breathe-esg-ui/2XAqUmUP8Da6KxiCGLxqMGMYu6mP

## Backend

https://breathe-esg-dashboard-cffd.onrender.com/api/records/

---

# Project Structure

```bash
project/
│
├── backend/
├── frontend/
├── docs/
│
├── MODEL.md
├── DECISIONS.md
├── TRADEOFFS.md
├── SOURCES.md
└── README.md
```

---

# Run Locally

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

# Future Improvements

* Real-time API integrations
* PDF bill parsing
* AI-based anomaly detection
* Role-based authentication
* Background job processing

---

# Challenges Faced

* Handling inconsistent data formats
* Normalizing units from multiple sources
* Designing audit-safe workflows
* Managing source traceability

---

# About Me

I mainly come from a Java backend development background and learned Python/Django while building this assignment.

This project helped me understand:

* ESG workflows
* data ingestion pipelines
* normalization
* audit tracking
* Django REST APIs

---

# Final Note

This project focuses mainly on:

* realistic data handling
* clean backend design
* auditability
* normalization workflows

instead of building enterprise-scale integrations within the limited assignment timeline.

