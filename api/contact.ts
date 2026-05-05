
import { google } from 'googleapis';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method === 'POST') {
    console.log('Received POST request to /api/contact');
    try {
      const { name, mobile, email, businessType, message } = request.body;
      console.log('Request body:', request.body);

      const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
      const privateKey = process.env.GOOGLE_PRIVATE_KEY;
      const sheetId = process.env.GOOGLE_SHEET_ID;

      console.log('GOOGLE_CLIENT_EMAIL exists:', !!clientEmail);
      console.log('GOOGLE_PRIVATE_KEY exists:', !!privateKey);
      console.log('GOOGLE_SHEET_ID exists:', !!sheetId);

      if (!clientEmail || !privateKey || !sheetId) {
        console.error('Missing required environment variables.');
        return response.status(500).json({ message: 'Server configuration error.' });
      }

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      console.log('Google Auth created.');

      const sheets = google.sheets({ version: 'v4', auth });
      console.log('Google Sheets API client created.');

      const range = 'Sheet1!A:E';
      const valueInputOption = 'USER_ENTERED';
      const requestBody = {
        values: [[name, mobile, email, businessType, message]],
      };

      console.log('Appending values to sheet:', { sheetId, range, valueInputOption, requestBody });

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range,
        valueInputOption,
        requestBody,
      });

      console.log('Successfully appended values to sheet.');
      response.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('Error in /api/contact:', error);
      if (error.response) {
        console.error('Google API Error Response:', error.response.data);
      }
      response.status(500).json({ message: 'Error submitting form.', error: error.message });
    }
  } else {
    console.log(`Received ${request.method} request, but only POST is allowed.`);
    response.setHeader('Allow', ['POST']);
    response.status(405).json({ message: `Method ${request.method} Not Allowed` });
  }
}
