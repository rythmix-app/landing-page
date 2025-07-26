import { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import { EMAIL_VIP_TEMPLATE, EMAIL_CLIENT_TEMPLATE } from '../../src/app/templates';

const resend = new Resend(process.env['RESEND_API_KEY']);

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email, isVip } = JSON.parse(event.body || '{}');

    const template = isVip ? EMAIL_VIP_TEMPLATE : EMAIL_CLIENT_TEMPLATE;
    const subject = isVip ? '👑 Bienvenue VIP chez Rythmix !' : '🎵 Bienvenue chez Rythmix !';

    const { data, error } = await resend.emails.send({
      from: 'newsletter@rythmix-app.com',
      to: [email],
      subject: subject,
      html: template,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify(error)
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    console.error('Erreur fonction:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: (error as Error).message })
    };
  }
};
