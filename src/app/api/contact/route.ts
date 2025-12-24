import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nome, empresa, email, telefone, assunto, mensagem } = body;

        // Validate required fields
        if (!nome || !email || !telefone || !mensagem) {
            return NextResponse.json(
                { error: 'Campos obrigatórios em falta.' },
                { status: 400 }
            );
        }

        // Create transporter - Configure with your SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Website Traders Agrícola" <${process.env.SMTP_USER}>`,
            to: 'info@tradesagricola.com',
            replyTo: email,
            subject: `[Website] Nova Solicitação: ${assunto}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #2A5E2A; padding: 20px; text-align: center;">
                        <h1 style="color: white; margin: 0;">Nova Mensagem do Website</h1>
                    </div>
                    <div style="padding: 30px; background: #f9f9f9;">
                        <h2 style="color: #2A5E2A; border-bottom: 2px solid #2A5E2A; padding-bottom: 10px;">
                            Dados do Cliente
                        </h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold; width: 150px;">Nome:</td>
                                <td style="padding: 10px 0;">${nome}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">Empresa:</td>
                                <td style="padding: 10px 0;">${empresa || 'Não informada'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">E-mail:</td>
                                <td style="padding: 10px 0;"><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">Telefone:</td>
                                <td style="padding: 10px 0;"><a href="tel:${telefone}">${telefone}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">Serviço:</td>
                                <td style="padding: 10px 0;">${assunto}</td>
                            </tr>
                        </table>
                        
                        <h2 style="color: #2A5E2A; border-bottom: 2px solid #2A5E2A; padding-bottom: 10px; margin-top: 30px;">
                             Mensagem
                        </h2>
                        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2A5E2A;">
                            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${mensagem}</p>
                        </div>
                    </div>
                    <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
                        <p style="margin: 0;">Este email foi enviado automaticamente pelo website tradesagricola.com</p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Erro ao enviar mensagem. Tente novamente.' },
            { status: 500 }
        );
    }
}
