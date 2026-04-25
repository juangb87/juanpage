import type { Metadata } from "next";
import Link from "next/link";

const sheinTrackingUrl = "https://app.bumbei.com";

export const metadata: Metadata = {
  title: "SHEIN México + Bitcoin Cashback | Bumbei",
  description:
    "Compra en SHEIN México desde Bumbei y recibe cashback en bitcoin.",
};

const steps = [
  {
    number: "01",
    title: "Activa tu ruta",
    copy: "Entra desde Bumbei antes de comprar. Ese click es lo que ayuda a validar tu recompensa.",
  },
  {
    number: "02",
    title: "Compra en SHEIN",
    copy: "Elige tus productos y paga normal en SHEIN México. No necesitas cambiar tu carrito.",
  },
  {
    number: "03",
    title: "Recibe bitcoin",
    copy: "Cuando la compra se valida, tu cashback se convierte en bitcoin dentro de Bumbei.",
  },
];

const trackingTips = [
  "No abras otros sitios de cupones después de activar Bumbei.",
  "Evita extensiones de cashback o cupones que puedan reemplazar el tracking.",
  "Termina la compra en la misma sesión donde abriste SHEIN desde Bumbei.",
];

export default function SheinLandingPage() {
  return (
    <main className="min-h-screen bg-[#151615] text-[#E3E3D7]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(252,106,66,0.30),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-6 md:px-10 md:py-8">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur md:px-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Bumbei home">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FC6A42] font-black text-[#151615]">
                b
              </div>
              <span className="text-lg font-bold">Bumbei</span>
            </Link>
            <a
              href={sheinTrackingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#FC6A42] px-4 py-2 text-sm font-bold text-[#151615] transition hover:bg-[#ff835d]"
            >
              Ir a SHEIN
            </a>
          </nav>

          <div className="grid items-center gap-10 py-14 md:grid-cols-[1.08fr_0.92fr] md:py-20">
            <div>
              <p className="inline-flex rounded-full border border-[#FC6A42]/25 bg-[#FC6A42]/10 px-4 py-2 text-sm font-semibold text-[#FC6A42]">
                SHEIN México + cashback en bitcoin
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Compra en SHEIN. Recibe bitcoin de vuelta.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#E3E3D7]/75 md:text-xl">
                Entra a SHEIN desde Bumbei, compra normal y convierte parte de tu compra en sats. Sin puntos muertos. Sin vueltas raras.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={sheinTrackingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#FC6A42] px-6 py-4 font-bold text-[#151615] transition hover:bg-[#ff835d]"
                >
                  Comprar en SHEIN con Bumbei
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 font-semibold text-[#E3E3D7] transition hover:border-[#FC6A42]/40 hover:bg-white/10"
                >
                  Ver cómo funciona
                </a>
              </div>
              <p className="mt-5 text-sm text-[#E3E3D7]/50">
                Tip honesto: si usas un cupón externo después de activar Bumbei, el tracking puede perderse.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur md:p-6">
              <div className="rounded-[1.6rem] bg-[#F5F1E8] p-5 text-[#151615]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#151615]/10 bg-white text-xl font-black tracking-[0.18em]">
                    SHEIN
                  </div>
                  <span className="rounded-full bg-[#151615] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#F5F1E8]">
                    Cashback
                  </span>
                </div>
                <div className="mt-8 rounded-[1.25rem] bg-[#FC6A42] p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-70">
                    Recompensa Bumbei
                  </p>
                  <p className="mt-2 text-5xl font-black">5%</p>
                  <p className="mt-2 text-lg font-semibold">en bitcoin cashback</p>
                </div>
                <div className="mt-4 grid gap-3 text-sm font-semibold">
                  <div className="flex items-center justify-between rounded-2xl bg-[#151615]/5 px-4 py-3">
                    <span>Compra</span>
                    <span>SHEIN México</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-[#151615]/5 px-4 py-3">
                    <span>Reward</span>
                    <span>Bitcoin</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-[#151615]/5 px-4 py-3">
                    <span>Vibe</span>
                    <span>Comprar igual, mejor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#FC6A42]">Cómo funciona</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Tres pasos. Cero magia negra.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-black text-[#FC6A42]">{step.number}</p>
              <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-[#E3E3D7]/70">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#FC6A42]">Para que sí trackee</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              No dejes que otro cupón se robe tu cashback.
            </h2>
          </div>
          <ul className="space-y-3 text-[#E3E3D7]/75">
            {trackingTips.map((tip) => (
              <li key={tip} className="rounded-2xl bg-[#151615]/60 px-4 py-3">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="rounded-[2rem] bg-[#FC6A42] p-8 text-[#151615] md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] opacity-70">Prueba piloto</p>
          <div className="mt-4 grid items-end gap-6 md:grid-cols-[1fr_auto]">
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Si vas a comprar en SHEIN, haz que también trabaje para tu futuro.
            </h2>
            <a
              href={sheinTrackingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#151615] px-6 py-4 font-bold text-[#E3E3D7] transition hover:bg-black"
            >
              Activar cashback
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
