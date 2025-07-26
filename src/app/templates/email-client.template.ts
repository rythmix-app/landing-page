export const EMAIL_CLIENT_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Newsletter Rythmix</title>
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
      padding: 0 40px;
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
        <h1>Bienvenue dans l’univers Rythmix</h1>
        <p>Préparez-vous à vivre une expérience musicale comme jamais auparavant.</p>
      </div>

      <div class="content">
        <div class="section">
          <h2>🎧 Découvrez votre nouvel espace musical</h2>
          <p>Des playlists adaptées à vos goûts, des jeux interactifs et un classement dynamique avec vos amis. Rythmix est plus qu'une app, c’est un univers.</p>
        </div>

        <div class="section">
          <h2>🧠 IA musicale à votre service</h2>
          <p>Notre intelligence artificielle apprend de vos habitudes pour vous proposer des recommandations toujours plus justes et surprenantes.</p>
        </div>

        <div class="section">
          <h2>🔥 La compétition commence</h2>
          <p>Défiez vos amis, gagnez des points, débloquez des bonus. Le tout dans un environnement 100% musical et fun.</p>
        </div>

        <div class="cta">
          <a href="https://rythmix-app.com">Accéder à la plateforme</a>
        </div>

        <div class="side-note">
          🚀 <strong>Vous êtes parmi les premiers à tester Rythmix !</strong><br/>
          • Bêta privée imminente<br/>
          • Accès privilégié<br/>
          • Récompenses exclusives à venir
        </div>
      </div>

      <div class="footer">
        Vous recevez cet email car vous vous êtes inscrit à Rythmix.<br/>
        <a href="#" style="color:#14FFEC;">Se désabonner</a> –<a href="mailto:app.rythmix@gmail.com?subject=Contact%20depuis%20la%20newsletter%20Rythmix&body=Bonjour,%0A%0A" style="color:#14FFEC;">Contact</a><br/>
      </div>
    </div>
  </div>
</body>
</html>
`;
