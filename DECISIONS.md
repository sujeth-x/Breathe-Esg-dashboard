# DECISIONS.md

# SAP Data

Choice:
Used CSV export format.

Why:
CSV files are commonly used for SAP exports and are easy to upload and process.

---

# Utility Data

Choice:
Used utility portal CSV export.

Why:
Many companies download electricity reports manually from utility portals.

---

# Travel Data

Choice:
Used CSV travel reports similar to Concur/Navan exports.

Why:
Travel platforms usually provide downloadable reports for flights and hotels.

---

# Normalization

Choice:
Converted all records into one common format.

Why:
Different sources use different units and formats, so normalization makes data easier to manage.

---

# Approval Flow

Choice:
Added analyst approval system.

Why:
ESG records should be reviewed before audit submission.

---

# Validation

Choice:
Added basic validation checks.

Examples:
- missing values
- invalid units
- negative values

Why:
Helps identify suspicious or failed records.

---

# Questions for PM

- Should approved records be editable?
- Should APIs be added later?
- How long should audit logs be stored?
- Should emission factors be configurable?

---

# Final Note

The project focuses mainly on:
- realistic data handling
- normalization
- audit tracking
- clean system design

instead of building large enterprise integrations in limited time.
