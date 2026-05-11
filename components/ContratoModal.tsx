"use client";

import { useState } from "react";

const SECCIONES = [
  {
    titulo: "1. Definiciones generales",
    contenido: `Afiliado: Persona que se registra en el programa y actúa como intermediaria independiente para referir clientes a byklai a cambio de comisiones.

Lead (Prospecto): Persona referida por el Afiliado mediante el formulario oficial, que representa una oportunidad comercial.

Cliente Cerrado: Lead que ha firmado contrato con byklai Y ha realizado el primer pago. La comisión se activa únicamente en este momento.

Ingreso Neto: Monto recibido por byklai excluyendo impuestos, reembolsos, contracargos y comisiones de plataformas de pago.`,
  },
  {
    titulo: "2. Naturaleza de la relación",
    contenido: `El Afiliado actúa como colaborador independiente, no como empleado ni representante legal de byklai. No existe relación laboral, de dependencia ni subordinación.

El Afiliado no puede firmar contratos ni hacer compromisos legales en nombre de byklai. Puede colaborar simultáneamente con otros programas de afiliados — no se requiere exclusividad.`,
  },
  {
    titulo: "3. Activación del derecho a comisión",
    contenido: `La comisión se activa ÚNICAMENTE cuando se cumplen AMBAS condiciones:
1. El Cliente Cerrado firma un contrato de servicios con byklai, Y
2. El Cliente Cerrado realiza el primer pago (anticipo o enganche) recibido oficialmente por byklai.

No generan comisión: reuniones, llamadas, cotizaciones, negociaciones, firmas de NDA ni presentaciones previas al cierre.`,
  },
  {
    titulo: "4. Registro oficial de referencias",
    contenido: `Toda referencia es válida ÚNICAMENTE si fue enviada mediante el formulario oficial de afiliados de byklai. Referencias por otros medios no generan derecho a comisión.

El formulario funciona como evidencia primaria de atribución, fecha exacta y datos del prospecto. byklai enviará confirmación de recepción dentro de 24 horas hábiles.`,
  },
  {
    titulo: "5. Plazo de atribución",
    contenido: `El Afiliado conserva atribución sobre un Lead durante 90 días naturales desde el envío del formulario. Si el cliente no cierra dentro de ese plazo, la atribución expira automáticamente.

Si varios Afiliados refieren al mismo prospecto, la atribución corresponde al que envió el formulario primero.`,
  },
  {
    titulo: "6. Estructura de comisiones",
    contenido: `15% — Comisión base por cada Cliente Cerrado referido.

20% — Comisión mejorada si el cliente llega prácticamente cerrado: presupuesto aprobado, evaluación técnica completada, solo requiere firma y primer pago.

25% — Comisión acelerada si el Afiliado genera 3 o más Clientes Cerrados dentro de 30 días naturales consecutivos. La diferencia se paga retroactivamente.

Todas las comisiones se calculan sobre el Ingreso Neto efectivamente recibido por byklai.`,
  },
  {
    titulo: "7. Forma y tiempos de pago",
    contenido: `50% de la comisión se paga al recibir el enganche del cliente. El 50% restante al finalizar el proyecto y recibir el pago final.

Los pagos se realizan dentro de 30 días calendario posteriores a que byklai reciba cada pago del cliente.

Métodos aceptados: Transferencia bancaria internacional (SWIFT), PayPal, Wise, Stripe Connect, u otros previo acuerdo escrito.`,
  },
  {
    titulo: "8. Cancelaciones y pérdida de comisión",
    contenido: `La comisión puede cancelarse si: el proyecto se cancela antes de recibir servicios, el Afiliado proporciona información falsa, el Afiliado promete servicios no autorizados, o hay violación de los términos del contrato.

Si se cancela antes del enganche: no hay comisión. Si se cancela después del enganche: se paga únicamente el 50% ya activado. byklai notificará por escrito con 10 días hábiles para responder.`,
  },
  {
    titulo: "9. Restricciones y prohibiciones",
    contenido: `El Afiliado NO puede: modificar precios o condiciones de servicios, firmar contratos en nombre de byklai, usar logos o marcas de byklai sin autorización, hacer afirmaciones falsas, enviar spam ni violar leyes de protección de datos (GDPR, CCPA, LGPD).

El incumplimiento puede resultar en cancelación de comisiones, terminación del programa y acciones legales.`,
  },
  {
    titulo: "10. Confidencialidad",
    contenido: `El Afiliado se compromete a mantener confidencial toda información de byklai: datos de clientes, cotizaciones, estrategias, precios y estructura de comisiones.

La obligación de confidencialidad se mantiene durante la vigencia del contrato y por 3 años después de la terminación. Para secretos comerciales, la confidencialidad es indefinida.`,
  },
  {
    titulo: "11–16. Propiedad intelectual, limitaciones, terminación y jurisdicción",
    contenido: `Propiedad intelectual: Todo material de byklai (logos, sistemas, código, contenido) es propiedad exclusiva de la empresa. El Afiliado recibe licencia limitada, no exclusiva y revocable para promover el programa.

Terminación: Cualquiera de las partes puede terminar el acuerdo en cualquier momento mediante notificación escrita. Las comisiones válidamente generadas antes de la terminación siguen siendo pagaderas.

Jurisdicción: Este contrato se rige por las leyes de México. En caso de conflicto, se prioriza resolución amistosa (15 días), luego mediación, luego arbitraje digital vinculante.

Modificaciones: byklai puede modificar este contrato con 30 días de anticipación por email. Continuar participando implica aceptación de los cambios.

Contacto: hola@byklai.com — byklai.com`,
  },
];

export default function ContratoModal() {
  const [open, setOpen] = useState(false);
  const [seccionAbierta, setSeccionAbierta] = useState<number | null>(null);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[14px] text-ink underline underline-offset-2 hover:text-ink2 transition-colors"
      >
        Leer contrato completo →
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/60 p-4 pt-16 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="bg-surface w-full max-w-[680px] rounded-lg border border-line mb-16">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-line">
              <div>
                <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink3 mb-1">
                  Documento legal
                </p>
                <h3 className="font-serif text-[20px] text-ink">
                  Contrato de Programa de Afiliados
                </h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-ink3 hover:text-ink text-[20px] leading-none transition-colors ml-4"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            {/* Intro */}
            <div className="px-6 py-5 bg-surface2 border-b border-line">
              <p className="text-[13px] text-ink2 leading-[1.65]">
                Este contrato regula la colaboración entre byklai y el Afiliado para la referencia
                de clientes a cambio de comisiones. Versión 1.0 — Mayo 2026.
                Para preguntas: <span className="text-ink font-medium">hola@byklai.com</span>
              </p>
            </div>

            {/* Acordeón */}
            <div className="divide-y divide-line">
              {SECCIONES.map((sec, i) => (
                <div key={i}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface2 transition-colors"
                    onClick={() => setSeccionAbierta(seccionAbierta === i ? null : i)}
                  >
                    <span className="text-[14px] font-medium text-ink">{sec.titulo}</span>
                    <span className="text-ink3 text-[18px] leading-none ml-4 flex-shrink-0">
                      {seccionAbierta === i ? "−" : "+"}
                    </span>
                  </button>
                  {seccionAbierta === i && (
                    <div className="px-6 pb-5">
                      <p className="text-[13px] text-ink2 leading-[1.75] whitespace-pre-line font-light">
                        {sec.contenido}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-line bg-surface2">
              <p className="text-[12px] text-ink3 text-center">
                Al registrar una referencia en el formulario aceptas todos los términos de este contrato.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
