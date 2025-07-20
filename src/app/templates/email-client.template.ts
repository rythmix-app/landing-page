export const EMAIL_CLIENT_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue chez Rythmix</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #052E30, #0D7377);
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #052E30, #14FFEC);
            padding: 40px 30px;
            text-align: center;
        }
        .logo {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
        }
        .header h1 {
            color: white;
            font-size: 2.5rem;
            margin: 0;
            font-weight: 700;
        }
        .content {
            padding: 40px 30px;
            line-height: 1.6;
        }
        .welcome-message {
            font-size: 1.3rem;
            color: #052E30;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .features {
            background: #f8f9fa;
            border-radius: 15px;
            padding: 25px;
            margin: 30px 0;
        }
        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        .feature-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #14FFEC, #19B3BD);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-size: 1.2rem;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #052E30, #14FFEC);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
        }
        @media (max-width: 600px) {
            .container { margin: 0; border-radius: 0; }
            .header, .content { padding: 30px 20px; }
            .header h1 { font-size: 2rem; }
        }
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

                <p style="text-align: center; margin-top: 30px; color: #666; font-size: 0.9rem;">
                    Restez connecté pour ne rien manquer ! 🚀
                </p>
            </div>
        </div>
    </div>
</body>
</html>
`;
