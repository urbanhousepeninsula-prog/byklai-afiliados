import Image from "next/image";
import AfiliadoForm from "@/components/AfiliadoForm";
import ContratoModal from "@/components/ContratoModal";

const tiers = [
  {
    porcentaje: "15%",
    titulo: "Comisión base",
    descripcion:
      "Por cada cliente que refieras y cierre un proyecto con byklai. Aplica cuando tú conectas al prospecto con nosotros.",
    ejemplo: "Proyecto $5,000 → Comisión $750",
  },
  {
    porcentaje: "20%",
    titulo: "Cliente listo",
    descripcion:
      "Cuando el cliente que refieres ya tiene presupuesto aprobado y solo necesita firma. Usas el formulario de Discovery para calificarlo.",
    ejemplo: "Proyecto $5,000 → Comisión $1,000",
    destacado: true,
  },
  {
    porcentaje: "25%",
    titulo: "Volumen mensual",
    descripcion:
      "Si cierras 3 o más clientes en modalidad 20% dentro de un mismo mes calendario. La diferencia se paga retroactivamente.",
    ejemplo: "3 proyectos $5k c/u → Comisión $3,750",
  },
];

const pasos = [
  {
    num: "01",
    titulo: "Te registras",
    texto: "Llena el formulario con tus datos y los del cliente que estás refiriendo. Queda registrado como tu referencia.",
  },
  {
    num: "02",
    titulo: "Nosotros cerramos",
    texto: "byklai contacta al cliente, presenta la propuesta y gestiona el contrato. Tú no intervenes en la venta.",
  },
  {
    num: "03",
    titulo: "Tú cobras",
    texto: "Al recibir el enganche del cliente, recibes el 50% de tu comisión. El 50% restante al finalizar y cobrar el proyecto.",
  },
];

const clausulas = [
  {
    titulo: "Activación",
    texto:
      "El derecho a comisión se activa cuando el cliente firma contrato Y realiza el primer pago (enganche). Reuniones o cotizaciones previas no generan comisión.",
  },
  {
    titulo: "Forma de pago",
    texto:
      "50% de tu comisión al recibir el enganche del cliente. El 50% restante al finalizar el proyecto y recibir el pago final.",
  },
  {
    titulo: "Registro oficial",
    texto:
      "Solo genera derecho a comisión la referencia enviada mediante este formulario. Referencias por otros medios (email, WhatsApp, etc.) no aplican.",
  },
  {
    titulo: "Atribución",
    texto:
      "Tu referencia es válida por 90 días naturales desde el envío del formulario. Si el cliente no cierra en ese plazo, la atribución expira.",
  },
  {
    titulo: "Cancelación",
    texto:
      "Si el proyecto se cancela antes del enganche, no hay comisión. Si se cancela después, se paga únicamente el 50% ya activado.",
  },
  {
    titulo: "Exclusividad del lead",
    texto:
      "Si el cliente ya está en contacto con byklai por otro canal, la referencia no aplica. La atribución es del primer registro que llega.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      {/* Nav */}
      <nav className="border-b border-line sticky top-0 bg-surface z-10">
        <div className="max-w-wrap mx-auto px-6 h-[60px] flex items-center justify-between">
          <a href="https://byklai.com">
            <Image
              src="/logo-byklai_TN.png"
              alt="byklai"
              width={88}
              height={28}
              style={{ height: 28, width: "auto" }}
              priority
            />
          </a>
          <a
            href="https://byklai.com"
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink3 hover:text-ink transition-colors"
          >
            byklai.com →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-wrap mx-auto px-6 pt-20 pb-16">
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink3 mb-5">
          Programa de afiliados · byklai
        </p>
        <h1 className="font-serif text-[clamp(2.4rem,5.5vw,3.8rem)] leading-[1.1] tracking-[-0.02em] text-ink mb-6 max-w-[620px]">
          Genera ingresos referiendo clientes a byklai.
        </h1>
        <p className="text-[17px] text-ink2 leading-[1.75] max-w-[560px] font-light">
          Si tienes clientes, contactos o proyectos que necesitan sistemas digitales, automatización
          o branding — refiérelos a byklai y gana entre el 15% y el 25% del valor del proyecto.
          Sin inversión, sin riesgo, sin compromisos fijos.
        </p>
        <a
          href="#registro"
          className="inline-block mt-8 px-6 py-3 bg-ink text-white text-[14px] font-medium rounded hover:bg-ink2 transition-colors"
        >
          Registrar referencia →
        </a>
      </section>

      {/* Comisiones */}
      <section className="bg-surface2 border-y border-line">
        <div className="max-w-wrap mx-auto px-6 py-16">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink3 mb-3">
            Estructura de comisiones
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.4rem)] text-ink mb-10">
            ¿Cuánto ganas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded p-6 border ${
                  tier.destacado
                    ? "bg-ink text-white border-ink"
                    : "bg-surface border-line"
                }`}
              >
                <div
                  className={`font-serif text-[3rem] leading-none mb-4 ${
                    tier.destacado ? "text-white" : "text-ink"
                  }`}
                >
                  {tier.porcentaje}
                </div>
                <h3
                  className={`font-serif text-[18px] mb-2 ${
                    tier.destacado ? "text-white" : "text-ink"
                  }`}
                >
                  {tier.titulo}
                </h3>
                <p
                  className={`text-[14px] leading-[1.65] font-light mb-4 ${
                    tier.destacado ? "text-white/80" : "text-ink2"
                  }`}
                >
                  {tier.descripcion}
                </p>
                <p
                  className={`font-mono text-[11px] tracking-[0.06em] ${
                    tier.destacado ? "text-white/60" : "text-ink3"
                  }`}
                >
                  {tier.ejemplo}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-ink3 mt-6">
            * Las comisiones se calculan sobre el ingreso neto recibido por byklai (excluye impuestos y comisiones de plataformas de pago).
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="max-w-wrap mx-auto px-6 py-16">
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink3 mb-3">
          Proceso
        </p>
        <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.4rem)] text-ink mb-10">
          Cómo funciona
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {pasos.map((paso, i) => (
            <div key={i}>
              <div className="font-mono text-[11px] tracking-[0.1em] text-ink3 mb-3">
                {paso.num}
              </div>
              <h3 className="font-serif text-[20px] text-ink mb-2">{paso.titulo}</h3>
              <p className="text-[14px] text-ink2 leading-[1.7] font-light">{paso.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cláusulas principales */}
      <section className="border-t border-line bg-surface2">
        <div className="max-w-wrap mx-auto px-6 py-16">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink3 mb-3">
            Términos generales
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.4rem)] text-ink mb-10">
            Cláusulas principales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clausulas.map((c, i) => (
              <div key={i} className="border-l-2 border-line pl-5">
                <h3 className="text-[14px] font-semibold text-ink mb-1">{c.titulo}</h3>
                <p className="text-[14px] text-ink2 leading-[1.65] font-light">{c.texto}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ContratoModal />
          </div>
        </div>
      </section>

      {/* Ancla de valor */}
      <section className="border-t border-line bg-ink text-surface">
        <div className="max-w-wrap mx-auto px-6 py-14">
          <p className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] leading-snug max-w-[600px]">
            Una landing de MX$8,000 te genera entre{" "}
            <span className="text-white/50">MX$1,200 y MX$2,000</span> de comisión
            por una sola referencia.
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-white/40 uppercase mt-5">
            Comisión 15–25% · Sin inversión · Sin riesgo
          </p>
        </div>
      </section>

      {/* Prueba social */}
      <section className="border-t border-line">
        <div className="max-w-wrap mx-auto px-6 py-12">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink3 mb-4">
            ¿No conoces Byklai?
          </p>
          <p className="text-[16px] text-ink2 leading-relaxed max-w-[540px] mb-5 font-light">
            Conoce el tipo de trabajo que refieres. Pekmex Is Life es un caso de estudio real
            — ecosistema editorial construido completamente por byklai.
          </p>
          <a
            href="https://pekmexlife.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] tracking-[0.06em] text-ink hover:text-ink3 transition-colors"
          >
            Ver proyecto → pekmexlife.com
          </a>
        </div>
      </section>

      {/* Formulario */}
      <section id="registro" className="border-t border-line">
        <div className="max-w-[720px] mx-auto px-6 py-16 pb-20">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink3 mb-3">
            Registro de referencia
          </p>
          <h2 className="font-serif text-[clamp(1.7rem,3.5vw,2.4rem)] text-ink mb-2">
            Registrar un cliente
          </h2>
          <p className="text-[15px] text-ink3 mb-10 leading-relaxed">
            Completa tus datos y los del cliente que estás refiriendo. El formulario es el registro
            oficial de tu referencia.
          </p>
          <AfiliadoForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-surface2">
        <div className="max-w-wrap mx-auto px-6 py-8 flex flex-wrap justify-between items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.08em] text-ink3">
            byklai.com — sistemas digitales · Mérida, México
          </span>
          <a
            href="https://byklai.com"
            className="font-mono text-[11px] tracking-[0.08em] text-ink3 hover:text-ink transition-colors"
          >
            Ver portafolio →
          </a>
        </div>
      </footer>
    </div>
  );
}
