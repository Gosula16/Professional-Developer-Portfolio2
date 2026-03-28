import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gosulavenkatesh461@gmail.com',
      href: 'mailto:gosulavenkatesh461@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7337514702',
      href: 'tel:+917337514702',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bengaluru, India',
      href: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gosula16', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/gosula-venkatesh-52b067233',
      label: 'LinkedIn',
    },
    { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="section-frame">
      <div className="content-shell">
        <div className="section-heading">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">Let&apos;s build something sharp together</h2>
          <p className="section-subtitle">
            Open to roles, collaborations, product work, and thoughtful technical
            conversations.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card lg:col-span-4">
            <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Whether you have a project, a role, or just want to connect around
              product and engineering, I&apos;d be glad to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-panel block p-4 hover-lift"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <info.icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/70">
                        {info.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-200">{info.value}</p>
                    </div>
                    {info.href.startsWith('http') ? (
                      <ExternalLink className="ml-auto h-4 w-4 text-slate-400" />
                    ) : null}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-button h-12 w-12 rounded-full px-0 py-0"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bento-card lg:col-span-8">
            <h3 className="text-2xl font-bold text-white">Send a message</h3>

            {isSubmitted && (
              <div className="mt-6 flex items-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-4 text-emerald-100">
                <CheckCircle className="mr-3 h-5 w-5" />
                Thank you. Your message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-white placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-white placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-white placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-[20px] border border-white/10 bg-white/6 px-4 py-4 text-white placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
                  placeholder="Tell me about the role, collaboration, or idea."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="premium-button disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-slate-950"></div>
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
