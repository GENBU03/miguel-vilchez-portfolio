import { useEffect, useState } from 'react';
import profilePhoto from './Miguel.jpeg';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'education', label: 'Educación' },
  { id: 'certifications', label: 'Certificaciones' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'goals', label: 'Objetivos' },
  { id: 'contact', label: 'Contacto' },
];

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('portfolioTheme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Miguel Vilchez</div>
          <nav className="hidden items-center gap-4 md:flex">
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-slate-300 transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(79,216,255,0.18),_transparent_40%)]" />
        <div className="pointer-events-none absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <section id="hero" className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:p-10">
              <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Portfolio junior
              </span>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Hola, soy <span className="text-cyan-300">Miguel Ángel</span>
                </h1>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                  Estudiante de Ingeniería de Sistemas en la UTP, con formación en IDAT y certificaciones en Python y redes. Busco mi primera práctica profesional para aplicar mis conocimientos técnicos y aprender dentro de un equipo.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:miguelmeneses1711@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Contactar
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  Ver proyectos
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Ubicación</p>
                  <p className="mt-3 text-lg font-medium text-white">Castilla, Piura, Perú</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Objetivo</p>
                  <p className="mt-3 text-lg font-medium text-white">Prácticas profesionales / primer empleo IT</p>
                </div>
              </div>
            </div>

            <aside className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:p-10">
              <div className="grid gap-6">
                <div className="aspect-square overflow-hidden rounded-3xl bg-slate-200/80 dark:bg-slate-900/80">
                  <img
                    src={profilePhoto}
                    alt="Foto de Miguel Ángel"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Perfil</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">Miguel Ángel Vilchez Meneses</h2>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    Estudiante con formación en tecnología y sistemas de información, buscando crecer con proyectos reales y construir soluciones eficientes.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/51918286445"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://www.linkedin.com/in/miguel-angel-vilchez-meneses-54003a243"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 transition hover:bg-cyan-400/10 hover:text-cyan-200"
                  >
                    LinkedIn
                  </a>
                </div>
                <a
                  href="#contact"
                  className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/10"
                >
                  Descargar CV
                </a>
              </div>
            </aside>
          </section>

          <section id="about" className="mt-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">01</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Sobre mí</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">Un perfil junior con enfoque práctico</h3>
                <p className="mt-5 leading-8 text-slate-300">
                  Soy estudiante de la Universidad Tecnológica del Perú (UTP) con formación previa en IDAT. He desarrollado bases en programación, administración de sistemas y redes, con interés en soluciones tecnológicas claras y eficientes.
                </p>
                <p className="mt-4 leading-8 text-slate-300">
                  Mi objetivo es crecer en equipos colaborativos, aportar con dedicación y aprender de cada proyecto para avanzar como profesional de TI.
                </p>
              </div>
              <div className="grid gap-5">
                {['UTP + IDAT', 'Python, IT Essentials, CCNAv7', 'Aprendizaje constante'].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm text-slate-400">{item === 'UTP + IDAT' ? 'Formación' : item === 'Python, IT Essentials, CCNAv7' ? 'Certificaciones' : 'Actitud'}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="education" className="mt-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">02</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Educación</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
              {[
                { year: '2026', title: 'Ingeniería de Sistemas', institution: 'Universidad Tecnológica del Perú (UTP)', note: 'Estudiante actual' },
                { year: '2022 - 2024', title: 'Técnico en Tecnología', institution: 'Instituto IDAT', note: 'Ciclo VI completado' },
              ].map((item) => (
                <div key={item.year} className="grid gap-3 border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{item.year}</p>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-300">{item.institution}</p>
                  <p className="text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="mt-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">03</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Certificaciones</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { title: 'CCNAv7 Cisco', description: 'Fundamentos de redes, configuraciones básicas y soporte de infraestructuras.' },
                { title: 'Python Essentials', description: 'Programación básica en Python y lógica aplicada.' },
                { title: 'IT Essentials', description: 'Hardware, software y soporte técnico de PC.' },
                { title: 'MySQL / SQL Server', description: 'Gestión y consultas de bases de datos relacionales.' },
              ].map((item) => (
                <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl transition hover:border-cyan-300/30">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="mt-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">04</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Habilidades técnicas</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">Tecnologías que manejo</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MySQL', 'SQL Server'].map((skill) => (
                    <div key={skill} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="grid gap-6">
                {[
                  { label: 'Python', value: 70 },
                  { label: 'JavaScript', value: 60 },
                  { label: 'HTML / CSS', value: 75 },
                  { label: 'SQL', value: 65 },
                ].map((skill) => (
                  <div key={skill.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-900">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="mt-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">05</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Proyectos</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { title: 'Sistema de almacén de artefactos tecnológicos', description: 'Plataforma para gestionar inventario de dispositivos y componentes. Frontend con Angular, Bootstrap y Node.js; backend con Spring Boot y MySQL.' },
                { title: 'Mini sitio de presentación', description: 'Proyecto personal en HTML/CSS/JS para practicar diseño responsivo y animaciones suaves.' },
                { title: 'Gestor de tareas', description: 'Aplicación inicial con lógica de JavaScript para manejar tareas y estados.' },
                { title: 'Consultas en MySQL', description: 'Ejercicios de bases de datos con SQL Server y MySQL para manejar información estructurada.' },
              ].map((project) => (
                <article key={project.title} className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl transition hover:border-cyan-300/30">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="goals" className="mt-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">06</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Objetivos profesionales</h2>
              </div>
            </div>
            <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
              <p className="text-lg leading-8 text-slate-300">
                Desarrollarme como profesional en el área de tecnología y desarrollo de software, fortaleciendo continuamente mis habilidades técnicas y participando en proyectos que me permitan adquirir experiencia real y aportar soluciones eficientes.
              </p>
              <ul className="mt-6 grid gap-4 text-slate-300 sm:grid-cols-2">
                <li className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">Participar en proyectos reales con enfoque práctico.</li>
                <li className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">Aprender nuevas herramientas de desarrollo y redes.</li>
                <li className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">Mejorar la comunicación técnica en equipos interdisciplinarios.</li>
              </ul>
            </div>
          </section>

          <section id="contact" className="mt-24 pb-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">07</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Contacto</h2>
              </div>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">Escríbeme</h3>
                <p className="mt-4 text-slate-300 leading-7">Estoy disponible para prácticas profesionales o roles junior en tecnología.</p>
                <ul className="mt-6 space-y-4 text-slate-300">
                  <li>
                    <span className="font-medium text-white">Teléfono:</span> +51 918 286 445
                  </li>
                  <li>
                    <span className="font-medium text-white">Email:</span>{' '}
                    <a href="mailto:miguelmeneses1711@gmail.com" className="text-cyan-300 hover:text-cyan-200">miguelmeneses1711@gmail.com</a>
                  </li>
                  <li>
                    <span className="font-medium text-white">Ubicación:</span> Castilla, Piura, Perú
                  </li>
                </ul>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">Redes y enlace</h3>
                <p className="mt-4 text-slate-300 leading-7">Conecta conmigo en LinkedIn o envíame un mensaje por WhatsApp.</p>
                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href="https://www.linkedin.com/in/miguel-angel-vilchez-meneses-54003a243"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://wa.me/51918286445"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:miguelmeneses1711@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500 lg:px-8">
          © 2026 Miguel Ángel Vilchez Meneses • Estudiante de Ingeniería de Sistemas • Portfolio Junior
        </div>
      </footer>
    </div>
  );
}

export default App;
