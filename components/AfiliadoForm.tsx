"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const METODOS_PAGO = ["Transferencia bancaria", "PayPal", "Wise", "Por definir"] as const;
const TIERS = [
  { value: "15", label: "15% — Referencia estándar" },
  { value: "20", label: "20% — Cliente listo para firma (con Discovery)" },
] as const;

const schema = z.object({
  // Datos del afiliado
  nombreAfiliado: z.string().min(2, "Requerido"),
  emailAfiliado: z.string().email("Email inválido"),
  telefonoAfiliado: z.string().min(7, "Requerido"),
  ciudadAfiliado: z.string().min(2, "Requerido"),
  metodoPago: z.string().min(1, "Selecciona un método"),
  comoConociste: z.string().optional(),
  // Datos del cliente
  nombreCliente: z.string().min(2, "Requerido"),
  emailCliente: z.string().email("Email inválido"),
  telefonoCliente: z.string().min(7, "Requerido"),
  empresaCliente: z.string().min(2, "Requerido"),
  descripcionProyecto: z.string().min(20, "Describe el proyecto (mínimo 20 caracteres)"),
  presupuestoEstimado: z.string().optional(),
  tier: z.string().min(1, "Selecciona el tipo de comisión"),
  comentarios: z.string().optional(),
  aceptaTerminos: z.boolean().refine((v) => v === true, "Debes aceptar los términos"),
});

type FormData = z.infer<typeof schema>;

const inputCls =
  "w-full px-3 py-[10px] border border-line rounded bg-white text-ink text-[15px] outline-none focus:border-ink transition-colors placeholder:text-ink3";
const labelCls = "block text-[13px] font-medium text-ink mb-[6px]";
const errorCls = "text-[12px] text-red-600 mt-1";

export default function AfiliadoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        ...data,
        origen: "afiliados.byklai.com",
        timestamp: new Date().toISOString(),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch {
      setSubmitError("Hubo un error al enviar. Intenta de nuevo o escríbenos a hola@byklai.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="font-mono text-2xl text-ink mb-4">✓</div>
        <h3 className="font-serif text-[28px] text-ink mb-3">Referencia registrada</h3>
        <p className="text-[15px] text-ink2 leading-[1.7] max-w-[440px] mx-auto font-light">
          Recibimos tu registro. Contactaremos al cliente en las próximas 24–48 horas hábiles.
          Te notificamos cuando haya avances.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>

      {/* — Datos del afiliado — */}
      <div className="mb-2">
        <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink3 mb-6 pb-3 border-b border-line">
          Tus datos
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelCls}>Nombre completo *</label>
          <input {...register("nombreAfiliado")} className={inputCls} placeholder="Tu nombre" />
          {errors.nombreAfiliado && <p className={errorCls}>{errors.nombreAfiliado.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input {...register("emailAfiliado")} type="email" className={inputCls} placeholder="tu@email.com" />
          {errors.emailAfiliado && <p className={errorCls}>{errors.emailAfiliado.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelCls}>Teléfono *</label>
          <input {...register("telefonoAfiliado")} className={inputCls} placeholder="+52 999 000 0000" />
          {errors.telefonoAfiliado && <p className={errorCls}>{errors.telefonoAfiliado.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Ciudad / País *</label>
          <input {...register("ciudadAfiliado")} className={inputCls} placeholder="Mérida, México" />
          {errors.ciudadAfiliado && <p className={errorCls}>{errors.ciudadAfiliado.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelCls}>Método de pago preferido *</label>
          <select {...register("metodoPago")} className={inputCls + " cursor-pointer"}>
            <option value="">Selecciona</option>
            {METODOS_PAGO.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          {errors.metodoPago && <p className={errorCls}>{errors.metodoPago.message}</p>}
        </div>
        <div>
          <label className={labelCls}>
            ¿Cómo conociste byklai?{" "}
            <span className="text-ink3 font-normal">(opcional)</span>
          </label>
          <input {...register("comoConociste")} className={inputCls} placeholder="Redes, recomendación..." />
        </div>
      </div>

      {/* — Datos del cliente — */}
      <div className="mt-10 mb-2">
        <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink3 mb-6 pb-3 border-b border-line">
          Datos del cliente que refieres
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelCls}>Nombre del cliente *</label>
          <input {...register("nombreCliente")} className={inputCls} placeholder="Nombre completo" />
          {errors.nombreCliente && <p className={errorCls}>{errors.nombreCliente.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Email del cliente *</label>
          <input {...register("emailCliente")} type="email" className={inputCls} placeholder="cliente@empresa.com" />
          {errors.emailCliente && <p className={errorCls}>{errors.emailCliente.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelCls}>Teléfono del cliente *</label>
          <input {...register("telefonoCliente")} className={inputCls} placeholder="+52 999 000 0000" />
          {errors.telefonoCliente && <p className={errorCls}>{errors.telefonoCliente.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Empresa del cliente *</label>
          <input {...register("empresaCliente")} className={inputCls} placeholder="Nombre de la empresa" />
          {errors.empresaCliente && <p className={errorCls}>{errors.empresaCliente.message}</p>}
        </div>
      </div>

      <div className="mb-6">
        <label className={labelCls}>Descripción del proyecto *</label>
        <textarea
          {...register("descripcionProyecto")}
          rows={4}
          className={inputCls + " resize-y"}
          placeholder="¿Qué necesita el cliente? Landing, automatización, branding, sistema de captación..."
        />
        {errors.descripcionProyecto && <p className={errorCls}>{errors.descripcionProyecto.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className={labelCls}>
            Presupuesto estimado{" "}
            <span className="text-ink3 font-normal">(opcional)</span>
          </label>
          <input {...register("presupuestoEstimado")} className={inputCls} placeholder="$3,000 USD aprox." />
        </div>
        <div>
          <label className={labelCls}>Tipo de comisión *</label>
          <select {...register("tier")} className={inputCls + " cursor-pointer"}>
            <option value="">Selecciona</option>
            {TIERS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          {errors.tier && <p className={errorCls}>{errors.tier.message}</p>}
        </div>
      </div>

      <div className="mb-8">
        <label className={labelCls}>
          Comentarios adicionales{" "}
          <span className="text-ink3 font-normal">(opcional)</span>
        </label>
        <textarea
          {...register("comentarios")}
          rows={3}
          className={inputCls + " resize-y"}
          placeholder="Contexto extra, urgencia, preferencias del cliente..."
        />
      </div>

      {/* Aceptación */}
      <div className="mb-8 p-4 bg-surface2 border border-line rounded">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("aceptaTerminos")}
            type="checkbox"
            className="mt-1 accent-ink cursor-pointer"
          />
          <span className="text-[14px] text-ink2 leading-[1.6]">
            He leído y acepto el{" "}
            <span className="text-ink font-medium underline underline-offset-2">
              Contrato de Programa de Afiliados
            </span>{" "}
            de byklai, incluyendo la estructura de comisiones, cláusulas de cancelación y términos
            de confidencialidad.
          </span>
        </label>
        {errors.aceptaTerminos && (
          <p className={errorCls + " mt-2"}>{errors.aceptaTerminos.message}</p>
        )}
      </div>

      {submitError && (
        <div className="mb-4 px-3 py-3 bg-red-50 border border-red-200 rounded text-[13px] text-red-700">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-[14px] px-6 bg-ink text-white rounded text-[15px] font-medium tracking-[0.01em] hover:bg-ink2 disabled:bg-ink3 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Enviando..." : "Registrar referencia"}
      </button>

      <p className="text-[12px] text-ink3 mt-3 text-center">
        Revisamos cada referencia. Te confirmamos recepción en menos de 24 horas hábiles.
      </p>
    </form>
  );
}
