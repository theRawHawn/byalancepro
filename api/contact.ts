
import { google } from 'googleapis';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method === 'POST') {
    try {
      const { name, mobile, email, businessType, message } = request.body;

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const sheetId = process.env.GOOGLE_SHEET_ID;
      const range = 'Sheet1!A:E'; 

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[name, mobile, email, businessType, message]],
        },
      });

      response.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Error' });
    }
  } else {
    response.status(405).json({ message: 'Method Not Allowed' });
  }
}
