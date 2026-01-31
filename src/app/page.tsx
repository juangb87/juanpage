
import Image from "next/image";
import DarkModeToggle from "../components/DarkModeToggle";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const EXT = "noopener noreferrer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-10 sm:py-14">
      <div className="max-w-3xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex gap-2">
            {/* TODO: wire real i18n later; for now keep as visual */}
            <button
              className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900"
              aria-label="Español"
            >
              🇪🇸 ES
            </button>
            <button
              className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-900"
              aria-label="English"
            >
              🇺🇸 EN
            </button>
          </div>
          <DarkModeToggle />
        </div>

        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-gray-200 dark:ring-gray-800">
            <Image
              src="/avatar.jpeg"
              alt="Juan Gómez"
              width={256}
              height={256}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Hola, soy Juan 👋
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Construyo productos digitales que conectan tecnología con libertad
            financiera.
          </p>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Full-time en FlexOffers · Founder construyendo Bumbei
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:juan@bumbei.com"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition"
            >
              Contactar
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              Ver proyectos
            </a>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">🚀 Proyectos</h2>

          <div className="grid grid-cols-1 gap-4">
            <a
              href="https://bumbei.com"
              target="_blank"
              rel={EXT}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold group-hover:underline">
                    Bumbei
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Cashback en Bitcoin al comprar online.
                  </p>
                </div>
                <span className="text-sm text-gray-400">↗</span>
              </div>
            </a>

            <a
              href="https://lightsats.com"
              target="_blank"
              rel={EXT}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold group-hover:underline">
                    Lightsats
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Enseña Bitcoin con pequeños incentivos.
                  </p>
                </div>
                <span className="text-sm text-gray-400">↗</span>
              </div>
            </a>
          </div>
        </section>

        {/* Sobre mí */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">👨‍💻 Sobre mí</h2>
          <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Fundador de <strong>Bumbei</strong>, una plataforma que permite
              ganar satoshis por comprar en línea. Apasionado por Bitcoin,
              productos digitales y la educación financiera para todos.
            </p>
            <p>
              También co-creador de <strong>Lightsats</strong>, un proyecto que
              ganó 1 BTC en un hackathon por hacer onboarding a nuevos usuarios
              de Bitcoin de forma amigable.
            </p>
          </div>
        </section>

        {/* Partnerships + Contacto */}
        <section className="mt-12 sm:mt-16 text-center">
          <p className="text-base sm:text-lg font-medium">
            🤝 Partnerships: Creadores y marcas — campañas con deeplinks +
            tracking.
          </p>

          <a
            href="mailto:juan@bumbei.com"
            className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
          >
            juan@bumbei.com
          </a>

          <div className="mt-8 flex justify-center gap-6 text-2xl">
            <a
              href="https://twitter.com/juansebastiangb"
              target="_blank"
              rel={EXT}
              aria-label="X/Twitter"
              className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/juangb87"
              target="_blank"
              rel={EXT}
              aria-label="GitHub"
              className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-gomez-flexoffers/"
              target="_blank"
              rel={EXT}
              aria-label="LinkedIn"
              className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            © {new Date().getFullYear()} Juan Gómez
          </p>
        </section>
      </div>
    </main>
  );
}
