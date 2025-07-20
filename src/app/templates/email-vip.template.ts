export const EMAIL_VIP_TEMPLATE = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue VIP chez Rythmix</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
            border: 3px solid #FFD700;
        }
        .header {
            background: linear-gradient(135deg, #FFD700, #FFA500, #FF6B35);
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        .vip-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: #FF1744;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
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
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .content {
            padding: 40px 30px;
            line-height: 1.6;
        }
        .vip-welcome {
            font-size: 1.4rem;
            color: #FFD700;
            margin-bottom: 20px;
            font-weight: 700;
            text-align: center;
        }
        .premium-box {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            padding: 25px;
            border-radius: 15px;
            margin: 20px 0;
            color: white;
        }
        .premium-feature {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }
        .premium-feature .icon {
            width: 30px;
            height: 30px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-size: 0.9rem;
        }
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #FF1744, #FF6B35);
            color: white;
            padding: 18px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            box-shadow: 0 10px 20px rgba(255, 23, 68, 0.3);
        }
        .exclusive-calendar {
            background: #fff3cd;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #FFD700;
            color: #856404;
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

                    <div class="premium-feature">
                        <div class="icon">🎵</div>
                        <div><strong>Playlist exclusives</strong> - Créées par des DJs professionnels</div>
                    </div>
                </div>

                <div style="text-align: center; margin: 30px 0;">
                    <a href="https://rythmix.com/vip" class="cta-button">🚀 Accéder à mon espace VIP</a>
                </div>

                <div class="exclusive-calendar">
                    <h4 style="color: #FFD700; margin-top: 0;">🗓️ Calendrier VIP exclusif :</h4>
                    <p style="margin: 5px 0;"><strong>Cette semaine :</strong> Invitation bêta privée</p>
                    <p style="margin: 5px 0;"><strong>Semaine prochaine :</strong> Premier tournoi VIP</p>
                    <p style="margin: 5px 0;"><strong>Ce mois :</strong> Rencontre virtuelle avec l'équipe</p>
                    <p style="margin: 5px 0;"><strong>Bonus :</strong> Accès anticipé aux nouvelles fonctionnalités</p>
                </div>

                <p style="text-align: center; color: #FFD700; font-weight: bold; margin-top: 30px; font-size: 1.2rem;">
                    🎊 Bienvenue dans le club le plus exclusif de Rythmix ! 👑
                </p>

                <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
                    <p style="margin: 0; font-size: 0.9rem; color: #666;">
                        💌 Des surprises VIP arrivent très bientôt dans votre boîte mail !
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;
