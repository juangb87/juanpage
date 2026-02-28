"use client";

import { useEffect, useState } from 'react';

interface RedirectorProps {
  targetUrl: string;
  delayMs?: number;
  title: string;
  description?: string;
}

export function Redirector({ targetUrl, delayMs = 800, title, description }: RedirectorProps) {
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(delayMs / 1000));

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.replace(targetUrl);
    }, delayMs);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, [delayMs, targetUrl]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Bumbei Redirect</p>
        <h1 className="text-3xl font-semibold mb-3">{title}</h1>
        {description ? (
          <p className="text-slate-200 mb-6">{description}</p>
        ) : (
          <p className="text-slate-200 mb-6">Estamos preparando tu acceso…</p>
        )}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6">
          <p className="text-sm text-slate-400">Redirigiendo en ~{secondsLeft}s</p>
          <p className="font-mono text-emerald-300 text-xs break-all mt-2">{targetUrl}</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full rounded-xl bg-amber-400 text-black font-semibold py-3 transition hover:bg-amber-300"
          onClick={() => window.location.replace(targetUrl)}
        >
          Ir ahora
        </button>
        <p className="text-xs text-slate-500 mt-4">
          Si no sucede nada, haz clic en el botón o copia el enlace. Este puente ayuda a que
          Disney+ reciba la referencia correcta.
        </p>
      </div>
    </div>
  );
}
