import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn } from "@/components/FadeIn";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Globe, Bot, LayoutTemplate, Clock, Wrench,
  Workflow, Share2, Search, ArrowRight, Zap,
  MessageSquare, Cpu, TrendingUp, CheckCircle2
} from "lucide-react";

// --- DATA ---

const services = [
  {
    title: "Custom Websites",
    desc: "Beautiful responsive websites built for businesses that want to stand out.",
    icon: Globe,
    benefits: ["Mobile-first design", "SEO-optimized", "Fast loading"]
  },
  {
    title: "AI Chatbots",
    desc: "Intelligent chatbots that handle customer support, bookings, and lead generation 24/7.",
    icon: Bot,
    benefits: ["24/7 availability", "Lead capture", "Human handoff"]
  },
  {
    title: "Landing Pages",
    desc: "High-converting single page websites designed to turn visitors into customers.",
    icon: LayoutTemplate,
    benefits: ["Conversion-focused", "A/B ready", "Analytics-ready"]
  },
  {
    title: "Waitlist Pages",
    desc: "Clean professional waitlist pages for businesses and products launching soon.",
    icon: Clock,
    benefits: ["Email capture", "Viral sharing", "Launch-ready"]
  },
  {
    title: "Website Maintenance",
    desc: "Ongoing monthly support and updates so your website never falls behind.",
    icon: Wrench,
    benefits: ["Monthly updates", "Security patches", "Priority support"]
  },
  {
    title: "AI Automation",
    desc: "Automate repetitive business tasks using cutting-edge AI tools.",
    icon: Workflow,
    benefits: ["Save hours daily", "Reduce errors", "Scale faster"]
  },
  {
    title: "Social Media Setup",
    desc: "Professional social media profile setup and branding so your business looks legitimate.",
    icon: Share2,
    benefits: ["Consistent branding", "Profile optimization", "Content strategy"]
  },
  {
    title: "SEO Optimization",
    desc: "Get your business found on Google with search engine optimization that drives traffic.",
    icon: Search,
    benefits: ["Higher rankings", "More traffic", "Long-term results"]
  }
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your goals, audience, and vision. No guesswork."
  },
  {
    num: "02",
    title: "We Build",
    desc: "Our team crafts your solution with absolute precision and speed."
  },
  {
    num: "03",
    title: "You Review",
    desc: "You give feedback, we refine until it aligns perfectly with your goals."
  },
  {
    num: "04",
    title: "We Launch",
    desc: "Your product goes live and completely dominates the competition."
  }
];

const reasons = [
  {
    title: "Fast Turnaround",
    desc: "We move with urgency. No delays, no excuses. Speed is our standard.",
    icon: Zap
  },
  {
    title: "Direct Communication",
    desc: "You talk to the builder, not a middleman. Transparency at every step.",
    icon: MessageSquare
  },
  {
    title: "Cutting-Edge Technology",
    desc: "We use the latest AI and web tools to give you an unfair advantage.",
    icon: Cpu
  },
  {
    title: "Results Focused",
    desc: "We measure success by your growth, not our process. We build to win.",
    icon: TrendingUp
  }
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most projects are completed within 1–2 weeks depending on complexity. We'll give you an exact timeline after our discovery call."
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Every project includes revision rounds to ensure you're completely satisfied before launch."
  },
  {
    q: "What do I need to get started?",
    a: "Just a clear idea of what you want to build. We'll handle the rest from there."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer monthly maintenance plans to keep your site fast, secure, and up to date."
  },
  {
    q: "What makes TechByJaver different from other agencies?",
    a: "We're builders who communicate directly, move fast, and use cutting-edge AI tools that most agencies haven't caught up to yet."
  }
];

const techStack = ["HTML", "CSS", "JavaScript", "React", "Node.js", "AI Tools", "OpenAI", "Automation APIs"];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
          {/* Clean minimal gradient background */}
          <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, hsl(214 32% 95%) 0%, hsl(0 0% 100%) 70%)' }}></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-primary leading-[1.05]">
                We Build Digital Products <br className="hidden sm:block" />
                That <span className="text-accent relative inline-block">
                  Dominate.
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full"></span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Custom websites, AI tools, and digital solutions for businesses ready to lead — not follow.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button size="lg" asChild className="w-full sm:w-auto px-10">
                <a href="mailto:javiertanaxcruz@gmail.com">Hire Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto px-10 border-primary/20 hover:border-primary">
                <a href="#portfolio">View Our Work</a>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section id="services" className="py-24 md:py-32 bg-secondary/30 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">What We Build</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
              {services.map((s, i) => (
                <FadeIn key={i} delay={i * 0.05} direction="up" className="h-full">
                  <div className="bg-card rounded-3xl p-8 border border-border/60 shadow-lg shadow-black/[0.02] hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <s.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-3">{s.title}</h3>
                    <p className="text-muted-foreground mb-8 flex-grow">{s.desc}</p>

                    <ul className="space-y-3 mt-auto">
                      {s.benefits.map((b, j) => (
                        <li key={j} className="flex items-start text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 mr-3 text-accent shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TECH STACK SECTION */}
        <section className="py-20 bg-white border-y border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">Built With Modern Precision</h3>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-full border border-border/80 bg-secondary/50 text-foreground font-semibold text-sm md:text-base hover:border-primary hover:bg-white transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. PROCESS SECTION */}
        <section id="process" className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-20">How It Works</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
              {processSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up" className="relative group">
                  {/* Connector line for desktop */}
                  {i !== processSteps.length - 1 && (
                    <div className="hidden xl:block absolute top-12 left-1/2 w-full h-[2px] bg-border/60 -z-10 group-hover:bg-primary/20 transition-colors"></div>
                  )}

                  <div className="text-center relative">
                    <span className="text-7xl font-display font-bold text-secondary-foreground/10 block mb-6 transition-colors group-hover:text-primary/20">
                      {step.num}
                    </span>
                    <h3 className="text-2xl font-bold font-display mb-4 relative inline-block bg-white px-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PORTFOLIO SECTION */}
        <section id="portfolio" className="py-24 md:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Our Work</h2>
            </FadeIn>

            <FadeIn>
              <div
                className="rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/40 relative"
                style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(160,160,160,0.12)' }}
              >
                {/* Top grey divider line */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(160,160,160,0.25), transparent)' }}></div>

                {/* Left: content */}
                <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center lg:w-1/2 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] mb-8 block" style={{ color: '#6b6b6b' }}>
                    Current Project — TechByJaver
                  </span>
                  <h3 className="text-6xl md:text-7xl font-display font-bold mb-6 tracking-tighter" style={{ color: '#f0f0f0' }}>
                    Gen-Z
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: '#888888' }}>
                    The next social platform for young entrepreneurs. Showcase your skills, build your portfolio, and get discovered by the people who matter.
                  </p>
                  <Button size="lg" asChild className="self-start h-12 px-8 font-semibold border"
                    style={{ backgroundColor: 'transparent', color: '#f0f0f0', borderColor: 'rgba(160,160,160,0.35)' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <a href="https://gen-z-showcase--javiertanaxcruz.replit.app/" target="_blank" rel="noopener noreferrer">
                      Visit Site <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Right: big Z logo */}
                <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-auto flex items-center justify-center overflow-hidden">
                  {/* Subtle radial glow behind the Z */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)' }}></div>
                  {/* Vertical left separator */}
                  <div className="hidden lg:block absolute left-0 top-8 bottom-8 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(160,160,160,0.2), transparent)' }}></div>
                  <span
                    className="font-display font-bold select-none"
                    style={{
                      fontSize: 'clamp(180px, 22vw, 320px)',
                      color: 'rgba(255,255,255,0.92)',
                      lineHeight: 1,
                      letterSpacing: '-0.05em',
                      textShadow: '0 0 80px rgba(255,255,255,0.08)',
                    }}
                  >
                    Z
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 6. WHY CHOOSE US SECTION */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">Why Choose Us</h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
              {reasons.map((reason, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up" className="flex flex-col sm:flex-row gap-6">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-secondary flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{reason.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PRICING SECTION */}
        <section id="pricing" className="py-24 md:py-32 bg-secondary/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Simple Pricing</h2>

              <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl shadow-black/5 border border-border/50">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Starting At</p>
                <div className="text-7xl md:text-8xl font-display font-bold text-primary mb-8 tracking-tighter">
                  $99
                </div>
                <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto">
                  Every project is different. Get a custom quote for your specific needs, built for exactly what you require.
                </p>

                <Button size="lg" className="w-full sm:w-auto px-12 h-14 text-lg" asChild>
                  <a href="mailto:javiertanaxcruz@gmail.com">Get a Free Quote</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section id="faq" className="py-24 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">Frequently Asked Questions</h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </section>

        {/* 9. GEN-Z ANNOUNCEMENT SECTION */}
        <section className="py-24 md:py-32 text-white text-center relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
          {/* Subtle grey radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(80,80,80,0.18) 0%, transparent 70%)' }}></div>
          {/* Thin top border line in grey */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(160,160,160,0.3), transparent)' }}></div>
          {/* Thin bottom border line in grey */}
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(160,160,160,0.3), transparent)' }}></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#6b6b6b' }}>Coming Soon</p>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter" style={{ color: '#f0f0f0' }}>
                Something Big Is Coming.
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto" style={{ color: '#888888' }}>
                Gen-Z is a social media platform built for young entrepreneurs. No degree required. No connections needed. Just talent.
              </p>

              <Button size="lg" asChild className="h-14 px-10 text-lg font-semibold border" style={{ backgroundColor: 'transparent', color: '#f0f0f0', borderColor: 'rgba(160,160,160,0.35)' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <a href="https://gen-z-showcase--javiertanaxcruz.replit.app/" target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                </a>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
        <section className="py-24 md:py-32 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tight">
                Ready to Build Something That Matters?
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Button size="lg" asChild className="w-full sm:w-auto px-12 h-14 text-lg">
                  <a href="mailto:javiertanaxcruz@gmail.com">Hire Us</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto px-10 h-14 text-lg border-border hover:bg-secondary hover:text-foreground">
                  <a href="https://gen-z-showcase--javiertanaxcruz.replit.app/" target="_blank" rel="noopener noreferrer">
                    Join the Gen-Z Waitlist
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}