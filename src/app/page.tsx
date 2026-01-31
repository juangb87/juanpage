
import DarkModeToggle from "../components/DarkModeToggle";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const lightningTo =
    process.env.NEXT_PUBLIC_LIGHTNING_ADDRESS ?? "juangb87@cash.app";

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="flex justify-end max-w-3xl mx-auto mb-6">
        <DarkModeToggle />
      </div>
      {/* Hero */}

      <div className="flex justify-end max-w-3xl mx-auto mb-6">
        <button className="mr-4 px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          🇪🇸 Español
  </button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          🇺🇸 English
  </button>
      </div>

      <section className="max-w-3xl mx-auto text-center space-y-4">
        <img
          src="/avatar.jpeg"
          alt="Juan Gómez"
          className="mx-auto w-32 h-32 rounded-full border-4 border-gray-300 dark:border-gray-700 object-cover"
        />
        <h1 className="text-5xl font-bold">Hola, soy Juan 👋</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Construyo productos digitales que conectan tecnología con libertad financiera.
  </p>
      </section>

      {/* Proyectos */}
      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-4">🚀 Proyectos</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://bumbei.com" target="_blank" className="text-blue-600 hover:underline">
              • Bumbei — Cashback en Bitcoin al comprar online
            </a>
          </li>
          <li>
            <a href="https://lightsats.com" target="_blank" className="text-blue-600 hover:underline">
              • Lightsats — Enseña Bitcoin con pequeños incentivos
            </a>
          </li>
        </ul>
      </section>

      {/* Sobre mí */}
      <section className="max-w-3xl mx-auto mt-16 space-y-3">
        <h2 className="text-2xl font-semibold">👨‍💻 Sobre mí</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Fundador de <strong>Bumbei</strong>, una plataforma que permite ganar satoshis por comprar en línea. Apasionado por Bitcoin, productos digitales y la educación financiera para todos.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          También co-creador de <strong>Lightsats</strong>, un proyecto que ganó 1 BTC en un hackathon por hacer onboarding a nuevos usuarios de Bitcoin de forma amigable.
        </p>
      </section>

      {/* Donaciones */}
      <section className="max-w-3xl mx-auto mt-16 text-center space-y-4">
        <h2 className="text-2xl font-semibold">⚡ Invítame un café en sats</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Si te sirve mi trabajo y querés apoyar, podés dejar una propina por
          Lightning.
        </p>

        <div className="flex justify-center">
          <lightning-widget
            name="Juan"
            accent="#F7931A"
            to={lightningTo}
            image="https://juanpage.com/avatar.jpeg"
            amounts="100,500,1000,5000"
            labels="100 sats,500 sats,1k sats,5k sats"
          />
        </div>

      </section>

      {/* Contacto */}
      <section className="max-w-3xl mx-auto mt-16 text-center space-y-2">
        <p className="text-md">📬 ¿Quieres colaborar o saludar?</p>
        <a
          href="mailto:juan@bumbei.com"
          className="inline-block mt-2 px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Escríbeme
        </a>

        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a
            href="https://twitter.com/juansebastiangb"
            target="_blank"
            aria-label="X/Twitter"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/juangb87"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-gomez-flexoffers/" // reemplaza por el tuyo
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </main>
  );
}
