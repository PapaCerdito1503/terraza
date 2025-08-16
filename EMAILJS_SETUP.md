# EmailJS Setup Instructions

To enable email functionality for the contact form, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month)

## 2. Configure Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose Gmail (or your preferred provider)
4. Follow setup instructions to connect your email

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: Nuevo mensaje de contacto - Terraza los Peques

Hola,

Has recibido un nuevo mensaje de contacto:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Fecha del evento: {{event_date}}
Mensaje: {{message}}

Responder a: {{reply_to}}

---
Enviado desde el sitio web de Terraza los Peques
```

## 4. Get Configuration Keys
1. Go to **Account** → **General**
2. Copy your **User ID** (Public Key)
3. Go to **Email Services** → Copy **Service ID**
4. Go to **Email Templates** → Copy **Template ID**

## 5. Update the Code
In `/app/contacto/page.tsx`, replace these values (lines 39-41):

```typescript
const serviceId = 'your_service_id_here'
const templateId = 'your_template_id_here'  
const publicKey = 'your_public_key_here'
```

## 6. Security Notes
- EmailJS keeps credentials server-side
- Only your public key is exposed in frontend code
- Perfect for static sites deployed to Azure/Netlify/Vercel

## 7. Features Included
- ✅ Sends email to fchortos@gmail.com
- ✅ Includes all form data
- ✅ Auto-opens Google Calendar event creation
- ✅ Works on static hosting (no backend needed)
- ✅ Free tier: 200 emails/month