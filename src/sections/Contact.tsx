import { useState } from 'react';
import { Mail, Github, Linkedin, Code2, MapPin, Send, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // Ignore if canvas confetti isn't supported
    }

    setTimeout(() => {
      setStatus('success');
      // Create mailto fallback link for user convenience
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Vishal,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      
      // Open default email client after brief confirmation
      window.location.href = mailtoUrl;

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/5 dark:border-white/5 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-14 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900">
            Let's <br className="hidden sm:inline" />
            <span className="text-gradient">connect</span>
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            I'm interested in building useful technology, learning continuously, and collaborating on interesting engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Vishal, I came across your portfolio and would love to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-50 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan text-sm transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-green to-accent-cyan text-slate-950 font-bold text-sm hover:opacity-95 shadow-glow-cyan transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Preparing email...</span>
                  ) : status === 'success' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-950" />
                      <span>Message Dispatched!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-xs text-accent-green font-mono animate-fadeIn">
                    ✓ Thank you! Opening your email client to complete dispatch.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right: Find Me Online & Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900 mb-2">
              Find me online
            </h3>

            {/* Email Direct Card */}
            <div className="p-5 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-sm flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-accent-green/10 border border-accent-green/30 flex items-center justify-center text-accent-green">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white dark:text-white light:text-slate-900">
                    Primary Email
                  </h4>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs font-mono text-slate-400 group-hover:text-accent-cyan transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 dark:bg-white/5 light:bg-slate-100 text-slate-400 hover:text-white transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-accent-green" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-white dark:text-white light:text-slate-900">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white dark:text-white light:text-slate-900">
                    GitHub
                  </h4>
                  <p className="text-xs font-mono text-slate-400 group-hover:text-accent-cyan transition-colors">
                    @vishalk-yadav
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all">
                &rarr;
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-accent-cyan/40 transition-all duration-300 shadow-sm flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white dark:text-white light:text-slate-900">
                    LinkedIn
                  </h4>
                  <p className="text-xs font-mono text-slate-400 group-hover:text-accent-cyan transition-colors">
                    @vishalkr-yadav
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all">
                &rarr;
              </span>
            </a>

            {/* LeetCode Card */}
            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-amber-400/40 transition-all duration-300 shadow-sm flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white dark:text-white light:text-slate-900">
                    LeetCode
                  </h4>
                  <p className="text-xs font-mono text-slate-400 group-hover:text-amber-400 transition-colors">
                    @vishalkr_yadav
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">
                &rarr;
              </span>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#0e1526]/80 dark:bg-[#0e1526]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 shadow-sm flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 flex items-center justify-center text-accent-green">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white dark:text-white light:text-slate-900">
                  Location
                </h4>
                <p className="text-xs font-mono text-slate-400">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
