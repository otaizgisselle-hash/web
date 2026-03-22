"use client";
import { useState } from "react";

export default function ConciergeForm() {
  const [data, setData] = useState({ tipo: "Compra", presupuesto: "", zona: "" });

  const sendWa = () => {
    const msg = `Hola Gisselle, me interesa iniciar una búsqueda personalizada:
- Intención: ${data.tipo}
- Presupuesto aprox: ${data.presupuesto}
- Zona de interés: ${data.zona}`;
    window.open(`https://wa.me/523117134207?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="w-full bg-[#F4F1EA] py-24">
      <div className="max-w-4xl mx-auto px-8 bg-white p-12 shadow-sm border border-slate-100">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-[#7D4F39] font-bold">Personalizado</span>
          <h2 className="font-serif text-4xl mt-4 italic">Encuentra tu próximo destino</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold text-slate-400">¿Qué buscas?</label>
            <select 
              onChange={(e) => setData({...data, tipo: e.target.value})}
              className="border-b border-slate-200 py-2 focus:border-[#7D4F39] outline-none bg-transparent font-sans"
            >
              <option>Compra</option>
              <option>Renta</option>
              <option>Vender mi propiedad</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold text-slate-400">Presupuesto (MXN)</label>
            <input 
              placeholder="Ej. 3M - 5M"
              onChange={(e) => setData({...data, presupuesto: e.target.value})}
              className="border-b border-slate-200 py-2 focus:border-[#7D4F39] outline-none bg-transparent font-sans"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold text-slate-400">Zona de interés</label>
            <input 
              placeholder="Ej. Bonaterra, Tepic Centro"
              onChange={(e) => setData({...data, zona: e.target.value})}
              className="border-b border-slate-200 py-2 focus:border-[#7D4F39] outline-none bg-transparent font-sans"
            />
          </div>
        </div>

        <button 
          onClick={sendWa}
          className="w-full mt-12 bg-[#1A1A1A] text-white py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-[#7D4F39] transition-all"
        >
          Enviar Perfil de Búsqueda
        </button>
      </div>
    </section>
  );
}