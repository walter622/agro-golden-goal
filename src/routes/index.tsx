import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Trophy, Percent, CreditCard, Wrench, CheckCircle2, MapPin,
  Truck, Sprout, Leaf, Cog, Quote, Phone, Calendar, ArrowRight,
} from "lucide-react";
import logoCampanha from "@/assets/logo-gol-de-placa.png";
import logoMassey from "@/assets/massey-a9-preto.png";
import logoMasseyBranco from "@/assets/massey-a9-branco.png";
import heroStadium from "@/assets/hero-stadium.jpg";
import aboutImg from "@/assets/about-a9.jpg";
import imgTractor from "@/assets/machine-tractor.jpg";
import imgHarvester from "@/assets/machine-harvester.jpg";
import imgPlanter from "@/assets/machine-planter.jpg";
import imgSprayer from "@/assets/machine-sprayer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A9 Massey Ferguson | Até 15% OFF e 15x sem juros" },
      { name: "description", content: "A9 Massey Ferguson: até 15% OFF e 15x sem juros. Tratores, colheitadeiras, plantadeiras e pulverizadores. 8 unidades no interior de SP." },
      { property: "og:title", content: "A9 Massey Ferguson — Gol de Placa" },
      { property: "og:description", content: "Até 15% OFF e 15x sem juros. A maior rede Massey Ferguson do interior de SP." },
      { property: "og:image", content: heroStadium },
      { property: "twitter:image", content: heroStadium },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "551155551346";
const WA_MSG = encodeURIComponent("Olá! Tenho interesse na campanha Gol de Placa da A9 Massey Ferguson.");
const WA_URL = `https://wa.me/${WHATSAPP}?text=${WA_MSG}`;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function CTAButton({ children, large = false, variant = "red" }: { children: React.ReactNode; large?: boolean; variant?: "red" | "gold" }) {
  const base = variant === "gold"
    ? "bg-gold text-campaign-green-dark shadow-gold hover:shadow-[0_20px_50px_-10px_oklch(0.82_0.17_88/0.7)]"
    : "bg-red-cta text-white shadow-red hover:shadow-[0_20px_50px_-10px_oklch(0.51_0.21_27/0.8)]";
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-3 font-display font-bold uppercase tracking-wider rounded-md hover:scale-[1.04] active:scale-[0.99] transition-all overflow-hidden ${base} ${
        large ? "px-10 py-6 text-lg md:text-2xl" : "px-7 py-4 text-base"
      }`}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/75 border-b border-campaign-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoMasseyBranco} alt="Massey Ferguson A9" className="h-8 md:h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-white/85 uppercase tracking-wide">
          <a href="#oferta" className="hover:text-campaign-gold transition">Oferta</a>
          <a href="#sobre" className="hover:text-campaign-gold transition">Sobre</a>
          <a href="#maquinas" className="hover:text-campaign-gold transition">Máquinas</a>
          <a href="#unidades" className="hover:text-campaign-gold transition">Unidades</a>
          <a href="#depoimentos" className="hover:text-campaign-gold transition">Depoimentos</a>
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-mf-red hover:bg-mf-red-dark text-white px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition shadow-red"
        >
          <Phone className="w-4 h-4" /> Falar agora
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] md:min-h-[760px] flex items-center overflow-hidden">
      <img
        src={heroStadium}
        alt="Estádio iluminado com máquinas Massey Ferguson"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Stronger top + bottom gradient, lighter middle so the photo breathes around the content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/95" />
      {/* Center vignette to focus the eye */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, oklch(0 0 0 / 0.55) 100%)" }} />
      {/* Subtle gold glow behind the headline */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle, oklch(0.82 0.17 88 / 0.5), transparent 60%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col items-center text-center text-white">
        <motion.div
          {...fadeUp}
          className="inline-flex items-center gap-2 bg-mf-red/90 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] shadow-red"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Campanha por tempo limitado
        </motion.div>

        <motion.img
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          src={logoCampanha}
          alt="Gol de Placa"
          className="mt-5 w-[180px] md:w-[280px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
        />


        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 font-display font-bold uppercase text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-5xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          Condições de Agrishow na A9 Massey Ferguson com <span className="text-campaign-gold">Até 15% OFF</span> e <span className="text-campaign-gold">15x SEM JUROS</span>
        </motion.h1>

        <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.4 }} className="mt-6 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed">
          Garanta sua Massey Ferguson com especialista do interior de SP. Produtividade máxima, tecnologia de ponta e as condições que você só encontra na A9.
        </motion.p>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.5 }} className="mt-8">
          <CTAButton large>Fale com um Especialista A9 Agora</CTAButton>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.6 }} className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {[
            { label: "8 unidades no interior de SP" },
            { label: "Entrega técnica" },
            { label: "Suporte total A9" },
          ].map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-campaign-gold/40 bg-black/55 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-semibold tracking-wide text-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.6)]"
            >
              <CheckCircle2 className="w-4 h-4 text-campaign-gold" strokeWidth={2.5} />
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OfferBlock() {
  const items = [
    { icon: Percent, title: "Até 15% OFF", text: "Descontos reais em máquinas selecionadas para fechamento imediato." },
    { icon: CreditCard, title: "Até 15x Sem Juros", text: "Condições exclusivas de financiamento direto na concessionária." },
    { icon: Wrench, title: "Entrega Técnica Especializada", text: "Suporte total A9 e treinamento completo para extrair 100% do equipamento." },
  ];
  return (
    <section id="oferta" className="relative bg-stadium text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.82 0.17 88 / 0.4), transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.42 0.13 145 / 0.6), transparent 50%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h2 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl max-w-3xl mx-auto">
          A oportunidade do ano para <span className="text-campaign-gold">renovar sua frota</span>
        </motion.h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative bg-gradient-to-br from-black/60 to-campaign-green-dark/40 backdrop-blur-xl border border-campaign-gold/30 rounded-2xl p-8 md:p-10 text-left hover:border-campaign-gold hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] transition-all duration-300 overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-campaign-gold/20 blur-3xl group-hover:bg-campaign-gold/40 transition-colors" />
              {/* Number indicator */}
              <div className="absolute top-5 right-6 font-display font-bold text-5xl text-campaign-gold/15 group-hover:text-campaign-gold/30 transition-colors">0{i + 1}</div>

              <div className="relative w-16 h-16 rounded-xl bg-gold flex items-center justify-center shadow-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <it.icon className="w-8 h-8 text-campaign-green-dark" strokeWidth={2.5} />
              </div>
              <h3 className="relative font-display font-bold text-2xl md:text-3xl uppercase leading-tight">{it.title}</h3>
              <p className="relative mt-3 text-white/80 leading-relaxed">{it.text}</p>
              <div className="relative mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-campaign-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4" /> Garantido na campanha
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="mt-14">
          <CTAButton large>Fale com um Especialista A9 Agora</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const reasons = [
    { icon: Truck, title: "Portfólio Completo", text: "Tratores, colheitadeiras, plantadeiras e pulverizadores com tecnologia global AGCO." },
    { icon: Cog, title: "Agricultura de Precisão", text: "Máquinas equipadas com o que há de mais moderno em gestão de dados e economia de insumos." },
    { icon: Wrench, title: "Entrega Técnica", text: "Você não recebe apenas uma máquina — recebe treinamento completo para extrair 100% dela." },
  ];
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl text-foreground leading-tight">
              A9 Máquinas: <span className="text-mf-red">tradição</span> e inovação no campo
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A A9 é a sua concessionária Massey Ferguson de confiança no interior de São Paulo. Mais do que vender máquinas, entregamos soluções que aumentam a eficiência do produtor rural — do pequeno ao grande.
            </p>
            <div className="mt-8">
              <CTAButton>Fale com um Especialista A9 Agora</CTAButton>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 bg-mf-red/10 rounded-2xl -rotate-2" />
            <img src={aboutImg} alt="Produtor rural com técnico A9 Massey Ferguson" loading="lazy" className="relative rounded-2xl shadow-stadium w-full aspect-[4/3] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-mf-red text-white p-5 rounded-xl shadow-red max-w-[180px]">
              <div className="font-display text-3xl font-bold">+30 anos</div>
              <div className="text-xs uppercase tracking-wider mt-1 opacity-90">no agro paulista</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-28">
          <motion.h3 {...fadeUp} className="text-center font-display font-bold uppercase text-2xl md:text-4xl">
            Por que investir com a <span className="text-mf-red">A9</span>?
          </motion.h3>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group p-8 rounded-xl border-2 border-border hover:border-mf-red bg-white hover:shadow-red transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-mf-red/10 group-hover:bg-mf-red flex items-center justify-center transition-colors mb-5">
                  <r.icon className="w-7 h-7 text-mf-red group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-display font-bold text-xl uppercase">{r.title}</h4>
                <p className="mt-3 text-muted-foreground leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Machines() {
  const list = [
    { img: imgTractor, name: "Tratores", model: "Massey Ferguson", text: "O máximo em força e baixo consumo." },
    { img: imgHarvester, name: "Colheitadeiras", model: "Axiais e Híbridas", text: "Limpeza de grãos superior e mínima perda." },
    { img: imgPlanter, name: "Plantadeiras", model: "Massey Ferguson", text: "Agilidade no plantio com a melhor distribuição do mercado." },
    { img: imgSprayer, name: "Pulverizadores", model: "Massey Ferguson", text: "Precisão milimétrica na aplicação." },
  ];
  return (
    <section id="maquinas" className="bg-neutral-950 text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at top, oklch(0.82 0.17 88 / 0.25), transparent 60%)" }} />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl">
            Tecnologia Massey Ferguson para <span className="text-campaign-gold">cada desafio</span>
          </h2>
        </motion.div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((m, i) => (
            <motion.article
              key={m.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900 to-black border border-white/10 hover:border-campaign-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(199,17,33,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 right-3 bg-mf-red text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-red">Massey</div>
                <div className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-campaign-gold">{m.model}</div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-campaign-gold/40 to-transparent" />
                <h3 className="font-display font-bold text-xl uppercase leading-tight group-hover:text-campaign-gold transition-colors">{m.name}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{m.text}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-mf-red opacity-0 group-hover:opacity-100 transition-opacity">
                  Saber mais <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Units() {
  const stores = [
    { city: "Avaré", address: ["Praça Cadiz, 01 — Jardim Europa II", "Avaré / SP"] },
    { city: "Piedade", address: ["Rod. Bunjiro Nakao SP 250, 15 — Centro", "Piedade / SP"] },
    { city: "Itapeva", address: ["Arthur Oswaldo Franson, 350", "Recanto Pilão D'Agua, Itapeva / SP"] },
    { city: "Piracicaba", address: ["R. Antonio Morato do Amaral, 99", "Agua Branca, Piracicaba / SP"] },
    { city: "Jaú", address: ["Av Deputado Zien Nassif, 1134", "Zona Industrial, Jaú / SP"] },
    { city: "Bragança Paulista", address: ["Eduardo Rizk, n 1, Cidade Planejada I", "Bragança Paulista / SP"] },
    { city: "Itapetininga", address: ["Rua Maria Plens, 600", "Jardim Bela Vista, Itapetininga / SP"] },
    { city: "Campos de Holambra", address: ["Avenida das Posses, nº 330", "Campos de Holambra, Paranapanema / SP"] },
  ];
  return (
    <section id="unidades" className="bg-neutral-950 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-mf-red font-bold uppercase tracking-[0.3em] text-xs">
            <MapPin className="w-4 h-4" /> Nossas Lojas
          </div>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl">
            Próximo de você, com <span className="text-mf-red">8 unidades</span>
          </h2>
          <p className="mt-5 text-white/70 text-lg">Suporte comercial e técnico antes, durante e depois da compra.</p>
        </motion.div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
          {stores.map((s, i) => (
            <motion.div
              key={s.city}
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.04 * i }}
              className="group"
            >
              <h3 className="font-display font-bold text-xl md:text-2xl text-mf-red leading-tight">
                A9 — {s.city}
              </h3>
              <div className="mt-2 text-sm md:text-base text-white/80 leading-relaxed">
                {s.address.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Paulo Leme", role: "Produtor em Itapetininga", text: "Troquei minha frota com a A9 e a produtividade subiu 20% logo na primeira safra. Atendimento diferenciado." },
    { name: "Marcela Gama", role: "Técnica Agrícola em Avaré", text: "As condições de financiamento da A9 e o suporte da equipe comercial são os melhores da região." },
  ];
  return (
    <section id="depoimentos" className="relative py-20 md:py-28 bg-stadium text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, oklch(0.82 0.17 88 / 0.5), transparent 50%)" }} />
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center">
          <div className="inline-flex items-center gap-2 text-campaign-gold font-bold uppercase tracking-[0.3em] text-xs">
            <Leaf className="w-4 h-4" /> Resultados Reais
          </div>
          <h2 className="mt-4 font-display font-bold uppercase text-3xl md:text-5xl">
            Quem planta com a A9, <span className="text-campaign-gold">colhe resultados</span>
          </h2>
        </motion.div>
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-black/40 backdrop-blur border border-campaign-gold/30 rounded-2xl p-8 md:p-10 relative"
            >
              <Quote className="w-10 h-10 text-campaign-gold opacity-70 mb-4" />
              <blockquote className="text-lg md:text-xl leading-relaxed font-medium">"{t.text}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10">
                <div className="font-display font-bold text-lg uppercase text-campaign-gold">{t.name}</div>
                <div className="text-sm text-white/70">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-14 text-center">
          <CTAButton large>Fale com um Especialista A9 Agora</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const bullets = [
    "Financiamento facilitado",
    "Tecnologia de agricultura de precisão",
    "A sua rede Massey Ferguson do interior de SP",
  ];
  return (
    <section className="relative py-20 md:py-28 bg-neutral-950 text-white overflow-hidden">
      <img src={heroStadium} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.img {...fadeUp} src={logoCampanha} alt="Gol de Placa" className="mx-auto w-[200px] md:w-[300px] mb-8" />
        <motion.h2 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="font-display font-bold uppercase text-3xl md:text-5xl lg:text-6xl leading-tight">
          Potência, tecnologia e <span className="text-campaign-gold">gente que entende do agro</span>
        </motion.h2>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 flex flex-col items-center gap-3">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-3 text-base md:text-lg">
              <CheckCircle2 className="w-5 h-5 text-campaign-gold shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12">
          <CTAButton large>Fale com um Especialista A9 Agora</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <img src={logoMasseyBranco} alt="Massey Ferguson A9" className="hidden md:block h-10 w-auto" />
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-campaign-gold" /> Atendimento de Segunda a Sábado
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs uppercase tracking-widest">
          <div>A9 Máquinas Agrícolas — Concessionária Massey Ferguson</div>
          <div className="text-campaign-gold">🚀 Powered by Omnia Inteligência Digital</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-mf-red text-white flex items-center justify-center shadow-red animate-pulse-ring hover:scale-110 transition"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </a>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <OfferBlock />
        <About />
        <Machines />
        {/* Conditions strip */}
        <section className="relative bg-gold py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 15% 50%, oklch(0.42 0.13 145 / 0.4), transparent 45%), radial-gradient(circle at 85% 50%, oklch(0.42 0.13 145 / 0.4), transparent 45%)" }} />
          <div className="relative max-w-6xl mx-auto px-4 md:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-campaign-green-dark text-campaign-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.3em] shadow-lg">
                <Trophy className="w-4 h-4" /> Condições Exclusivas
              </div>
              <h2 className="mt-5 font-display font-bold uppercase text-3xl md:text-5xl text-campaign-green-dark leading-tight">
                Saldão <span className="text-mf-red">Gol de Placa</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="group relative bg-campaign-green-dark text-white rounded-2xl p-8 md:p-10 shadow-stadium hover:-translate-y-1 transition-all border-4 border-campaign-gold overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-campaign-gold/20" />
                <div className="relative flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-gold flex items-center justify-center shadow-gold shrink-0">
                    <Sprout className="w-9 h-9 text-campaign-green-dark" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-campaign-gold mb-2">Financiamento</div>
                    <h3 className="font-display font-bold uppercase text-3xl md:text-4xl leading-tight">Taxas de Financiamento Reduzidas</h3>
                    <p className="mt-3 text-base md:text-lg text-white/85 leading-relaxed">Condições exclusivas do Saldão Gol de Placa, com as melhores taxas da região.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="group relative bg-mf-red text-white rounded-2xl p-8 md:p-10 shadow-red hover:-translate-y-1 transition-all border-4 border-campaign-gold overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-campaign-gold/25" />
                <div className="relative flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-gold flex items-center justify-center shadow-gold shrink-0">
                    <Percent className="w-9 h-9 text-campaign-green-dark" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-campaign-gold mb-2">Desconto Imediato</div>
                    <h3 className="font-display font-bold uppercase text-3xl md:text-4xl leading-tight">Até 15% OFF</h3>
                    <p className="mt-3 text-base md:text-lg text-white/90 leading-relaxed">Descontos reais em máquinas selecionadas para fechamento imediato.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 text-center">
              <CTAButton large>Quero essas condições</CTAButton>
            </motion.div>
          </div>
        </section>
        <Units />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
