import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-200 font-medium mb-2 text-sm uppercase tracking-wider">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            We'd love to hear from you. Whether you have a question about admissions, 
            academics, or anything else, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 relative z-10">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-xl text-emerald-700"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">123 Academy Drive<br />Greenfield, CA 93927</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-xl text-emerald-700"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">Main: (555) 123-4567<br />Admissions: (555) 123-4568</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-xl text-emerald-700"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">General: info@greenfieldacademy.edu<br />Admissions: admissions@greenfieldacademy.edu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-2xl text-emerald-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll respond within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-emerald-700 font-medium hover:text-emerald-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="academics">Academics</option>
                        <option value="tour">Schedule a Tour</option>
                        <option value="financial-aid">Financial Aid</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Office Hours */}
            <div>
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 opacity-50"></div>
                <div className="relative text-center">
                  <i className="fas fa-map-marked-alt text-4xl text-emerald-600 mb-2"></i>
                  <p className="text-gray-700 font-medium">123 Academy Drive, Greenfield, CA</p>
                  <p className="text-sm text-gray-500 mt-1">Interactive map</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <i className="fas fa-clock text-emerald-600 mr-2"></i>
                  Office Hours
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { day: 'Monday - Friday', hours: '7:30 AM - 4:00 PM' },
                    { day: 'Saturday', hours: '9:00 AM - 12:00 PM (Admissions only)' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700 font-medium">{item.day}</span>
                      <span className="text-gray-500">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Department Contacts */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <i className="fas fa-building text-emerald-600 mr-2"></i>
                  Department Contacts
                </h3>
                <ul className="space-y-3">
                  {[
                    { dept: 'Main Office', contact: '(555) 123-4567', email: 'main@greenfieldacademy.edu' },
                    { dept: 'Admissions', contact: '(555) 123-4568', email: 'admissions@greenfieldacademy.edu' },
                    { dept: 'Athletics', contact: '(555) 123-4569', email: 'athletics@greenfieldacademy.edu' },
                    { dept: 'Alumni Relations', contact: '(555) 123-4570', email: 'alumni@greenfieldacademy.edu' },
                  ].map((item, index) => (
                    <li key={index} className="text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                      <p className="font-medium text-gray-800">{item.dept}</p>
                      <p className="text-gray-500">
                        <i className="fas fa-phone text-xs mr-1"></i>{item.contact} · <i className="fas fa-envelope text-xs mr-1"></i>{item.email}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
