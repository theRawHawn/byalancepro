import { google } from 'googleapis';

export async function onRequest(context) {
  if (context.request.method === 'POST') {
    try {
      const { name, mobile, email, businessType, message } = await context.request.json();

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: context.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          private_key: context.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const sheetId = context.env.GOOGLE_SHEETS_SHEET_ID;
      const range = 'Sheet1!A:E'; 

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[name, mobile, email, businessType, message]],
        },
      });

      return new Response(JSON.stringify({ message: 'Success' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
