export const EMAIL_VIP_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Suivi de votre demande VIP - Rythmix</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #f5f7fa;
      color: #333;
    }
    .email-wrapper {
      width: 100%;
      padding: 40px 0;
      background: #f5f7fa;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    }
    .top-bar {
      background: #052E30;
      color: #14FFEC;
      padding: 10px 20px;
      font-size: 12px;
      text-align: center;
      letter-spacing: 0.5px;
    }
    .header {
      padding: 30px 30px 20px;
      text-align: center;
    }
    .logo-img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      border-radius: 12px;
      margin-bottom: 15px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      color: #052E30;
    }
    .header p {
      font-size: 15px;
      color: #555;
      margin-top: 10px;
    }
    .hero {
      width: 100%;
      height: auto;
    }
    .content {
      padding: 40px;
      color: white;
      background: #052E30;
    }
    .section {
      margin-bottom: 25px;
    }
    .section h2 {
      color: #052E30;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .section p {
      font-size: 14px;
      line-height: 1.6;
      color: #444;
    }
    .cta {
      text-align: center;
      margin: 30px 0;
    }
    .cta a {
      background: linear-gradient(135deg, #052E30, #14FFEC);
      color: white;
      padding: 14px 26px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      font-size: 15px;
    }
    .side-note {
      background: #e6fefc;
      border-left: 4px solid #14FFEC;
      padding: 20px;
      font-size: 13px;
      color: #052E30;
      margin: 30px;
      border-radius: 6px;
    }
    .footer {
      font-size: 12px;
      color: #888;
      text-align: center;
      padding: 20px 30px 30px;
    }

    @media (max-width: 600px) {
      .content, .side-note, .header {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <div class="top-bar">
        🎵 Rythmix – Votre sélection musicale personnalisée
      </div>

      <div class="header">
        <img src="../../../assets/images/logo_rythmix.png" alt="Logo Rythmix" class="logo-img"/>
        <h1>Bienvenue dans l’univers VIP Rythmix</h1>
        <p>Votre demande d'accès au VIP a bien été enregistrée 👑<br>Nous allons vous recontacter <br> <br> <br> <strong style="font-size: 16px">✨Merci de votre intérêt pour Rythmix Premium✨</strong></p>
      </div>

      <div class="footer">
        Vous recevez cet email car vous vous êtes inscrit à Rythmix.<br/>
        <a href="#" style="color:#14FFEC;">Se désabonner</a> – <a href="#" style="color:#14FFEC;">Voir en ligne</a> - <a href="mailto:app.rythmix@gmail.com?subject=Contact%20depuis%20la%20newsletter%20Rythmix&body=Bonjour,%0A%0A" style="color:#14FFEC;">Contact</a><br/>
      </div>
    </div>
  </div>
</body>
</html>
`;
