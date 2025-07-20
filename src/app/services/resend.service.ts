import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResendService {

  async envoyerEmailBienvenue(email: string, isVip: boolean = false): Promise<any> {
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          isVip
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Erreur HTTP ${response.status}: ${errorData}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur envoi email:', error);
      throw error;
    }
  }
}
