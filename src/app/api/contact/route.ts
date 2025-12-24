import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // Max 3 requests per minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];
    const recentTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW);

    if (recentTimestamps.length >= MAX_REQUESTS) {
        return true;
    }

    recentTimestamps.push(now);
    rateLimitMap.set(ip, recentTimestamps);
    return false;
}

// Helper to escape HTML and prevent injection
function escapeHtml(text: string): string {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
    try {
        const origin = request.headers.get('origin');
        const referer = request.headers.get('referer');
        const host = request.headers.get('host');

        // 1. Cross-Site Request Forgery (CSRF) Protection
        // Verifies if the request is coming from our own domain
        const isAllowedOrigin = !origin || origin.includes(host || '');
        const isAllowedReferer = !referer || referer.includes(host || '');

        if (!isAllowedOrigin && !isAllowedReferer) {
            console.warn(`Blocked cross-origin request from: ${origin}`);
            return NextResponse.json(
                { error: 'Acesso não autorizado (Cross-Origin bloqueado).' },
                { status: 403 }
            );
        }

        const forwarded = request.headers.get("x-forwarded-for");
        const ip = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";

        // 1. Rate Limiting Check
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Muitas solicitações. Por favor, aguarde um minuto.' },
                { status: 429 }
            );
        }

        const body = await request.json();

        // 2. Honeypot check (anti-bot)
        // If 'website' or 'confirm_email' fields are filled, it's a bot
        if (body.website || body.confirmEmail) {
            console.log('Bot detected via honeypot');
            return NextResponse.json({ success: true, message: 'Processado com sucesso' });
        }

        const { nome, empresa, email, telefone, assunto, mensagem } = body;

        // 3. Validation
        if (!nome || !email || !telefone || !mensagem) {
            return NextResponse.json(
                { error: 'Campos obrigatórios em falta.' },
                { status: 400 }
            );
        }

        if (mensagem.length > 2000) {
            return NextResponse.json(
                { error: 'A mensagem é demasiado longa.' },
                { status: 400 }
            );
        }

        // 4. Sanitization
        const safeNome = escapeHtml(nome.substring(0, 100));
        const safeEmpresa = escapeHtml((empresa || '').substring(0, 100));
        const safeEmail = escapeHtml(email.substring(0, 100));
        const safeTelefone = escapeHtml(telefone.substring(0, 25));
        const safeAssunto = escapeHtml(assunto.substring(0, 100));
        const safeMensagem = escapeHtml(mensagem);

        // Create transporter - SSL/TLS Configuration
        const isSecure = process.env.SMTP_SECURE === 'true' || parseInt(process.env.SMTP_PORT || '465') === 465;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: isSecure,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content - send to the configured contact email
        const mailOptions = {
            from: `"Website Traders Agrícola" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `[Website] Nova Solicitação: ${safeAssunto}`,
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
                                <td style="padding: 10px 0;">${safeNome}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">Empresa:</td>
                                <td style="padding: 10px 0;">${safeEmpresa || 'Não informada'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">E-mail:</td>
                                <td style="padding: 10px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">Telefone:</td>
                                <td style="padding: 10px 0;"><a href="tel:${safeTelefone}">${safeTelefone}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; font-weight: bold;">Serviço:</td>
                                <td style="padding: 10px 0;">${safeAssunto}</td>
                            </tr>
                        </table>
                        
                        <h2 style="color: #2A5E2A; border-bottom: 2px solid #2A5E2A; padding-bottom: 10px; margin-top: 30px;">
                             Mensagem
                        </h2>
                        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2A5E2A;">
                            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${safeMensagem}</p>
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

