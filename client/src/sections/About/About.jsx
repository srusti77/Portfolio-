import EditableText from "../../components/Editable/EditableText";
import { usePortfolio } from "../../context/PortfolioContext";

function About() {
  const { draft, updateSection } = usePortfolio();
  const about = draft.about;
  const updateAbout = (field, value) => updateSection("about", { ...about, [field]: value });
  return (
    <section id="about" className="relative overflow-hidden py-32 px-6 lg:px-10 bg-[#08101f]">
      <div className="absolute inset-0 -z-10 overflow-hidden"><div className="absolute top-10 right-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" /><div className="absolute bottom-0 left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" /></div>
      <div className="max-w-7xl mx-auto">
        <div className="mt-6"><EditableText value={about.title} onChange={(value) => updateAbout("title", value)} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-white" /><div className="mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]" /></div>
        <div className="mt-14 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/70 p-8 md:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <div className="w-full max-w-none px-2 md:px-4 lg:px-6 text-left"><EditableText multiline value={about.description} onChange={(value) => updateAbout("description", value)} className="block w-full text-[17px] md:text-[18px] leading-8 tracking-[0.01em] text-slate-300 text-left" /></div>
        </div>
      </div>
    </section>
  );
}
export default About;
