---
sidebar_position: 2
---

# Uploading Documents

## Overview

Uploading of documents is how FoodTrails gets the information it uses to determine locality and purchase details.

## Supported File Types

The platform currently supports the following file formats for upload:

- CSV files (comma-separated values)
- Excel spreadsheets (.xlsx, .xls)

:::note
Currently, only suppliers with established data pipelines can have their reports fully processed. If your supplier is not yet onboarded, you can still upload reports but they will not successfully process and you will see a Failure
:::

## Uploading Velocity Reports

### Step 1: Access the Upload Section

**1. Log in to your FoodTrails account**

**2. Navigate to the "Data Upload" section on the left sidebar**

![Data Upload Section Location](/img/DataUploadDirection.png)

**3. Click the "Select Files" button or drag your document into the upload box**

![Select Files Button](/img/SelectFiles.png)

### Step 2: Select Your Files

1. Click "Choose Files" or drag and drop files into the upload area
2. Select one or multiple velocity reports from your suppliers
3. Ensure files are named clearly (e.g., "SupplierName_ReportDate.xlsx"), these files will be stored and available for your retrieval at a later time if you need them.

### Step 3: Upload and Process

1. Click "Submit Files"
2. The system will validate your files and begin processing
3. Processing may take a few minutes depending on file size and complexity

### Step 4: Review Results

Once processing is complete, you'll be able to:

- View standardized data in a clean, readable format
- Review any data quality issues or warnings
- Download processed reports for your records
- See updated metrics in your dashboard

## Data Requirements

For optimal processing, your velocity reports should include:

- **Product descriptions** (clear and consistent naming)
- **Quantities** (with units: lbs, cases, bushels, etc.)
- **Prices** (unit prices and/or total costs)
- **Dates** (purchase or delivery dates)
- **Supplier information** (name, address, or zip code for locality determination)

## Troubleshooting

### Common Issues

**File Format Not Recognized**
- Ensure your file is in a supported format (CSV, Excel, PDF)
- Check that the file isn't corrupted or password-protected

**Missing Data Fields**
- Review the data requirements above
- Contact your supplier if essential information is missing

**Processing Errors**
- Check for special characters or unusual formatting in your data
- Ensure dates are in a consistent format

### Getting Help

If you encounter issues:

1. Check the [FAQ section](/faq) for common solutions
2. Contact your FoodTrails administrator
3. Reach out to support at [contact@foodtrails.org](mailto:contact@foodtrails.org)

## Best Practices

- **Regular Uploads**: Upload reports as soon as you receive them for the most current data
- **Data Backup**: Keep original copies of all uploaded files
- **File Naming**: Use consistent, descriptive naming conventions
- **Data Validation**: Review processed data for accuracy before relying on metrics
- **Supplier Communication**: Work with suppliers to improve data quality over time

## Security and Privacy

- All uploaded data is encrypted in transit and at rest
- Access is restricted to authorized users only
- Data is processed in compliance with privacy regulations
- Audit logs track all upload and access activities
