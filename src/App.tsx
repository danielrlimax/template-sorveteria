import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */

const menu = [
  {
    category: "Açaí",
    emoji: "🫐",
    items: [
      { name: "Açaí Tradicional", desc: "Açaí puro com granola e banana", price: "R$ 18" },
      { name: "Açaí Especial", desc: "Açaí com morango, granola, leite condensado e mel", price: "R$ 24" },
      { name: "Açaí na Tigela", desc: "Tigela grande com frutas da estação", price: "R$ 28" },
      { name: "Açaí Zero", desc: "Sem adição de açúcar, com frutas naturais", price: "R$ 22" },
    ],
  },
  {
    category: "Sorvetes",
    emoji: "🍦",
    items: [
      { name: "Casquinha Simples", desc: "1 bola no sabor à escolha", price: "R$ 9" },
      { name: "Casquinha Dupla", desc: "2 bolas no sabor à escolha", price: "R$ 14" },
      { name: "Sundae", desc: "2 bolas com calda, chantilly e granulado", price: "R$ 19" },
      { name: "Milkshake", desc: "Shake cremoso nos sabores da casa", price: "R$ 22" },
    ],
  },
  {
    category: "Vitaminas",
    emoji: "🍓",
    items: [
      { name: "Vitamina de Morango", desc: "Morango, leite e um toque de mel", price: "R$ 16" },
      { name: "Vitamina Tropical", desc: "Manga, maracujá e laranja", price: "R$ 16" },
      { name: "Green Smoothie", desc: "Espinafre, banana, maçã e gengibre", price: "R$ 18" },
      { name: "Vitamina Power", desc: "Açaí, morango, banana e granola", price: "R$ 20" },
    ],
  },
];

const flavors = [
  { name: "Morango", color: "#fb7185", emoji: "🍓" },
  { name: "Chocolate", color: "#92400e", emoji: "🍫" },
  { name: "Baunilha", color: "#fde68a", emoji: "🍌" },
  { name: "Pistache", color: "#86efac", emoji: "🌿" },
  { name: "Açaí", color: "#7c3aed", emoji: "🫐" },
  { name: "Maracujá", color: "#fbbf24", emoji: "🍋" },
];

const testimonials = [
  {
    name: "Ana Clara",
    text: "O açaí especial é simplesmente incrível! Já virei cliente fiel. A qualidade é impecável e o atendimento super gentil.",
    stars: 5,
  },
  {
    name: "João Pedro",
    text: "Melhor sorvete que já comi por aqui. O milkshake de chocolate é perfeito para o verão. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Fernanda Lima",
    text: "Adoro que usam ingredientes frescos e naturais. O açaí zero açúcar é a melhor opção saudável da cidade.",
    stars: 5,
  },
];

/* ─── COMPONENTS ────────────────────────────────────────────────────────────── */

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-amber-400" : "text-stone-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#cardapio", label: "Cardápio" },
    { href: "#sabores", label: "Sabores" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf8f3]/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🍨</span>
          <span className="font-display text-xl font-bold text-stone-800 tracking-tight">
            Gelato & Açaí
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 hover:text-violet-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-medium bg-violet-600 text-white px-5 py-2 rounded-full hover:bg-violet-700 transition-colors"
          >
            Peça agora
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-stone-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fdf8f3] border-t border-stone-200 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-stone-600 hover:text-violet-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="text-sm font-medium bg-violet-600 text-white px-5 py-2 rounded-full text-center hover:bg-violet-700 transition-colors"
          >
            Peça agora
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#fdf8f3]">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block text-sm font-medium text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full mb-5 border border-violet-100">
            🌿 Natural, fresco e delicioso
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-5">
            Sabores que{" "}
            <span className="text-violet-600">abraçam</span>{" "}
            a alma
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-md">
            Do cremoso açaí na tigela ao sorvete artesanal — feito com ingredientes frescos, pra você aproveitar cada momento com mais sabor.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#cardapio"
              className="bg-violet-600 text-white font-medium px-7 py-3 rounded-full hover:bg-violet-700 transition-colors text-sm"
            >
              Ver cardápio
            </a>
            <a
              href="#sobre"
              className="bg-white text-stone-700 font-medium px-7 py-3 rounded-full hover:bg-stone-50 transition-colors text-sm border border-stone-200"
            >
              Nossa história
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex gap-8">
            {[
              { num: "30+", label: "Sabores" },
              { num: "5★", label: "Avaliação" },
              { num: "3 anos", label: "de amor" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-bold text-stone-800">{s.num}</p>
                <p className="text-xs text-stone-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Background blob */}
            <div className="absolute inset-0 bg-violet-100 rounded-full scale-110 opacity-50" />
            <img
              src="/images/hero-bowl.png"
              alt="Açaí bowl"
              className="relative z-10 w-full h-full object-cover rounded-full shadow-xl"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-20">
              <span className="text-2xl">🫐</span>
              <div>
                <p className="text-xs font-semibold text-stone-700">Açaí Especial</p>
                <p className="text-xs text-stone-400">Mais pedido 🔥</p>
              </div>
            </div>
            <div className="absolute -top-2 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-20">
              <span className="text-2xl">🍓</span>
              <div>
                <p className="text-xs font-semibold text-stone-700">100% Natural</p>
                <p className="text-xs text-stone-400">Sem conservantes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 bg-[#f5ede0]">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="images/acai-copo.png"
            alt="Açaí no copo"
            className="rounded-2xl object-cover w-full h-48 md:h-56 shadow-md"
          />
          <img
            src="images/sorvete.png"
            alt="Sorvete"
            className="rounded-2xl object-cover w-full h-48 md:h-56 shadow-md mt-6"
          />
          <img
            src="images/vitamina.png"
            alt="Vitamina"
            className="rounded-2xl object-cover w-full h-48 md:h-56 shadow-md col-span-2"
          />
        </div>

        {/* Text */}
        <div>
          <span className="inline-block text-sm font-medium text-rose-500 bg-rose-50 px-4 py-1.5 rounded-full mb-5 border border-rose-100">
            Nossa história
          </span>
          <h2 className="font-display text-4xl font-bold text-stone-800 leading-snug mb-5">
            Feito com carinho,{" "}
            <span className="text-violet-600">desde 2022</span>
          </h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Nascemos do amor por sabores genuínos. Cada bowl de açaí e cada casquinha de sorvete que servimos é preparada com ingredientes selecionados e muito cuidado.
          </p>
          <p className="text-stone-500 leading-relaxed mb-8">
            Nossa missão é simples: trazer frescor, qualidade e um sorriso no rosto de cada cliente que cruza nossa porta.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🌱", title: "Ingredientes frescos", desc: "Selecionamos com cuidado" },
              { icon: "🤝", title: "Atendimento gentil", desc: "Você em primeiro lugar" },
              { icon: "♻️", title: "Embalagens eco", desc: "Compromisso com o planeta" },
              { icon: "💜", title: "Feito com amor", desc: "Em cada detalhe" },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{c.icon}</span>
                <p className="font-semibold text-stone-700 text-sm mt-2">{c.title}</p>
                <p className="text-stone-400 text-xs mt-0.5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cardapio" className="py-20 bg-[#fdf8f3]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full mb-4 border border-violet-100">
            O que temos
          </span>
          <h2 className="font-display text-4xl font-bold text-stone-800">Nosso Cardápio</h2>
          <p className="text-stone-500 mt-3 max-w-md mx-auto">
            Escolha o seu favorito e venha nos visitar. Tem coisa boa pra todo mundo!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {menu.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === i
                  ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                  : "bg-white text-stone-600 border border-stone-200 hover:border-violet-300 hover:text-violet-600"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menu[activeTab].items.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-xl mb-4">
                {menu[activeTab].emoji}
              </div>
              <h3 className="font-semibold text-stone-800 text-sm mb-1">{item.name}</h3>
              <p className="text-stone-400 text-xs leading-relaxed mb-4">{item.desc}</p>
              <p className="font-display font-bold text-violet-600 text-lg">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flavors() {
  return (
    <section id="sabores" className="py-20 bg-[#f5ede0]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-rose-500 bg-rose-50 px-4 py-1.5 rounded-full mb-4 border border-rose-100">
            Sabores disponíveis
          </span>
          <h2 className="font-display text-4xl font-bold text-stone-800">
            Escolha o seu 💜
          </h2>
          <p className="text-stone-500 mt-3">Mais de 30 sabores rotativos ao longo do ano.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {flavors.map((f) => (
            <div
              key={f.name}
              className="bg-white rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: f.color + "22" }}
              >
                {f.emoji}
              </div>
              <p className="text-sm font-medium text-stone-700 text-center">{f.name}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-8">
          + muito mais sabores te esperando na loja 🍨
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-violet-600">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-violet-200 bg-white/10 px-4 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl font-bold text-white">O que dizem por aí</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < t.stars} />
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {t.name[0]}
                </div>
                <p className="text-white font-medium text-sm">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-20 bg-[#fdf8f3]">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">
        {/* Info */}
        <div>
          <span className="inline-block text-sm font-medium text-violet-600 bg-violet-50 px-4 py-1.5 rounded-full mb-5 border border-violet-100">
            Fale conosco
          </span>
          <h2 className="font-display text-4xl font-bold text-stone-800 mb-4">
            Venha nos visitar!
          </h2>
          <p className="text-stone-500 leading-relaxed mb-8">
            Estamos abertos todos os dias pra te receber com o sorriso no rosto e o açaí na mão.
          </p>

          <div className="space-y-5">
            {[
              { icon: "📍", title: "Endereço", info: "Rua das Flores, 142 – Centro" },
              { icon: "🕐", title: "Horário", info: "Seg–Sex: 11h–22h | Sáb–Dom: 10h–23h" },
              { icon: "📱", title: "WhatsApp", info: "(11) 99999-9999" },
              { icon: "📸", title: "Instagram", info: "@gelatoeacai" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-stone-700 text-sm">{item.title}</p>
                  <p className="text-stone-400 text-sm">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA card */}
        <div className="bg-[#f5ede0] rounded-3xl p-8 shadow-sm border border-stone-200">
          <h3 className="font-display text-2xl font-bold text-stone-800 mb-2">
            Manda uma mensagem 💬
          </h3>
          <p className="text-stone-400 text-sm mb-6">
            Quer fazer um pedido especial ou tirar uma dúvida? A gente responde rapidinho!
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5">Seu nome</label>
              <input
                type="text"
                placeholder="Como podemos te chamar?"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 outline-none focus:border-violet-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5">WhatsApp ou e-mail</label>
              <input
                type="text"
                placeholder="Para entrar em contato"
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 outline-none focus:border-violet-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5">Mensagem</label>
              <textarea
                rows={4}
                placeholder="Escreva aqui..."
                className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 placeholder-stone-300 outline-none focus:border-violet-400 transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-violet-600 text-white font-medium py-3 rounded-xl hover:bg-violet-700 transition-colors text-sm">
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍨</span>
          <span className="font-display text-white font-bold text-lg">Gelato & Açaí</span>
        </div>
        <p className="text-stone-500 text-sm text-center">
          © 2025 Gelato & Açaí. Feito com amor e muito açaí. 💜
        </p>
        <div className="flex gap-4">
          {["Instagram", "WhatsApp", "iFood"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-stone-500 hover:text-white text-sm transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── APP ───────────────────────────────────────────────────────────────────── */

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Flavors />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
