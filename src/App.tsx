/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Check, 
  ArrowDown, 
  Star, 
  Gift, 
  Users, 
  Zap, 
  LockOpen, 
  ShieldCheck, 
  ChevronDown,
  X,
  Calendar,
  Dumbbell,
  Trophy
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-800 hover:bg-gray-50 transition text-sm sm:text-base cursor-pointer"
      >
        {question}
        <ChevronDown className={`text-gray-400 w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

const VortexVSL: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [showPauseIcon, setShowPauseIcon] = React.useState(false);

  const curvatura = 0.5;

  const handleFirstClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setShowOverlay(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current && !showOverlay) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setShowPauseIcon(false);
      } else {
        videoRef.current.pause();
        setShowPauseIcon(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      let progressoLogico = Math.pow((videoRef.current.currentTime / videoRef.current.duration), curvatura) * 100;
      if (progressoLogico > 100) progressoLogico = 100;
      setProgress(progressoLogico);
    }
  };

  const handleEnded = () => {
    setShowPauseIcon(false);
    setProgress(100);
  };

  return (
    <div id="vsl-container-9187" style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '20px auto', aspectRatio: '9/16', background: '#000', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', fontFamily: 'sans-serif' }}>
      <video 
        ref={videoRef}
        id="vsl-video" 
        autoPlay 
        muted 
        playsInline 
        preload="auto"
        onClick={togglePlay} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
      >
        <source src="https://imgur.com/u20c05W.mp4" type="video/mp4" />
      </video>

      {showOverlay && (
        <div id="vsl-overlay" onClick={handleFirstClick} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 30 }}>
          <div style={{ background: '#059669', color: 'white', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 4px 15px #05966980' }}>
            🔊 CLIQUE PARA OUVIR
          </div>
        </div>
      )}

      {showPauseIcon && (
        <div id="pause-icon" onClick={togglePlay} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 20 }}>
          <div className="vortex-pulse-button" style={{ width: '80px', height: '80px', background: '#05966966', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid white', marginLeft: '5px' }}></div>
          </div>
        </div>
      )}

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '12px', background: 'rgba(255,255,255,0.2)', zIndex: 25 }}>
        <div id="progress-bar" style={{ width: `${progress}%`, height: '100%', background: '#059669', transition: 'width 0.1s linear' }}></div>
      </div>

      <style>{`
        @keyframes vortex-pulse-emerald {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .vortex-pulse-button { animation: vortex-pulse-emerald 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default function App() {
  const [showUpsell, setShowUpsell] = useState(false);

  const currentDate = React.useMemo(() => new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }), []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setShowUpsell(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="px-4 pb-4 pt-6 flex flex-col items-center">
                <div className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 mb-3">
                  <Star className="w-3 h-3 fill-pink-600" /> OFERTA VÁLIDA SÓ NESTE MOMENTO
                </div>
                <h2 className="text-center font-black text-gray-900 text-3xl leading-tight mb-2">Espere! Antes de finalizar...</h2>
                <p className="text-center text-sm text-gray-600 mb-4 leading-relaxed px-2">
                  Você escolheu o plano básico de <span className="font-bold text-gray-800">R$ 10,00</span>, mas por apenas <span className="font-bold text-[#10B981]">R$ 9,90 a mais</span> pode liberar o Pacote Completo, com acesso total a +250 Dinâmicas para Treinos de Goleiros e todos os bônus.
                </p>
                
                <div className="bg-green-50/50 w-full rounded-2xl p-4 mb-4 border border-green-100 flex flex-col items-center">
                  <div className="flex justify-center items-start text-[#10B981] font-black leading-none mb-4">
                    <span className="text-xl mt-1 mr-1">R$</span>
                    <span className="text-6xl tracking-tighter">19</span>
                    <span className="text-2xl mt-1">,90</span>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#10B981] rounded-full p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] sm:text-xs font-black text-gray-900 uppercase">+250 DINÂMICAS PARA TREINOS DE GOLEIROS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#10B981] rounded-full p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] sm:text-xs font-black text-gray-900 uppercase">ACESSO VITALÍCIO + ATUALIZAÇÕES</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#10B981] rounded-full p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] sm:text-xs font-black text-gray-900 uppercase">+R$ 97 EM BÔNUS INCLUSOS</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://checkout.materialcompleto.shop/VCCL1O8SD2NF"
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-black py-3 px-4 rounded-xl text-sm sm:text-base uppercase tracking-wide transition-colors cursor-pointer mb-4 text-center leading-tight shadow-md block"
                >
                  SIM, QUERO O PLANO COMPLETO!
                </a>

                <a 
                  href="https://checkout.materialcompleto.shop/VCCL1O8SD2NG"
                  className="w-full bg-white border-2 border-[#E2E8F0] text-[#94A3B8] font-black py-3 px-4 rounded-xl text-sm sm:text-base transition-colors cursor-pointer text-center leading-tight block"
                >
                  Não, prefiro o plano básico
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Urgency Bar */}
      <div className="bg-[#b91c1c] text-white py-2 px-2 sm:px-4 shadow-md relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-4 relative z-10">
          <p className="text-sm font-black uppercase tracking-wide leading-none text-center sm:text-left whitespace-nowrap">OFERTA VÁLIDA ATÉ:</p>
          <div className="bg-white text-[#b91c1c] rounded-md px-2 py-0.5 font-black text-sm shadow-sm">
            {currentDate}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-[0.95] sm:leading-[1] md:leading-[1.05] mb-6 tracking-[-0.05em] sm:tracking-tighter max-w-6xl mx-auto px-0 sm:px-2"
          >
            <span className="block sm:hidden text-[2.2rem] leading-[0.95] tracking-[-0.08em] px-0">
              <span className="block whitespace-nowrap"><span style={{ color: '#166534' }}>+250 Dinâmicas</span> que</span>
              <span className="block whitespace-nowrap">Tornam Seus</span>
              <span className="block">Treinos de Goleiros <span style={{ color: '#166534' }}>Muito</span></span>
              <span className="block whitespace-nowrap"><span style={{ color: '#166534' }}>Mais Eficientes</span></span>
            </span>
            <span className="hidden sm:inline">
              <span style={{ color: '#166534' }}>+250 Dinâmicas</span> que Tornam Seus Treinos de Goleiros <span style={{ color: '#166534' }}>Muito Mais Eficientes</span>
            </span>
          </motion.h1>
          
          <img 
            src="https://i.ibb.co/DgSSnjHc/Untitled-design-1-1.png" 
            alt="Mockup" 
            className="w-full max-w-5xl mx-auto mb-8" 
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1024}
            height={576}
          />
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToPricing}
            className="bg-[#166534] hover:bg-[#14532d] text-white font-black py-3 px-8 rounded-full text-base sm:text-xl mb-4 shadow-lg flex items-center justify-center gap-2 mx-auto animate-scale-pulse cursor-pointer"
          >
            Quero Acessar Agora 👇
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pt-2 pb-6 px-4">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
          {[
            "Reflexo, Coordenação e Agilidade",
            "Treinos Mais Organizados e Produtivos",
            "Para Goleiros de Todas as Idades e Níveis",
            "Atividades Práticas e Fáceis de Aplicar"
          ].map((feature, i) => (
            <div 
              key={i}
              className="bg-[#10B981] rounded-full p-1.5 px-6 flex items-center justify-center gap-3 shadow-md transform transition hover:-translate-y-1 w-auto max-w-full min-h-[44px]"
            >
              <div className="bg-white/20 p-1.5 rounded-full flex-shrink-0">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-white font-bold text-sm sm:text-base leading-tight text-center">{feature}</span>
            </div>
          ))}

          <div className="max-w-2xl mx-auto text-center mt-6 mb-4">
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              Transforme a forma como você conduz seus treinos com <span className="text-[#10B981] font-bold">exercícios mais organizados, eficientes e fáceis de aplicar</span> — sem perder horas planejando tudo do zero.
            </p>
          </div>

          <div className="w-full text-center">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToPricing}
              className="inline-block bg-[#22C55E] hover:bg-[#16A34A] text-white font-black py-3 px-4 rounded-xl text-lg sm:text-2xl uppercase tracking-wide shadow-[0_4px_0_rgb(21,128,61)] hover:shadow-[0_2px_0_rgb(21,128,61)] hover:translate-y-[2px] transition-all w-full max-sm:max-w-xs max-w-sm animate-scale-pulse whitespace-normal sm:whitespace-nowrap leading-tight text-center cursor-pointer"
            >
              QUERO MINHAS DINÂMICAS
            </motion.button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase">O PROBLEMA NÃO É VOCÊ…</h2>
          <p className="text-gray-600 text-lg mb-10">Se você:</p>
          <div className="space-y-3">
            {[
              "Fica sem ideias diferente para os treinos",
              "Percebe os goleiros desmotivados nos exercícios",
              "Tem dificuldade em variar os treinos",
              "Perde muito tempo montando atividades",
              "Quer treinos mais organizados e profissionais",
              "Sente que os atletas acabam perdendo o foco"
            ].map((text, i) => (
              <div key={i} className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-4 flex items-center gap-3 text-left shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full border border-[#FECACA] text-[#DC2626] flex items-center justify-center">
                  <X className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-[#7F1D1D] font-bold text-base leading-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Respira Section */}
      <section className="bg-white pt-0 pb-2 px-4 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center text-white mb-4 shadow-md"
          >
            <ArrowDown className="w-5 h-5" strokeWidth={3} />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Respira.</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
            Com <span className="text-[#10B981] font-black">DINÂMICAS PRONTAS</span> você vai aplicar treinos mais envolventes, desenvolver habilidades importantes e manter os goleiros muito mais participativos durante os treinos.
          </p>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-slate-50 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] mb-3 uppercase tracking-tight">E AGORA BÔNUS</h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">Materiais complementares inclusos gratuitamente no Pacote Completo.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: "Exercícios para Tempo de Reação", oldPrice: "27", icon: Zap },
              { title: "Guia de Fortalecimento para Goleiros", oldPrice: "33", icon: Dumbbell },
              { title: "Exercícios de Explosão e Impulsão", oldPrice: "37", icon: Trophy }
            ].map((bonus, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 border-2 border-green-700 shadow-sm flex items-start gap-4 transition hover:shadow-md"
              >
                <div className="bg-green-50 rounded-xl p-3 shrink-0 flex items-center justify-center">
                  <bonus.icon className="w-8 h-8 text-[#166534]" />
                </div>
                <div className="text-left">
                  <h4 className="font-black text-[#0F172A] text-lg mb-1 leading-tight">{bonus.title}</h4>
                  <div className="text-red-600 font-bold text-sm uppercase">
                    <span className="line-through mr-2">R$ {bonus.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-12 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center text-gray-900 mb-6 font-sans">Escolha Seu <span style={{ color: '#166534' }}>Plano</span></h2>
          
          <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-xl py-2 px-4 mb-6 flex items-center justify-center gap-3 shadow-sm max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <Zap className="text-amber-500 fill-amber-400 w-8 h-8 flex-shrink-0" />
            <span className="text-[#C53030] font-black text-sm sm:text-lg uppercase tracking-tight leading-none pt-1 text-left sm:text-center">ÚLTIMAS UNIDADES POR ESTE VALOR PROMOCIONAL</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden relative p-6 flex flex-col items-center">
              <h3 className="text-xl font-black text-gray-900 mb-1 uppercase">Plano Básico</h3>
              <p className="text-gray-500 text-xs mb-4">Para quem quer testar o método</p>
              <div className="flex items-start text-gray-900 font-black mb-1">
                <span className="text-lg mt-2">R$</span>
                <span className="text-5xl font-black">10</span>
                <div className="flex flex-col items-start mt-2">
                  <span className="text-2xl font-black">,00</span>
                </div>
              </div>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-6">Pagamento Único</p>
              
              <ul className="w-full space-y-3 mb-6 text-left">
                <li className="flex items-center gap-2 text-gray-700 font-bold text-xs sm:text-sm">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  +250 Dinâmicas para Treinos de Goleiros
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-bold text-xs sm:text-sm">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Acesso digital
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-bold text-xs sm:text-sm">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Garantia de 14 dias
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-bold text-xs sm:text-sm">
                  <div className="bg-red-500 rounded-full p-1 flex-shrink-0">
                    <X className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Bônus Exclusivos
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-bold text-xs sm:text-sm">
                  <div className="bg-red-500 rounded-full p-1 flex-shrink-0">
                    <X className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Atualizações mensais
                </li>
              </ul>
              
              <button 
                onClick={() => setShowUpsell(true)}
                className="w-[90%] mx-auto bg-[#10B981] hover:bg-[#059669] text-white font-black py-2.5 rounded-lg uppercase tracking-wide transition shadow-lg transform active:scale-95 animate-scale-pulse text-lg cursor-pointer"
              >
                Comprar Agora
              </button>
            </div>

            {/* Complete Plan */}
            <div className="bg-green-50 rounded-3xl shadow-xl border-2 border-green-600 overflow-hidden relative flex flex-col items-center transform md:-translate-y-4">
              <div className="bg-[#166534] w-full text-center py-1.5 text-white font-black uppercase text-xs flex items-center justify-center gap-1.5">
                <Star className="w-3 h-3 fill-white text-white" /> Mais Escolhido
              </div>
              <div className="p-6 flex flex-col items-center w-full">
                <h3 className="text-xl font-black mb-1 uppercase text-[#166534]">Plano Completo</h3>
                <p className="text-gray-500 text-xs mb-4 text-center">Para transformar seus treinos</p>
                <div className="flex font-black mb-1 items-start text-[#166534]">
                  <span className="text-lg mt-2">R$</span>
                  <span className="text-6xl">27</span>
                  <div className="flex flex-col items-start mt-2">
                    <span className="text-2xl">,00</span>
                  </div>
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-6">Pagamento Único</p>
                
                <div className="w-full bg-[#EAB308] text-white font-black py-3 rounded-lg uppercase tracking-wide flex items-center justify-center gap-2 mb-6 text-lg">
                  <Star className="w-4 h-4 fill-white text-white" /> Acesso Vitalício
                </div>

                <div className="w-full mb-4 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                    <h4 className="text-[#10B981] font-black text-sm sm:text-base leading-tight">+250 Dinâmicas para Treinos de Goleiros:</h4>
                  </div>
                  <ul className="space-y-1 text-gray-700 font-bold text-sm ml-8 list-disc">
                    <li>Reflexo e Tempo de Reação</li>
                    <li>Coordenação Motora</li>
                    <li>Agilidade e Movimentação</li>
                    <li>Posicionamento e Defesa</li>
                    <li>Concentração e Atenção</li>
                  </ul>
                </div>

                <div className="w-full bg-white rounded-xl p-3 border border-[#bbf7d0] mb-4 text-left">
                  <div className="flex items-center gap-2 mb-2 text-pink-500 font-bold text-xs uppercase">
                    <Gift className="w-3 h-3" />
                    Mais de R$ 97 reais em bônus GRÁTIS:
                  </div>
                  <ul className="space-y-1.5 text-gray-600 text-[11px] font-medium">
                    <li className="flex items-center gap-2">• Exercícios para Tempo de Reação</li>
                    <li className="flex items-center gap-2">• Guia de Fortalecimento para Goleiros</li>
                    <li className="flex items-center gap-2">• Exercícios de Explosão e Impulsão</li>
                  </ul>
                </div>

                 <div className="w-full space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    <div className="bg-[#166534] rounded-full p-1 flex-shrink-0">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#166534] font-black">Para Goleiros de Todas as Idades e Níveis</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    <div className="bg-[#166534] rounded-full p-1 flex-shrink-0">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#166534] font-black">Aplicação Imediata</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    <div className="bg-[#166534] rounded-full p-1 flex-shrink-0">
                      <Calendar className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#166534] font-black">Atualizações Mensais</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    <div className="bg-[#166534] rounded-full p-1 flex-shrink-0">
                      <LockOpen className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#166534] font-black">Materiais 100% Baixáveis</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    <div className="bg-[#166534] rounded-full p-1 flex-shrink-0">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#166534] font-black">Suporte Rápido</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    <div className="bg-[#166534] rounded-full p-1 flex-shrink-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#166534] font-black">Garantia de 14 dias</span>
                  </div>
                </div>

                <a 
                  href="https://checkout.materialcompleto.shop/VCCL1O8SD2NE"
                  className="w-[90%] mx-auto bg-[#10B981] hover:bg-[#059669] text-white font-black py-2.5 rounded-lg uppercase tracking-wide transition shadow-lg transform active:scale-95 animate-scale-pulse text-lg cursor-pointer block text-center"
                >
                  Comprar Agora
                </a>
                <div className="text-center mt-3 text-gray-400 text-xs flex items-center justify-center gap-1">
                  <LockOpen className="w-3 h-3" /> Ambiente seguro para pagamentos
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-10 px-4 content-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-[#0F172A] mb-8">Depoimentos Reais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Marcos", role: "Treinador de Goleiros", text: "Os treinos ficaram muito mais organizados e os atletas participam mais.", img: "https://i.ibb.co/k6QZTqPM/Captura-de-tela-2026-05-23-100325.png" },
              { name: "Rafael", role: "Professor de Escolinha", text: "Economizei muito tempo criando exercícios diferentes.", img: "https://i.ibb.co/hFh1KPqd/Captura-de-tela-2026-01-24-154100.png" },
              { name: "Lucas", role: "Treinador Esportivo", text: "As dinâmicas ajudaram bastante no foco e na evolução dos goleiros.", img: "https://i.ibb.co/HDBqYnjL/Captura-de-tela-2026-01-24-154211.png" }
            ].map((t, i) => (
              <div key={i} className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    alt={t.name} 
                    className="w-10 h-10 rounded-full object-cover object-center" 
                    src={t.img} 
                    referrerPolicy="no-referrer" 
                    loading="lazy" 
                    decoding="async" 
                    width={40}
                    height={40}
                  />
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-[10px] text-gray-500 mt-0.5">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 italic text-xs leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section removed - backed up in backup_sections.json */}

      {/* Guarantee Section */}
      <section className="bg-white py-6 px-4 content-auto">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] p-6 text-center border border-gray-100">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="text-[#166534]">
              <ShieldCheck className="w-14 h-14" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Risco zero por 14 dias</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">Você pode acessar o material e testar por 14 dias. Se não gostar, é só pedir o reembolso e recebe 100% do seu dinheiro de volta.</p>
          <p className="text-gray-400 font-bold text-xs sm:text-sm">Sem perguntas. Sem burocracia.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 px-4 content-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-8">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {[
              { q: "Como recebo o material?", a: "Você recebe acesso imediato no seu e-mail logo após a confirmação do pagamento." },
              { q: "Serve para quais idades?", a: "Sim, as dinâmicas atendem desde a base (escolinhas sub-7 ao sub-17) até treinos de goleiros adultos." },
              { q: "As atividades são fáceis de aplicar?", a: "Sim! Cada dinâmica vem explicada detalhadamente com foco nos objetivos de preparação." },
              { q: "Preciso ter experiência para utilizar?", a: "Não. O material é muito didático e ilustrado, facilitando a aplicação imediata por qualquer professor ou treinador." },
              { q: "Serve para escolinhas e clubes?", a: "Com certeza! É ideal para escolinhas de futebol, clubes profissionais, futsal ou projetos comunitários." },
              { q: "E se eu não gostar?", a: "Você tem 14 dias de garantia para testar. Se não gostar, devolvemos 100% do seu investmento." }
            ].map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
          </div>
          
          <div className="mt-8">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToPricing}
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-black py-3.5 rounded-lg uppercase tracking-wide transition shadow-lg text-base sm:text-2xl animate-scale-pulse whitespace-normal sm:whitespace-nowrap block text-center cursor-pointer"
            >
              QUERO MINHAS DINÂMICAS PRONTAS
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 text-xs sm:text-sm border-t border-gray-100">
        <p>© 2026 – Todos os direitos reservados.</p>
        <p>Este projeto é protegido por direitos autorais.</p>
      </footer>
    </div>
  );
}

