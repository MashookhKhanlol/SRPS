# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your contact form with automatic timestamp recording.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it (e.g., "Contact Form Submissions")
4. In the first row (Row 1), add these column headers:
   - **A1**: Timestamp
   - **B1**: Date
   - **C1**: Time
   - **D1**: Name
   - **E1**: Email
   - **F1**: Phone
   - **G1**: Company
   - **H1**: ID Type
   - **I1**: ID Number
   - **J1**: Service
   - **K1**: Message

5. **Important**: Copy the Sheet ID from the URL
   - The URL looks like: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
   - Copy the `YOUR_SHEET_ID` part

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste the code from `google-apps-script.js` (provided below)
4. Replace `YOUR_SHEET_ID` in the script with your actual Sheet ID
5. Click **Save** (💾 icon) and name your project (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. In Apps Script, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
3. Configure the deployment:
   - **Description**: "Contact Form Handler v1"
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (important for public access)
4. Click **Deploy**
5. **Copy the Web App URL** - you'll need this for the next step
6. Click **Done**

## Step 4: Set Up Environment Variables

1. In your project root, check if you have a `.env.local` file (if not, create it)
2. Add the following line:
   ```
   GOOGLE_SCRIPT_URL=your_web_app_url_here
   ```
3. Replace `your_web_app_url_here` with the Web App URL you copied in Step 3

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Go to your contact page
3. Fill out and submit the form
4. Check your Google Sheet - you should see the new row with all data including date and time

## Troubleshooting

- **403 Error**: Make sure "Who has access" is set to "Anyone" in the deployment settings
- **Data not appearing**: Check the Apps Script execution log (View → Execution log)
- **Timestamp issues**: Ensure your script has the correct Sheet ID

## Security Note

The Web App URL will be public. Consider adding authentication or rate limiting for production use.

