import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    const { nombre, email, telefono, fecha, mensaje } = formData;
    
    // Email content
    const emailContent = `
      Nuevo mensaje de contacto de Terraza los Peques:
      
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Fecha del evento: ${fecha}
      Mensaje: ${mensaje}
      
      Este mensaje fue enviado desde el formulario de contacto del sitio web.
    `;
    
    // For now, we'll just log the email content
    // In a production environment, you would use a service like Nodemailer or a third-party service
    console.log("EMAIL TO SEND:");
    console.log("To: fchortos@gmail.com");
    console.log("Subject: Nuevo mensaje de contacto - Terraza los Peques");
    console.log("Body:");
    console.log(emailContent);
    
    // Simulate email sending
    // In a real implementation, you would actually send the email here
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "¡Mensaje enviado correctamente! Nos pondremos en contacto contigo muy pronto." 
      }), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo." 
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ message: "Método no permitido" }), 
    { 
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
}