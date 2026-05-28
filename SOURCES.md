# SOURCES.md

# SAP Data Source

Research:
Looked at common SAP export formats used in enterprise reporting.

Chosen Format:
CSV / Flat file export

What I Learned:
SAP exports usually contain:
- inconsistent column names
- different date formats
- plant or material codes
- unit inconsistencies

Sample Data:
Included fuel and procurement records with different units and formats to simulate real enterprise data.

Real-World Challenges:
- complex SAP structures
- inconsistent field naming
- missing values
- difficult mappings

---

# Utility Electricity Data

Research:
Looked at how facilities teams download electricity usage reports from utility portals.

Chosen Format:
CSV export

What I Learned:
Utility data usually contains:
- billing periods
- meter readings
- electricity units like kWh
- tariff information

Sample Data:
Included electricity usage records with billing dates and meter values.

Real-World Challenges:
- PDF bill formats
- different utility structures
- non-standard billing periods

---

# Corporate Travel Data

Research:
Looked at travel platforms like Concur and Navan.

Chosen Format:
CSV travel report export

What I Learned:
Travel reports commonly include:
- flights
- hotels
- transport categories
- airport codes

Sample Data:
Included flight and hotel booking records with travel categories.

Real-World Challenges:
- missing distance values
- different travel formats
- incomplete booking information

---

# Final Note

The project uses simplified but realistic sample data based on real-world research to demonstrate ingestion, normalization, validation, and audit workflows.
