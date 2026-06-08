"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Puzzle,
  Sparkles,
  Sprout,
} from "lucide-react";
import { useState } from "react";

const whatsappUrl =
  "https://wa.me/5517996184004?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Cl%C3%ADnica%20Abirachid.";

const specialties = [
  {
    title: "Integração Sensorial",
    icon: Puzzle,
    detail:
      "Estratégias para apoiar a criança na organização das sensações, favorecendo participação, brincadeira, rotina e aprendizagem."
  },
  {
    title: "Terapia Ocupacional",
    icon: Brain,
    detail:
      "Acompanhamento voltado à autonomia, coordenação, habilidades funcionais e desenvolvimento nas atividades do dia a dia."
  },
  {
    title: "Desenvolvimento Infantil",
    icon: Sprout,
    detail:
      "Olhar amplo para marcos, potencialidades e necessidades individuais, sempre respeitando o tempo de cada criança."
  },
  {
    title: "Orientação Familiar",
    icon: HeartHandshake,
    detail:
      "Conversas próximas com pais e responsáveis para alinhar objetivos, rotina, adaptações e continuidade do cuidado em casa."
  }
];

const steps = [
  ["01", "Avaliação Inicial", "Escuta da família, observação da criança e compreensão das principais necessidades."],
  ["02", "Plano Terapêutico", "Definição de objetivos claros, possíveis caminhos e frequência de acompanhamento."],
  ["03", "Acompanhamento Contínuo", "Sessões conduzidas com vínculo, intenção terapêutica e comunicação próxima."],
  ["04", "Evolução e Reavaliação", "Ajustes periódicos para acompanhar progresso, novas demandas e conquistas."]
];

const testimonials = [
  {
    quote:
      "Sentimos acolhimento desde o primeiro encontro. Hoje conseguimos enxergar pequenas evoluções com muito mais segurança.",
    name: "M. L.",
    age: "mãe do Theo, 5 anos"
  },
  {
    quote:
      "A clínica olha para a criança e para a família. Isso fez toda diferença na nossa rotina.",
    name: "R. A.",
    age: "pai da Clara, 4 anos"
  },
  {
    quote:
      "O ambiente é leve, bonito e preparado. Minha filha entra tranquila e sai orgulhosa das conquistas.",
    name: "F. S.",
    age: "mãe do Miguel, 6 anos"
  }
];

const gallery = [
  {
    title: "Recepção",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Espaços terapêuticos",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Detalhes do ambiente",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Bastidores",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [openSpecialty, setOpenSpecialty] = useState(0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Clínica Abirachid",
            description:
              "Clínica especializada em desenvolvimento infantil, terapia ocupacional, integração sensorial e orientação familiar.",
            areaServed: "Brasil",
            medicalSpecialty: "Desenvolvimento infantil",
            sameAs: ["https://www.instagram.com/clinicaabirachid/"]
          })
        }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-porcelain/82 backdrop-blur-2xl">
        <div className="section-shell flex h-16 items-center justify-between gap-4 sm:h-20 sm:gap-6">
          <a href="#home" className="flex items-center gap-3" aria-label="Clínica Abirachid">
            <Image
              src="/logo-clinica-abirachid.svg"
              alt="Clínica Abirachid"
              width={151}
              height={44}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/70 lg:flex">
            <a className="transition hover:text-moss" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-moss" href="#especialidades">
              Especialidades
            </a>
            <a className="transition hover:text-moss" href="#processo">
              Como funciona
            </a>
            <a className="transition hover:text-moss" href="#contato">
              Contato
            </a>
          </nav>

          <a
            href={whatsappUrl}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-xs font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-moss sm:min-h-11 sm:px-5 sm:text-sm"
          >
            <MessageCircle size={17} />
            Agendar avaliação
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-40">
          <div className="section-shell grid items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_0.88fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, ease: "easeOut" }}
              variants={fadeUp}
            >
              <span className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-sage/25 bg-white/65 px-3 py-2 text-xs font-bold text-moss shadow-sm sm:mb-5 sm:px-4 sm:text-sm">
                <Sparkles size={16} />
                Desenvolvimento infantil humanizado
              </span>
              <h1 className="max-w-3xl font-serif text-[2.7rem] font-semibold leading-[0.98] tracking-normal text-ink min-[390px]:text-5xl sm:text-6xl lg:text-7xl">
                Desenvolvimento com cuidado, acolhimento e propósito
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-ink/68 sm:mt-6 sm:text-lg sm:leading-8">
                Atendimento especializado com foco no desenvolvimento infantil e acompanhamento
                individualizado.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a
                  href={whatsappUrl}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-moss px-6 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
                >
                  Agendar Avaliação
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#sobre"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-sage/35 bg-white/60 px-6 font-bold text-ink transition hover:-translate-y-0.5 hover:border-moss"
                >
                  Conhecer a Clínica
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="soft-shape absolute -left-5 top-8 h-28 w-28 bg-mist/80 sm:-left-8 sm:h-40 sm:w-40" />
              <div className="relative overflow-hidden rounded-[1.5rem] bg-linen shadow-soft sm:rounded-[2rem]">
                <Image
                  priority
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1100&q=85"
                  alt="Criança em ambiente terapêutico acolhedor"
                  width={900}
                  height={1040}
                  className="h-[390px] w-full object-cover sm:h-[560px]"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/86 p-4 shadow-lift backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-skysoft sm:text-sm">
                    Cuidado próximo
                  </p>
                  <p className="mt-1 text-base font-semibold leading-6 text-ink sm:text-lg">
                    Um espaço preparado para a criança se sentir segura.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="py-14 sm:py-16 lg:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-[1.5rem] shadow-soft sm:rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1000&q=82"
                alt="Profissional acolhendo uma criança em atividade"
                width={920}
                height={760}
                className="h-[300px] w-full object-cover sm:h-[420px]"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeUp}
            >
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-moss">Sobre</span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                Cada criança possui seu próprio tempo e potencial
              </h2>
              <p className="mt-5 text-base leading-7 text-ink/68 sm:text-lg sm:leading-8">
                A Clínica Abirachid une atendimento humanizado, ciência e presença para apoiar o
                desenvolvimento, a autonomia e o acompanhamento próximo da família.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Atendimento individualizado", "Ambiente acolhedor", "Equipe especializada", "Métodos baseados em evidências"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 shadow-sm">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-moss">
                        <Check size={16} />
                      </span>
                      <span className="font-semibold text-ink/78">{item}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="especialidades" className="bg-white/45 py-14 sm:py-16 lg:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
                Especialidades
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                Cuidado técnico com leveza e intenção.
              </h2>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 lg:grid-cols-4">
              {specialties.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openSpecialty === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setOpenSpecialty(isOpen ? -1 : index)}
                    className="rounded-2xl border border-sage/20 bg-porcelain/85 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lift sm:rounded-3xl sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-moss">
                        <Icon size={23} strokeWidth={1.8} />
                      </span>
                      <ChevronDown
                        size={19}
                        className={`mt-2 text-moss transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink sm:mt-7 sm:text-xl">{item.title}</h3>
                    <div className="accordion-panel mt-3 grid" data-open={isOpen}>
                      <div className="overflow-hidden">
                        <p className="text-sm leading-6 text-ink/65">{item.detail}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="processo" className="py-14 sm:py-16 lg:py-24">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
                  Como funciona
                </span>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                  Um percurso claro, cuidadoso e acompanhado.
                </h2>
              </div>
              <p className="max-w-md text-ink/62">
                A família participa do processo desde o início, com objetivos compreensíveis e
                acompanhamento contínuo.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
              {steps.map(([number, title, text]) => (
                <article
                  key={number}
                  className="relative rounded-2xl border border-sage/20 bg-white/62 p-5 shadow-sm sm:rounded-3xl sm:p-6"
                >
                  <span className="font-serif text-4xl font-semibold text-sage/70 sm:text-5xl">{number}</span>
                  <h3 className="mt-5 text-lg font-bold text-ink sm:mt-8 sm:text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-moss py-10 text-white sm:py-14">
          <div className="section-shell grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {[
              "Atendimento Humanizado",
              "Ambiente preparado para crianças",
              "Comunicação próxima com famílias",
              "Estratégias personalizadas"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <Check size={18} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-24">
          <div className="section-shell">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
                Depoimentos
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                Famílias que se sentiram vistas.
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-2xl bg-white/70 p-5 shadow-lift sm:rounded-3xl sm:p-7">
                  <span className="font-serif text-6xl leading-none text-sage/55 sm:text-7xl">“</span>
                  <p className="-mt-3 text-sm leading-6 text-ink/72 sm:-mt-4 sm:text-base sm:leading-7">{item.quote}</p>
                  <div className="mt-7 border-t border-sage/20 pt-5">
                    <strong className="block text-ink">{item.name}</strong>
                    <span className="text-sm text-ink/55">{item.age}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/45 py-14 sm:py-16 lg:py-24">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-moss">
                  Galeria
                </span>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                  Espaços pensados para acolher.
                </h2>
              </div>
              <p className="max-w-md text-ink/62">
                Luz natural, materiais suaves e ambientes preparados para brincar, evoluir e
                construir vínculo.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((item) => (
                <figure key={item.title} className="group relative overflow-hidden rounded-3xl shadow-lift">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={720}
                    height={860}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                  />
                  <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-porcelain/82 p-4 font-bold text-ink shadow-sm backdrop-blur-xl">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-14 sm:py-16 lg:py-24">
          <div className="section-shell overflow-hidden rounded-[1.5rem] bg-ink shadow-soft sm:rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-6 text-white sm:p-12 lg:p-16">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-mist">
                  Próximo passo
                </span>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
                  Vamos construir esse desenvolvimento juntos?
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-white/70">
                  Converse com a equipe para entender o melhor caminho de avaliação e
                  acompanhamento para sua criança.
                </p>
                <a
                  href={whatsappUrl}
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-mist px-6 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  <MessageCircle size={18} />
                  Agendar pelo WhatsApp
                </a>

                <div className="mt-10 grid gap-4 text-sm text-white/72 sm:grid-cols-2">
                  <p className="flex gap-3">
                    <MapPin className="mt-0.5 shrink-0 text-mist" size={18} />
                    Endereço da Clínica Abirachid
                  </p>
                  <p className="flex gap-3">
                    <Clock className="mt-0.5 shrink-0 text-mist" size={18} />
                    Segunda a sexta, 8h às 18h
                  </p>
                  <a className="flex gap-3 transition hover:text-white" href="https://www.instagram.com/clinicaabirachid/">
                    <Instagram className="mt-0.5 shrink-0 text-mist" size={18} />
                    @clinicaabirachid
                  </a>
                  <p className="flex gap-3">
                    <CalendarCheck className="mt-0.5 shrink-0 text-mist" size={18} />
                    Avaliações com horário marcado
                  </p>
                </div>
              </div>
              <iframe
                title="Mapa da Clínica Abirachid"
                src="https://www.google.com/maps?q=Cl%C3%ADnica%20Abirachid&output=embed"
                className="min-h-[320px] w-full border-0 bg-linen sm:min-h-[420px] lg:min-h-full"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-sage/20 bg-porcelain py-8 pb-24 sm:pb-8">
        <div className="section-shell flex flex-col justify-between gap-5 text-sm text-ink/62 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-clinica-abirachid.svg"
              alt="Clínica Abirachid"
              width={126}
              height={37}
              className="h-9 w-auto sm:h-10"
            />
            <div>
              <strong className="block text-ink">Clínica Abirachid</strong>
              <span>Desenvolvimento infantil com acolhimento.</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/clinicaabirachid/" className="transition hover:text-moss">
              Instagram
            </a>
            <a href={whatsappUrl} className="transition hover:text-moss">
              WhatsApp
            </a>
            <a href="#contato" className="transition hover:text-moss">
              Contato
            </a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        className="fixed bottom-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#5d7c63] text-white shadow-soft transition hover:-translate-y-1 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
        aria-label="Agendar pelo WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
