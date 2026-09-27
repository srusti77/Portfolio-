import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";
import { Download, Mail, Play } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";
import { useRef, useState } from "react";

function Hero() {
  const { draft, updateSection } = usePortfolio();
  const { isAdmin } = useAdmin();
  const home = draft.home;
  const videoRef = useRef(null);
  const [showPlayIntro, setShowPlayIntro] = useState(true);
  const updateHome = (field, value) => updateSection("home", { ...home, [field]: value });
  const updateButton = (field, value) => updateSection("home", { ...home, buttons: { ...home.buttons, [field]: value } });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 overflow-hidden"><div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" /><div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[170px]" /></div>
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />{home.availability}</span>
            <div className="mt-8"><EditableText value={home.greeting} onChange={(value) => updateHome("greeting", value)} className="text-xl md:text-2xl text-slate-400 font-medium tracking-wide" /></div>
            <div className="mt-5 space-y-4"><EditableText value={home.firstName} onChange={(value) => updateHome("firstName", value)} className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white" /><EditableText value={home.lastName} onChange={(value) => updateHome("lastName", value)} className="block text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent" /></div>
            <div className="mt-8"><EditableText value={home.roles[0]} onChange={(value) => updateHome("roles", [value, home.roles[1], home.roles[2]])} className="text-2xl md:text-3xl font-bold text-white tracking-tight" /></div>
            <div className="mt-8 max-w-xl"><EditableText multiline value={home.description} onChange={(value) => updateHome("description", value)} className="text-lg md:text-xl leading-8 text-slate-400" /></div>
            {isAdmin && <div className="mt-8 max-w-xl"><label className="block mb-2 text-cyan-400 font-semibold">Resume Link (local PDF or external link)</label><input type="text" value={home.buttons.resumeLink || ""} onChange={(e) => updateButton("resumeLink", e.target.value)} placeholder="Use /resume.pdf or paste an external resume link" className="w-full rounded-xl border border-cyan-400/30 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400" /></div>}
            <div className="mt-12 flex flex-wrap items-center gap-4">{home.buttons.resumeLink && <a href={home.buttons.resumeLink} download={home.buttons.resumeLink.startsWith("/") ? "Srusti_Ponnaganti_Resume.pdf" : undefined} target={home.buttons.resumeLink.startsWith("/") ? undefined : "_blank"} rel={home.buttons.resumeLink.startsWith("/") ? undefined : "noreferrer"} className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-cyan-500/40"><Download size={20} />{home.buttons.resumeText || "Download Resume"}</a>}<button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-3 rounded-xl border border-slate-600 px-7 py-4 font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"><Mail size={19} />Contact Me</button></div>
          </div>
          <div id="home-video" className="flex justify-center lg:justify-end"><div className="relative group"><div className="absolute -inset-12 rounded-full bg-cyan-400/10 blur-[150px] transition-all duration-500 group-hover:bg-cyan-400/20" /><div className="absolute inset-0 rounded-full border border-cyan-400/20" /><div className="relative w-80 h-80 md:w-[410px] md:h-[410px] rounded-full border-[4px] border-cyan-400/70 shadow-[0_0_80px_rgba(34,211,238,0.18)] overflow-hidden bg-slate-950 transition-all duration-500 group-hover:scale-[1.03]"><video ref={videoRef} src={home.video || "/intro-video.mp4"} controls playsInline preload="metadata" onPlay={() => setShowPlayIntro(false)} onEnded={() => setShowPlayIntro(true)} className="w-full h-full object-cover" aria-label="Srusti introduction video" />{showPlayIntro && <button type="button" aria-label="Play intro video" onClick={() => { if (videoRef.current) { setShowPlayIntro(false); videoRef.current.play?.(); } }} className="absolute bottom-11 left-1/2 z-20 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/50 bg-slate-950/80 px-3.5 py-2 text-xs font-semibold text-cyan-200 shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-cyan-300 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"><Play size={13} fill="currentColor" />Play Intro</button>}</div></div></div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
