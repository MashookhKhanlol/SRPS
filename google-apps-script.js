// Replace YOUR_SHEET_ID with your actual Google Sheet ID
const SHEET_ID = 'YOUR_SHEET_ID';

function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Extract date and time from timestamp
    const timestamp = new Date(data.timestamp);
    const date = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyy-MM-dd');
    const time = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'HH:mm:ss');
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(), // Full timestamp
      date,                                        // Date only
      time,                                        // Time only
      data.name || '',                             // Name
      data.email || '',                            // Email
      data.phone || '',                            // Phone
      data.company || '',                          // Company
      data.idType || '',                           // ID Type
      data.idNumber || '',                         // ID Number
      data.service || '',                           // Service
      data.message || ''                           // Message
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing in Apps Script editor)
function testDoPost() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '9823412345',
    company: 'Test Company',
    idType: 'aadhar',
    idNumber: '123456789012',
    service: 'residential',
    message: 'This is a test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

