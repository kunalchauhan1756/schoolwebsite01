const timeline = [
  { year: '1952', event: 'Greenfield Academy founded by Dr. Eleanor Whitfield with 45 students.' },
  { year: '1968', event: 'Expanded to include middle school programs and new science wing.' },
  { year: '1985', event: 'Opened the state-of-the-art performing arts center.' },
  { year: '1998', event: 'Launched the Advanced Placement program with 12 courses.' },
  { year: '2010', event: 'Completed campus modernization with sustainable energy systems.' },
  { year: '2020', event: 'Pioneered hybrid learning model during global challenges.' },
  { year: '2024', event: 'Opened new STEM Innovation Lab and Robotics Center.' },
];

const values = [
  {
    icon: 'fas fa-lightbulb',
    title: 'Intellectual Curiosity',
    description: 'We foster a love of learning and encourage students to ask questions, explore ideas, and think critically.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Integrity & Respect',
    description: 'We build a community grounded in honesty, fairness, and mutual respect for all members.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Citizenship',
    description: 'We prepare students to be informed, engaged citizens who contribute positively to the world.',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Growth Mindset',
    description: 'We believe every student can grow and improve through dedication, effort, and perseverance.',
  },
];

const leadership = [
  { name: 'Dr. Margaret Sullivan', role: 'Head of School', bio: 'Ed.D. from Harvard. 25+ years in education leadership.' },
  { name: 'Mr. David Park', role: 'Dean of Academics', bio: 'M.A. from Stanford. Champion of innovative curriculum design.' },
  { name: 'Ms. Rachel Torres', role: 'Dean of Students', bio: 'M.Ed. from Columbia. Passionate about student wellbeing.' },
  { name: 'Dr. Michael Adams', role: 'Director of STEM', bio: 'Ph.D. from MIT. Former NASA researcher turned educator.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-200 font-medium mb-2 text-sm uppercase tracking-wider">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story & Mission</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            For over 70 years, Greenfield Academy has been a beacon of educational excellence, 
            shaping young minds and building future leaders.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <i className="fas fa-bullseye text-xl text-emerald-700"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Greenfield Academy is dedicated to providing an exceptional education that develops the whole child — 
                intellectually, socially, emotionally, and physically. We cultivate an environment where students 
                are challenged to reach their full potential, develop strong character, and become compassionate 
                leaders prepared to make a positive impact on the world.
              </p>
            </div>
            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <i className="fas fa-eye text-xl text-teal-700"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be a leading independent school recognized for academic innovation, inclusive community, 
                and the development of ethical leaders. We envision a future where every Greenfield graduate 
                is equipped with the knowledge, skills, and character to thrive in an ever-changing world 
                and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These values guide everything we do at Greenfield Academy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-emerald-600`}></i>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our History</h2>
            <p className="text-gray-600">Key milestones in the Greenfield Academy journey.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right pr-4">
                  <span className="text-emerald-700 font-bold text-sm">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-emerald-500 rounded-full mt-1 relative">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-emerald-200"></div>
                  )}
                </div>
                <div className="pl-6">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Leadership</h2>
            <p className="text-gray-600">Meet the dedicated team guiding Greenfield Academy forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-800">
                    {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800">{person.name}</h3>
                <p className="text-emerald-700 text-sm font-medium mb-2">{person.role}</p>
                <p className="text-gray-500 text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Accreditations & Memberships</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['NAIS', 'WASC', 'CAAIS', 'College Board', 'NCEA'].map((org) => (
              <div key={org} className="px-6 py-3 bg-gray-100 rounded-lg">
                <span className="text-gray-700 font-semibold">{org}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
