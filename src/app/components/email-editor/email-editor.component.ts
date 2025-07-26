import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-editor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="editor-container">
      <div class="editor-panel">
        <h3>Éditeur de template</h3>
        <textarea
          [(ngModel)]="emailTemplate"
          (input)="onTemplateChange()"
          class="template-editor"
          placeholder="Collez votre template HTML ici...">
        </textarea>

        <div class="controls">
          <button (click)="resetTemplate()" class="btn btn-secondary">
            🔄 Réinitialiser
          </button>
          <button (click)="copyTemplate()" class="btn btn-primary">
            📋 Copier le code
          </button>
          <button (click)="downloadTemplate()" class="btn btn-success">
            💾 Télécharger
          </button>
        </div>
      </div>

      <div class="preview-panel">
        <h3>Aperçu en temps réel</h3>
        <div class="preview-container">
          <iframe
            #previewFrame
            [srcdoc]="safeHtml"
            class="email-preview">
          </iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .editor-container {
      display: flex;
      height: 100vh;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .editor-panel {
      width: 50%;
      padding: 20px;
      background: #f8f9fa;
      border-right: 1px solid #dee2e6;
    }

    .preview-panel {
      width: 50%;
      padding: 20px;
      background: #ffffff;
    }

    .template-editor {
      width: 100%;
      height: 70vh;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      border: 1px solid #ced4da;
      border-radius: 6px;
      padding: 15px;
      resize: none;
      outline: none;
    }

    .template-editor:focus {
      border-color: #14FFEC;
      box-shadow: 0 0 0 0.2rem rgba(20, 255, 236, 0.25);
    }

    .preview-container {
      height: 70vh;
      border: 1px solid #dee2e6;
      border-radius: 6px;
      overflow: hidden;
    }

    .email-preview {
      width: 100%;
      height: 100%;
      border: none;
      background: white;
    }

    .controls {
      margin-top: 15px;
      display: flex;
      gap: 10px;
    }

    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
    }

    .btn-primary {
      background: linear-gradient(135deg, #052E30, #14FFEC);
      color: white;
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
    }

    .btn-success {
      background: #28a745;
      color: white;
    }

    .btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h3 {
      color: #052E30;
      margin-bottom: 15px;
    }

    @media (max-width: 1200px) {
      .editor-container {
        flex-direction: column;
      }

      .editor-panel, .preview-panel {
        width: 100%;
        height: 50vh;
      }

      .template-editor, .preview-container {
        height: 35vh;
      }
    }
  `]
})
export class EmailEditorComponent {
  emailTemplate: string = '';
  safeHtml: SafeHtml = '';

  private readonly ORIGINAL_TEMPLATE = `<!DOCTYPE html>
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
</html>`;

  constructor(private sanitizer: DomSanitizer) {
    this.emailTemplate = this.ORIGINAL_TEMPLATE;
    this.updatePreview();
  }

  onTemplateChange(): void {
    this.updatePreview();
  }

  private updatePreview(): void {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.emailTemplate);
  }

  resetTemplate(): void {
    this.emailTemplate = this.ORIGINAL_TEMPLATE;
    this.updatePreview();
  }

  async copyTemplate(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.emailTemplate);
      console.log('Template copié dans le presse-papier ! 📋');
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  }

  downloadTemplate(): void {
    const blob = new Blob([this.emailTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rythmix-email-template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
