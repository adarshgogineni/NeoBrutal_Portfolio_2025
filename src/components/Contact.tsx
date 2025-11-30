import { useState } from 'react';
import resumePDF from '../assets/resume.pdf';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/adarshgogineni', icon: '💻' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adarshgogineni', icon: '💼' },
  { name: 'Email', url: 'mailto:adarshgogineni@gmail.com', icon: '📧' },
  { name: 'Download Resume', url: resumePDF, icon: '📄', download: true },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Web3Forms API (free email service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '06c0b78a-fe06-4fdd-920c-fc7e7ee88050', // You'll need to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-jetbrains font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 inline-block bg-neon-green border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
            Get in Touch
          </h2>
          <p className="font-jua text-xl sm:text-2xl mt-8 max-w-2xl">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
            <form
              onSubmit={handleSubmit}
              className="relative bg-neon-pink border-4 border-black p-8 space-y-6"
            >
              <div>
                <label className="font-jetbrains font-bold text-lg mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black font-jua text-lg focus:outline-none focus:ring-4 focus:ring-neon-green"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-jetbrains font-bold text-lg mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-4 border-black font-jua text-lg focus:outline-none focus:ring-4 focus:ring-neon-green"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="font-jetbrains font-bold text-lg mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-4 border-black font-jua text-lg focus:outline-none focus:ring-4 focus:ring-neon-green resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-k2d font-extrabold text-xl px-6 py-4 bg-black text-white border-4 border-black hover:bg-neon-green hover:text-black transition-all hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message →'}
              </button>
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-neon-green border-4 border-black">
                  <p className="font-jua text-center text-black text-lg">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-300 border-4 border-black">
                  <p className="font-jua text-center text-black">
                    ❌ Failed to send. Please email me directly at{' '}
                    <a href="mailto:adarshgogineni@gmail.com" className="underline font-bold">
                      adarshgogineni@gmail.com
                    </a>
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
              <div className="relative bg-cyan-300 border-4 border-black p-8">
                <h3 className="font-jetbrains font-extrabold text-2xl mb-6">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      {...(link.download ? { download: 'Adarsh_Gogineni_Resume.pdf' } : { target: '_blank', rel: 'noopener noreferrer' })}
                      className="font-k2d font-bold text-lg px-4 py-3 bg-white border-4 border-black hover:bg-neon-pink transition-all hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center"
                    >
                      <span className="text-2xl block mb-1">{link.icon}</span>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
              <div className="relative bg-yellow-300 border-4 border-black p-8">
                <h3 className="font-jetbrains font-extrabold text-2xl mb-4">
                  Let's Collaborate!
                </h3>
                <p className="font-jua text-lg">
                  I'm passionate about building intelligent systems and solving complex data challenges.
                  Whether you need ML model development, data pipeline engineering, or AI solution architecture,
                  I'm here to help transform your data into actionable insights and scalable AI products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
