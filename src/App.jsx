import { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  CarFront,
  Settings,
  Trophy
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-blue-500/30">
      
      {/* --- GLOBAL GLOW EFFECTS --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 shadow-2xl' : 'bg-transparent pt-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50">
              <Compass className="h-8 w-8 text-blue-500" />
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                YD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">RENTAL</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 bg-slate-900/50 backdrop-blur-md border border-slate-800/50 px-8 py-3 rounded-full">
              <a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide">Home</a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide">About Us</a>
              <a href="#fleet" className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide">Our Fleet</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm tracking-wide">Contact</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a 
                href="tel:0943897878" 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
              >
                <PhoneCall className="h-4 w-4" />
                0943 89 78 78
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white bg-slate-900/50 p-2 rounded-full border border-slate-800"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col h-full justify-center items-center space-y-8 text-xl">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 font-medium hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 font-medium hover:text-blue-400 transition-colors">About Us</a>
            <a href="#fleet" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 font-medium hover:text-blue-400 transition-colors">Our Fleet</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 font-medium hover:text-blue-400 transition-colors">Contact</a>
            <a 
              href="tel:0943897878" 
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold mt-4 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <PhoneCall className="h-5 w-5" />
              0943 89 78 78
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center z-10 pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Toyota Land Cruiser Off-Road" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Blue Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              <MapPin className="h-3 w-3" /> Addis Ababa, Ethiopia
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Dominate Every <br />
              Terrain in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Ethiopia.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed border-l-2 border-blue-500 pl-4">
              Over 10 years of specialized off-road vehicle rentals. Experience the raw power and reliability of our custom-equipped Toyota Land Cruiser Longbase fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#fleet" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] group">
                Explore Our Fleet <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:0943897878" className="bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700 hover:border-blue-500/50 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                <PhoneCall className="mr-3 h-5 w-5 text-blue-400" />
                0943 89 78 78
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 relative z-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Composition */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-blue-600/20 rounded-3xl transform -rotate-3 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Toyota Land Cruiser Grille" 
                className="relative rounded-3xl shadow-2xl object-cover h-[550px] w-full border border-slate-800 grayscale-[20%] contrast-125"
              />
              {/* Floating Stat Badge */}
              <div className="absolute top-8 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
                <div className="bg-blue-600/20 p-3 rounded-full">
                  <Trophy className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">10+ Years</div>
                  <div className="font-medium text-sm text-blue-400 uppercase tracking-widest mt-1">Experience</div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-blue-500"></div>
                <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm">Company Profile</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Built for the <br />Unforgiving Wild.
              </h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Based in Addis Ababa, YD Car Rental doesn&apos;t do ordinary. We specialize strictly in high-endurance, off-road capable vehicles designed to tackle the most demanding expeditions across Ethiopia&apos;s diverse and challenging landscapes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
                  <Settings className="h-8 w-8 text-blue-500 mb-4" />
                  <h4 className="font-bold text-white text-lg mb-2">Flawless Engineering</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Every Land Cruiser undergoes rigorous mechanical audits to ensure zero failures in remote areas.</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
                  <ShieldCheck className="h-8 w-8 text-blue-500 mb-4" />
                  <h4 className="font-bold text-white text-lg mb-2">Total Reliability</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Trusted by NGOs, surveyors, and serious adventurers who cannot compromise on safety.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- OUR FLEET SECTION --- */}
      <section id="fleet" className="py-24 bg-slate-950 relative z-10">
        {/* Subtle background divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-3 text-sm">Our Premium Vehicles</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">The Off-Road Arsenal</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Heavily equipped 4x4s explicitly tuned for Ethiopian terrain. No compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Feature Car 1 - The Longbase */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition-all shadow-2xl relative">
              <div className="absolute top-6 right-6 bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full z-10 uppercase tracking-widest shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Flagship Model
              </div>
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Toyota Land Cruiser Longbase White" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10 relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-xl">
                  <Compass className="h-8 w-8 text-blue-400" />
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Land Cruiser 70 Series</h4>
                <p className="text-blue-400 font-semibold mb-6 uppercase tracking-wider text-sm">(Longbase Edition)</p>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                  The undisputed king of the African outback. Engineered for massive payload capacity, unyielding durability, and uncompromising 4x4 capability in the harshest environments.
                </p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-8 text-sm font-medium text-slate-300">
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> V8 Turbo Diesel</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> Manual Trans.</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> Extended Range</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> Heavy Suspension</div>
                </div>
                
                <a href="tel:0943897878" className="inline-block bg-white hover:bg-slate-200 text-slate-950 px-8 py-4 rounded-full font-bold transition-colors w-full text-center mt-auto">
                  Reserve This Vehicle
                </a>
              </div>
            </div>

            {/* Feature Car 2 - Executive SUV */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group hover:border-blue-500/50 transition-all shadow-2xl relative flex flex-col">
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1624647385860-22c50db2d326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Dark Toyota SUV" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10 flex-grow flex flex-col relative">
                 <div className="absolute top-0 right-10 -translate-y-1/2 bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-xl">
                  <CarFront className="h-8 w-8 text-blue-400" />
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Land Cruiser V8 / Prado</h4>
                <p className="text-slate-500 font-semibold mb-6 uppercase tracking-wider text-sm">Executive Off-Road</p>
                
                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                  Experience ultimate off-road capability without sacrificing luxury. Perfect for VIP transport, executive field visits, and clients requiring both ruggedness and premium comfort.
                </p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-8 text-sm font-medium text-slate-300">
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> Premium Interior</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> Auto Trans.</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> Advanced 4x4</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-blue-500" /> Climate Control</div>
                </div>

                <a href="tel:0943897878" className="inline-block bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-8 py-4 rounded-full font-bold transition-colors w-full text-center mt-auto">
                  Inquire Availability
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT CTA SECTION --- */}
      <section id="contact" className="py-24 relative z-10 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ShieldCheck className="h-16 w-16 text-blue-400 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Ready for your expedition?</h2>
          <p className="text-blue-200 text-lg md:text-xl mb-12 font-medium max-w-2xl mx-auto">
            Our team in Addis Ababa is ready to dispatch the most reliable Land Cruisers in the region. Lock in your dates today.
          </p>
          
          <div className="bg-slate-950/60 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <div className="text-blue-500 font-bold mb-2 flex items-center justify-center md:justify-start gap-2 text-sm uppercase tracking-widest"><MapPin className="h-4 w-4"/> Base of Operations</div>
              <div className="text-white text-2xl font-semibold">Addis Ababa, Ethiopia</div>
            </div>
            
            <div className="hidden md:block h-20 w-px bg-slate-700/50"></div>
            
            <div className="text-center md:text-right flex-shrink-0">
              <div className="text-slate-400 font-medium mb-2 uppercase tracking-widest text-sm">Direct Booking Line</div>
              <a href="tel:0943897878" className="text-4xl md:text-5xl font-black text-white hover:text-blue-400 transition-colors flex items-center gap-4 justify-center md:justify-end drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <div className="bg-blue-600 p-3 rounded-full animate-pulse shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                  <PhoneCall className="h-8 w-8 text-white" />
                </div>
                0943 89 78 78
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-blue-500" />
              <span className="font-bold text-xl tracking-tighter text-white">
                YD <span className="text-blue-500">RENTAL</span>
              </span>
            </div>

            <div className="text-slate-500 text-sm flex flex-col md:flex-row gap-4 md:gap-8 font-medium">
              <span>© {new Date().getFullYear()} YD Car Rental. All rights reserved.</span>
              <span className="flex items-center justify-center gap-1"><MapPin className="h-4 w-4 text-blue-500"/> Addis Ababa, Ethiopia</span>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}