import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { Download, Upload, Trash2, QrCode, Zap, Shield, CheckCircle2, ArrowRight } from "lucide-react";

// Config inicial para el QR
const qrCode = new QRCodeStyling({
  width: 320,
  height: 320,
  dotsOptions: { color: "#ffffff", type: "square" },
  cornersSquareOptions: { type: "square", color: "#ffffff" },
  imageOptions: { crossOrigin: "anonymous", margin: 10 }
});

export default function App() {
  const [url, setUrl] = useState("https://qr-generator-delta-gold.vercel.app/");
  const [name, setName] = useState("Nombre de mi QR");
  const [color, setColor] = useState("#000000"); // Standard is black for light backgrounds, but here we render on a white padded square
  const [dotType, setDotType] = useState("square");
  const [cornerType, setCornerType] = useState("square");
  const [logo, setLogo] = useState(null);
  const [transparentBg, setTransparentBg] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
      dotsOptions: { color: color, type: dotType },
      cornersSquareOptions: { type: cornerType, color: color },
      backgroundOptions: { color: transparentBg ? "transparent" : "#ffffff" },
      image: logo,
    });
  }, [url, color, dotType, cornerType, logo, transparentBg]);

  const onLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const download = () => qrCode.download({ name: name, extension: "png" });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen gradient-bg text-white font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-black/20 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="bg-teal-500/20 p-2 rounded-xl group-hover:bg-teal-500/40 transition">
              <QrCode className="text-teal-400" size={28} />
            </div>
            <span className="font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-200">
              QR Forge
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium text-gray-300">
            <button onClick={() => scrollToSection('home')} className="hover:text-teal-400 transition">Inicio</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition">Nosotros</button>
            <button onClick={() => scrollToSection('generator')} className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2.5 rounded-full transition shadow-[0_0_15px_rgba(20,184,166,0.4)] flex items-center gap-2">
              Crear QR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-medium tracking-wide animate-pulse">
            <Zap size={16} className="mr-2" /> Rápido, Seguro y Personalizable
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-xl">
            Genera Códigos QR <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
              Con Estilo Único
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-5 max-w-2xl font-light">
            Crea códigos profesionales para tu negocio o marca personal. Conecta a tu audiencia a tus enlaces, redes y más de manera espectacular.
          </p>
          <p className="text-s md:text-s text-gray-300 mb-5 max-w-2xl font-light">
            Un producto de Software Systems.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button onClick={() => scrollToSection('generator')} className="bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold px-8 py-4 rounded-full transition shadow-[0_0_30px_rgba(20,184,166,0.6)] flex items-center justify-center gap-2 group">
              Empezar Ahora <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
            </button>
            <button onClick={() => scrollToSection('about')} className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full transition flex items-center justify-center font-semibold">
              Saber Más
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 bg-black/40 backdrop-blur-md border-y border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Por qué elegirnos</h2>
            <p className="text-gray-400 max-w-4xl mx-auto">En Software Systems creemos que la tecnología debe ser accesible para todos, por eso hemos creado QR Forge para ofrecerte la mejor experiencia al crear conectividad instantánea con un diseño impecable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300 group">
              <div className="bg-teal-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <Zap className="text-teal-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Súper Rápido</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Genera, previsualiza y descarga tus códigos en tiempo real sin esperas. Todo desde tu navegador gracias a Vite & React.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300 group">
              <div className="bg-emerald-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <CheckCircle2 className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Personalizable</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Ajusta colores, formas y diseños del código para que coincida perfectamente con tu marca. Añade logotipos y mucho más fácilmente.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300 group">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                <Shield className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">100% Seguro</h3>
              <p className="text-gray-400 leading-relaxed text-sm">Sin rastreo invasivo y sin base de datos oculta. Tus links son tuyos, procesamos toda la interfaz del cliente directo a la imagen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="min-h-screen py-24 px-4 relative z-10 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Generador Interactivo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Da vida a tu QR ajustando las configuraciones abajo y descarga tu arte final.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* Panel de Configuración */}
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                <QrCode className="text-teal-400" size={32} /> Configuración
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nombre del Archivo</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition" placeholder="Mi QR" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">URL o Texto <span className="text-teal-400">*</span></label>
                  <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:ring-2 focus:ring-teal-500 outline-none transition" placeholder="https://qr-generator-delta-gold.vercel.app/" />
                </div>

                <div className="h-px bg-white/10 w-full my-6"></div>

                <div className="flex items-center justify-between bg-black/30 border border-white/10 p-4 rounded-xl">
                  <div>
                    <h4 className="text-gray-300 font-medium">Fondo Transparente</h4>
                    <p className="text-gray-500 text-xs mt-1">Descarga el QR sin el fondo blanco (PNG).</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={transparentBg} onChange={() => setTransparentBg(!transparentBg)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500"></div>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Estilo del Cuerpo</label>
                  <div className="flex flex-wrap gap-2">
                    {['square', 'dots', 'rounded', 'extra-rounded', 'classy'].map(type => (
                      <button key={type} onClick={() => setDotType(type)} className={`px-4 py-2 text-sm border rounded-xl capitalize transition-all ${dotType === type ? 'bg-teal-500 border-teal-400 text-gray-900 font-bold scale-105 shadow-lg shadow-teal-500/30' : 'bg-black/30 border-white/10 text-gray-300 hover:bg-white/10'}`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Forma de Esquinas</label>
                  <div className="flex flex-wrap gap-2">
                    {['square', 'dot', 'extra-rounded'].map(type => (
                      <button key={type} onClick={() => setCornerType(type)} className={`px-4 py-2 text-sm border rounded-xl capitalize transition-all ${cornerType === type ? 'bg-teal-500 border-teal-400 text-gray-900 font-bold scale-105 shadow-lg shadow-teal-500/30' : 'bg-black/30 border-white/10 text-gray-300 hover:bg-white/10'}`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-3">Color del Código</label>
                    <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-xl p-2 w-full hover:border-teal-500/50 transition">
                      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 border-none cursor-pointer rounded-lg bg-transparent" />
                      <span className="font-mono text-gray-300">{color}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-3">Añadir Logotipo</label>
                    <div className="flex items-center gap-3">
                      <label className="flex-1 flex justify-center items-center gap-2 cursor-pointer bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/20 transition text-sm text-gray-300">
                        <Upload size={18} className="text-teal-400" /> Cargar
                        <input type="file" className="hidden" accept="image/*" onChange={onLogoChange} />
                      </label>
                      {logo && (
                        <button onClick={() => setLogo(null)} className="p-3.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition" title="Quitar Logo">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Panel de Vista Previa */}
            <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-lg sticky top-28 xl:top-32 h-full">
              <div className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl mb-8 shadow-2xl flex items-center justify-center min-h-[350px] min-w-[350px]">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-teal-500/30 rounded-3xl blur-[60px] -z-10"></div>
                {/* Solid white background for the code itself ensures high contrast and scanability */}
                <div className="bg-white p-4 rounded-2xl shadow-inner transition-transform duration-300 hover:scale-[1.02]">
                  <div ref={ref} className="w-[320px] h-[320px]" />
                </div>
              </div>
              <button onClick={download} className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-gray-900 font-extrabold px-8 py-4 rounded-2xl transition shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:shadow-[0_0_35px_rgba(20,184,166,0.6)] uppercase tracking-wider text-lg group">
                <Download size={24} className="group-hover:-translate-y-1 transition duration-300" /> Descargar QR
              </button>
              <div className="mt-6 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full border border-white/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Vista Previa en Vivo
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/60 backdrop-blur-md border-t border-white/5 text-center text-gray-500 text-sm mt-auto">
        <div className="flex justify-center items-center gap-2 mb-2">
          <QrCode className="text-teal-400/50" size={16} /> <span className="text-gray-400 tracking-wider">QR FORGE</span>
        </div>
        <p>© {new Date().getFullYear()} Creado por Software Systems Dev. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}