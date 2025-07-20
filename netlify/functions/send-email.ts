import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env['RESEND_API_KEY']);

// Templates (copiés de vos fichiers Angular)
const EMAIL_CLIENT_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue chez Rythmix</title>
    <style>
        body { margin: 0; padding: 0; font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #052E30, #0D7377); min-height: 100vh; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #052E30, #14FFEC); padding: 40px 30px; text-align: center; }
        .logo { width: 80px; height: 80px; background: rgba(255, 255, 255, 0.2); border-radius: 20px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white; }
        .header h1 { color: white; font-size: 2.5rem; margin: 0; font-weight: 700; }
        .content { padding: 40px 30px; line-height: 1.6; }
        .welcome-message { font-size: 1.3rem; color: #052E30; margin-bottom: 20px; font-weight: 600; }
        .features { background: #f8f9fa; border-radius: 15px; padding: 25px; margin: 30px 0; }
        .feature-item { display: flex; align-items: center; margin-bottom: 15px; }
        .feature-icon { width: 40px; height: 40px; background: linear-gradient(135deg, #14FFEC, #19B3BD); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #052E30, #14FFEC); color: white; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: 600; }
    </style>
</head>
<body>
    <div style="padding: 20px;">
        <div class="container">
            <div class="header">
                <div class="logo">🎵</div>
                <h1>Rythmix</h1>
                <p style="color: rgba(255, 255, 255, 0.9);">L'expérience musicale révolutionnaire</p>
            </div>
            <div class="content">
                <div class="welcome-message">🎉 Bienvenue dans l'aventure Rythmix !</div>
                <p>Merci de vous être inscrit(e) ! Vous faites maintenant partie des privilégiés qui découvriront en avant-première notre application révolutionnaire.</p>
                <div class="features">
                    <h3 style="margin-top: 0; color: #052E30;">Ce qui vous attend :</h3>
                    <div class="feature-item">
                        <div class="feature-icon">🎮</div>
                        <div><strong>Mini-jeux innovants</strong><br>Blindtest, Trackliste, défis inédits !</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🤖</div>
                        <div><strong>IA personnalisée</strong><br>Une intelligence qui apprend vos goûts musicaux</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🏆</div>
                        <div><strong>Compétition sociale</strong><br>Défiez vos amis et grimpez dans les classements</div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🌍</div>
                        <div><strong>Catalogue mondial</strong><br>Des hits aux perles underground, découvrez tout !</div>
                    </div>
                </div>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://rythmix.com" class="cta-button">Découvrir Rythmix</a>
                </div>
                <div style="background: #e8f5e8; padding: 20px; border-radius: 10px; border-left: 4px solid #14FFEC;">
                    <strong>Prochaines étapes :</strong><br>
                    • 📱 Bêta fermée dans les prochaines semaines<br>
                    • 🎁 Accès prioritaire pour les premiers inscrits<br>
                    • 🔥 Surprises exclusives à venir
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;

const EMAIL_VIP_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue VIP chez Rythmix</title>
    <style>
        body { margin: 0; padding: 0; font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460); min-height: 100vh; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3); border: 3px solid #FFD700; }
        .header { background: linear-gradient(135deg, #FFD700, #FFA500, #FF6B35); padding: 40px 30px; text-align: center; position: relative; }
        .vip-badge { position: absolute; top: 15px; right: 15px; background: #FF1744; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }
        .logo { width: 80px; height: 80px; background: rgba(255, 255, 255, 0.2); border-radius: 20px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white; }
        .header h1 { color: white; font-size: 2.5rem; margin: 0; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
        .content { padding: 40px 30px; line-height: 1.6; }
        .vip-welcome { font-size: 1.4rem; color: #FFD700; margin-bottom: 20px; font-weight: 700; text-align: center; }
        .premium-box { background: linear-gradient(135deg, #FFD700, #FFA500); padding: 25px; border-radius: 15px; margin: 20px 0; color: white; }
        .premium-feature { display: flex; align-items: center; margin: 10px 0; }
        .premium-feature .icon { width: 30px; height: 30px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 0.9rem; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #FF1744, #FF6B35); color: white; padding: 18px 35px; border-radius: 50px; text-decoration: none; font-weight: 700; font-size: 1.1rem; box-shadow: 0 10px 20px rgba(255, 23, 68, 0.3); }
    </style>
</head>
<body>
    <div style="padding: 20px;">
        <div class="container">
            <div class="header">
                <div class="vip-badge">👑 VIP</div>
                <div class="logo">🎵</div>
                <h1>Rythmix</h1>
                <p style="color: white; font-size: 1.2rem; margin: 0;">Édition Premium Exclusive</p>
            </div>
            <div class="content">
                <div class="vip-welcome">🌟 Bienvenue dans le cercle VIP Rythmix ! 🌟</div>
                <p>Félicitations ! Vous venez de rejoindre l'élite des mélomanes. En tant que membre VIP, vous bénéficiez d'avantages exclusifs qui transformeront votre expérience musicale.</p>
                <div class="premium-box">
                    <h3 style="margin-top: 0; text-align: center;">🎯 Vos privilèges VIP exclusifs</h3>
                    <div class="premium-feature">
                        <div class="icon">🚀</div>
                        <div><strong>Accès bêta immédiat</strong> - Testez avant tout le monde</div>
                    </div>
                    <div class="premium-feature">
                        <div class="icon">🎮</div>
                        <div><strong>Modes de jeu premium</strong> - Contenu exclusif VIP</div>
                    </div>
                    <div class="premium-feature">
                        <div class="icon">🏆</div>
                        <div><strong>Tournois privés</strong> - Compétitions entre VIP uniquement</div>
                    </div>
                    <div class="premium-feature">
                        <div class="icon">🎁</div>
                        <div><strong>Récompenses exclusives</strong> - Badges et titres VIP</div>
                    </div>
                    <div class="premium-feature">
                        <div class="icon">📞</div>
                        <div><strong>Support prioritaire</strong> - Assistance dédiée 24/7</div>
                    </div>
                </div>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://rythmix.com/vip" class="cta-button">🚀 Accéder à mon espace VIP</a>
                </div>
                <div style="background: #fff3cd; padding: 20px; border-radius: 10px; border-left: 4px solid #FFD700; color: #856404;">
                    <h4 style="color: #FFD700; margin-top: 0;">🗓️ Calendrier VIP exclusif :</h4>
                    <p style="margin: 5px 0;"><strong>Cette semaine :</strong> Invitation bêta privée</p>
                    <p style="margin: 5px 0;"><strong>Semaine prochaine :</strong> Premier tournoi VIP</p>
                    <p style="margin: 5px 0;"><strong>Ce mois :</strong> Rencontre virtuelle avec l'équipe</p>
                </div>
                <p style="text-align: center; color: #FFD700; font-weight: bold; margin-top: 30px; font-size: 1.2rem;">
                    🎊 Bienvenue dans le club le plus exclusif de Rythmix ! 👑
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;

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
