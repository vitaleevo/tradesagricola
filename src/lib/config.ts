import nodemailer from 'nodemailer';

/**
 * SMTP Configuration helper to centralize environment variable access.
 */
export const smtpConfig = {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '465'),
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '',
    from: process.env.SMTP_USER || '',
    contactEmail: process.env.CONTACT_EMAIL || '',
    secure: process.env.SMTP_SECURE === 'true' || parseInt(process.env.SMTP_PORT || '465') === 465,
};

/**
 * Creates a nodemailer transporter instance using environment variables.
 */
export const createTransporter = () => {
    if (!smtpConfig.host || !smtpConfig.user || !smtpConfig.pass) {
        console.warn('Warning: SMTP credentials not fully configured in environment variables.');
    }

    return nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.secure,
        auth: {
            user: smtpConfig.user,
            pass: smtpConfig.pass,
        },
    });
};
