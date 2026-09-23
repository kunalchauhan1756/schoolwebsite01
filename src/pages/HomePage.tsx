import { Link } from 'react-router-dom';

const stats = [
  { number: '70+', label: 'Years of Excellence' },
  { number: '1,200', label: 'Students Enrolled' },
  { number: '98%', label: 'College Acceptance' },
  { number: '15:1', label: 'Student-Teacher Ratio' },
];

const features = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'Academic Excellence',
    description: 'Rigorous curriculum designed to challenge and inspire students at every level.',
  },
  {
    icon: 'fas fa-users',
    title: 'Experienced Faculty',
    description: 'Our dedicated teachers bring passion, expertise, and innovation to the classroom.',
  },
  {
    icon: 'fas fa-flask',
    title: 'STEM Focus',
    description: 'State-of-the-art labs and programs preparing students for the future of technology.',
  },
  {
    icon: 'fas fa-palette',
    title: 'Arts & Culture',
    description: 'Comprehensive arts programs fostering creativity and self-expression.',
  },
  {
    icon: 'fas fa-futbol',
    title: 'Athletics',
    description: 'Competitive sports programs building teamwork, discipline, and school spirit.',
  },
  {
    icon: 'fas fa-heart',
    title: 'Community Service',
    description: 'Instilling values of compassion and responsibility through meaningful service.',
  },
];

const testimonials = [
  {
    quote: "Greenfield Academy has been transformative for my daughter. The teachers truly care about each student's growth.",
    author: 'Sarah Mitchell',
    role: 'Parent of Class of 2025',
  },
  {
    quote: "The academic rigor combined with the supportive community prepared me perfectly for university.",
    author: 'James Chen',
    role: 'Alumni, Class of 2023',
  },
  {
    quote: "I love coming to school every day. There's always something exciting happening here!",
    author: 'Emma Rodriguez',
    role: 'Current Student, Grade 10',
  },
];

const newsItems = [
  {
    date: 'Jan 15, 2026',
    title: 'Science Fair Winners Announced',
    excerpt: 'Congratulations to our students who showcased incredible innovation at this year\'s regional science fair.',
  },
  {
    date: 'Jan 10, 2026',
    title: 'Spring Musical: "Into the Woods"',
    excerpt: 'Don\'t miss our drama department\'s spectacular production running February 14-16.',
  },
  {
    date: 'Jan 5, 2026',
    title: 'New STEM Lab Opening',
    excerpt: 'We\'re excited to announce the grand opening of our cutting-edge robotics and AI laboratory.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative">
          <div className="max-w-3xl">
            <p className="text-emerald-200 font-medium mb-3 text-sm uppercase tracking-wider">Welcome to Greenfield Academy</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Where Curiosity Meets <span className="text-emerald-300">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed">
              Empowering students since 1952 with a transformative education that nurtures intellectual growth, 
              character development, and a lifelong love of learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="px-8 py-3.5 bg-white text-emerald-800 font-semibold rounded-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-emerald-700">{stat.number}</p>
                <p className="text-sm text-gray-600 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Greenfield?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide a holistic educational experience that prepares students for success in college and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-emerald-100 group"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                  <i className={`${feature.icon} text-2xl text-emerald-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from parents, students, and alumni about their Greenfield experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-7 border border-gray-100">
                <div className="text-emerald-500 mb-4">
                  <i className="fas fa-quote-left text-2xl"></i>
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Latest News</h2>
              <p className="text-gray-600">Stay updated with what's happening at Greenfield.</p>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800">
              View All <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center">
                  <i className="fas fa-newspaper text-4xl text-emerald-300"></i>
                </div>
                <div className="p-6">
                  <p className="text-sm text-emerald-600 font-medium mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center text-emerald-700 font-medium">
              View All News <i className="fas fa-arrow-right ml-2 text-sm"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Journey Today</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Join a community of learners, thinkers, and leaders. Applications for the 2026-2027 academic year are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-3.5 bg-white text-emerald-800 font-semibold rounded-lg hover:bg-emerald-50 transition-all shadow-lg"
            >
              Start Application
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
