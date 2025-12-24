"use client";

import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        assunto: 'Paisagismo',
        mensagem: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erro ao enviar mensagem.');
            }

            setStatus('success');
            setFormData({
                nome: '',
                empresa: '',
                email: '',
                telefone: '',
                assunto: 'Paisagismo',
                mensagem: ''
            });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Erro ao enviar mensagem.');
        }
    };

    return (
        <div className="bg-white dark:bg-surface-dark p-8 lg:p-12 rounded-[32px] shadow-2xl border border-gray-100 dark:border-white/5">
            {status === 'success' ? (
                <div className="text-center py-20 flex flex-col items-center gap-6">
                    <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="text-2xl font-bold">Mensagem Enviada!</h3>
                    <p className="text-text-muted">Agradecemos o seu contacto. Um especialista irá responder em menos de 24 horas.</p>
                    <button onClick={() => setStatus('idle')} className="text-primary font-bold hover:underline">Enviar nova mensagem</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {status === 'error' && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 p-4 rounded-xl flex items-center gap-3">
                            <span className="material-symbols-outlined">error</span>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-text-main dark:text-gray-300">Nome Completo *</label>
                            <input
                                type="text"
                                required
                                value={formData.nome}
                                onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                                placeholder="Ex: João Manuel"
                                className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-text-main dark:text-gray-300">Empresa (opcional)</label>
                            <input
                                type="text"
                                value={formData.empresa}
                                onChange={(e) => setFormData(prev => ({ ...prev, empresa: e.target.value }))}
                                placeholder="Nome da sua organização"
                                className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-text-main dark:text-gray-300">E-mail Corporativo *</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                placeholder="email@empresa.com"
                                className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-text-main dark:text-gray-300">Telefone *</label>
                            <input
                                type="tel"
                                required
                                value={formData.telefone}
                                onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
                                placeholder="+244 9XX XXX XXX"
                                className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-text-main dark:text-gray-300">Serviço de Interesse</label>
                        <select
                            value={formData.assunto}
                            onChange={(e) => setFormData(prev => ({ ...prev, assunto: e.target.value }))}
                            className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all appearance-none"
                        >
                            <option>Paisagismo</option>
                            <option>Insumos Agrícolas</option>
                            <option>Manutenção B2B</option>
                            <option>Vasos e Ornamentação</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-text-main dark:text-gray-300">Mensagem *</label>
                        <textarea
                            required
                            rows={4}
                            value={formData.mensagem}
                            onChange={(e) => setFormData(prev => ({ ...prev, mensagem: e.target.value }))}
                            placeholder="Descreva brevemente a sua necessidade..."
                            className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary outline-none transition-all resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="h-14 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                        {status === 'loading' ? 'Enviando...' : 'Enviar Pedido de Orçamento'}
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </form>
            )}
        </div>
    );
};
