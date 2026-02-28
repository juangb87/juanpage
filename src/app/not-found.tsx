import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">Bumbei Redirect</p>
        <h1 className="text-3xl font-semibold mb-2">Link no encontrado</h1>
        <p className="text-slate-300 mb-6">
          El puente que intentaste abrir no existe o ya no está activo. Verifica el enlace o regresa
          al sitio principal de Juan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center w-full rounded-xl bg-amber-400 text-black font-semibold py-3 transition hover:bg-amber-300"
        >
          Volver a juanpage.com
        </Link>
      </div>
    </main>
  );
}
