import React from 'react';
import { 
  Menu, 
  PlayCircle, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Activity, 
  Scan, 
  BrainCircuit, 
  HeartPulse 
} from 'lucide-react';
import HealthCareTile from './components/HealthCareTile';

// Colors matched from HTML
const COLORS = {
  primary: "#00a4e6",
  primaryDark: "#0057B8",
};

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-display bg-[#F8F9FA] text-[#101618]">
      <div className="layout-container flex h-full grow flex-col">
        
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#00a4e6]/10 px-6 md:px-20 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-[#00a4e6] rounded-lg flex items-center justify-center text-white">
              <Activity size={20} />
            </div>
            <h2 className="text-[#0057B8] text-xl font-extrabold leading-tight tracking-tight">WellV3</h2>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-8">
              {['Platform', 'Solutions', 'Resources', 'Pricing'].map((item) => (
                <a key={item} className="text-[#101618] text-sm font-semibold hover:text-[#00a4e6] transition-colors" href="#">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-[#00a4e6] text-white text-sm font-bold tracking-wide transition-all hover:bg-[#0057B8]">
                Get Started
              </button>
              <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-[#00a4e6]/10 text-[#0057B8] text-sm font-bold tracking-wide transition-all hover:bg-[#00a4e6]/20">
                Log In
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Menu className="text-[#0057B8]" />
          </div>
        </header>

        {/* Main Hero Content */}
        <main className="flex-1 flex items-center justify-center py-12 px-6 md:px-20">
          <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Content (60%) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a4e6]/10 text-[#0057B8] text-xs font-bold uppercase tracking-widest w-fit">
                <CheckCircle2 size={14} className="text-[#0057B8]" />
                Next-Gen Health Tracking
              </div>
              
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0057B8] text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                  Optimizing Patient <span className="text-[#00a4e6]">Wellness</span> Through Data
                </h1>
                <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                  Empowering healthcare providers and patients with a unified platform for tracking, improving, and celebrating health milestones in real-time.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-2 min-w-[180px] cursor-pointer justify-center rounded-xl h-14 px-8 bg-[#00a4e6] text-white text-lg font-bold shadow-lg shadow-[#00a4e6]/25 hover:shadow-[#00a4e6]/40 hover:-translate-y-0.5 transition-all">
                  Get Started Today
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="flex items-center gap-2 min-w-[180px] cursor-pointer justify-center rounded-xl h-14 px-8 border-2 border-[#00a4e6]/20 bg-white text-[#0057B8] text-lg font-bold hover:bg-[#00a4e6]/5 transition-all">
                  <PlayCircle size={20} />
                  Watch Demo
                </button>
              </div>

              {/* Trust / Rating Badge */}
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9R0oGV2CUY_R7WEuQ_tYWxg4AwzuKRUqNHFQPtn7dmovlqcftA1OkUoBSqZMHot1YLYbxYODWBqrtT0B-wbyV3F71t5SXaWHaP73LWs2L-mps-5kkHqrsn57Hqt5rYOnSN8OrhioyYyOK3Q9Ob65ubjy0uiiOeG8KrW7XZ9MDXQSvNfg-wIWQ2vwYGIE4J1q8MgqdXm86ruJzenA4UmU3K9RjJcItX1QnKU-pdxL_GbvmMg2CUa46rkCI0kfy_zwO78L8zz4shMgN",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXN_BJRl8mx3jxqrB7stvKHs6nFF-DGVXU7hv75ApDeKOWd8bzF6IgaU6Ej2oLibI8ApAeLZWGxN88z5-WTOzBh85aLTTgF6lnrhzzT-T5Z4zxDt_kOcGZbhF7IqG98U6-QEOtuU-IUxrqQVK1kDCouGCbzxjeykQy0Bo8PqE4g3qFDi9e5gv-he7GTJBPfu8T6HGaFlmeAm3yOpPZ0iOvLhHLEhMMVcNjVhWSwuN0q380uyU7AJ5wU6vydC_pG38inXsPauahKFJe",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuCP1w1uE-U69FeSOJa74wngEaQIdFOMJ5DlKvmaKjFGGxKdbZxsui4UgTAa4wGXhd8T5BrzR6daRTyPjjbWAyrRXplGEdu2pEHFdki5o2DqgvS1NjRqjYkXPl1GLvw9nad_3yuV9Bwlz_gFNvFKTonqDgEM5uXmBX_W0J5Un91yzX9tIy6a1pfj5rqBY1J7AodYPAMTV03-RiHr5cNY9eNpKRbPNiINKi2mweWIm19vNTB92SYFpy1SCXjmcJmpoSItAP_mXBGDWmVw"
                    ].map((src, i) => (
                      <div key={i} className="size-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                        <img className="w-full h-full object-cover" src={src} alt="Doctor profile" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-[#0057B8] font-bold">4.9/5</span>
                      <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs font-semibold">Trusted by 500+ clinics worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Replaced Journey Component with React Component */}
            <div className="lg:col-span-5 relative h-[600px] flex items-center justify-center">
              <HealthCareTile />
            </div>

          </div>
        </main>

        {/* Bottom Logos / Social Proof */}
        <footer className="py-10 border-t border-slate-100 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-20">
            <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Trusted by medical leaders around the globe
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale contrast-125">
              <div className="flex items-center gap-2">
                <Activity size={32} />
                <span className="font-bold text-xl">GeneralHealth</span>
              </div>
              <div className="flex items-center gap-2">
                <Scan size={32} />
                <span className="font-bold text-xl">BioScan</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit size={32} />
                <span className="font-bold text-xl">MindCare</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse size={32} />
                <span className="font-bold text-xl">VitalSync</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}