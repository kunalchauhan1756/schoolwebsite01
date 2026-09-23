import { useState } from 'react';

const programs = [
  {
    id: 'early-years',
    title: 'Early Years (Pre-K – K)',
    icon: 'fas fa-baby',
    grades: 'Ages 3-6',
    description: 'A nurturing environment where young children develop foundational skills through play-based learning, creativity, and exploration.',
    highlights: ['Play-based curriculum', 'Social-emotional development', 'Early literacy & numeracy', 'Art & music integration'],
  },
  {
    id: 'elementary',
    title: 'Elementary School (Grades 1-5)',
    icon: 'fas fa-book-reader',
    grades: 'Ages 6-11',
    description: 'Building strong academic foundations while fostering curiosity, creativity, and a love for learning in a supportive community.',
    highlights: ['Core academics mastery', 'Project-based learning', 'World languages introduction', 'Character education'],
  },
  {
    id: 'middle',
    title: 'Middle School (Grades 6-8)',
    icon: 'fas fa-microscope',
    grades: 'Ages 11-14',
    description: 'A transitional program that challenges students academically while supporting their social and emotional development.',
    highlights: ['Advanced STEM courses', 'Advisory program', 'Leadership opportunities', 'Elective explorations'],
  },
  {
    id: 'high',
    title: 'High School (Grades 9-12)',
    icon: 'fas fa-graduation-cap',
    grades: 'Ages 14-18',
    description: 'Rigorous college-preparatory curriculum with AP courses, independent research, and comprehensive guidance for post-secondary success.',
    highlights: ['22 AP course offerings', 'College counseling', 'Senior capstone project', 'Internship program'],
  },
];

const departments = [
  { name: 'Mathematics', courses: 18, faculty: 8 },
  { name: 'Sciences', courses: 22, faculty: 10 },
  { name: 'English & Humanities', courses: 20, faculty: 9 },
  { name: 'World Languages', courses: 12, faculty: 6 },
  { name: 'Arts', courses: 15, faculty: 7 },
  { name: 'Physical Education', courses: 8, faculty: 5 },
  { name: 'Computer Science', courses: 10, faculty: 4 },
  { name: 'Social Studies', courses: 14, faculty: 6 },
];

const extracurriculars = [
  { category: 'Athletics', items: ['Soccer', 'Basketball', 'Swimming', 'Track & Field', 'Tennis', 'Volleyball'] },
  { category: 'Arts', items: ['Orchestra', 'Jazz Band', 'Drama Club', 'Visual Arts', 'Dance Ensemble', 'Film Society'] },
  { category: 'Academic', items: ['Debate Team', 'Math Olympiad', 'Science Bowl', 'Model UN', 'Robotics Club', 'Literary Magazine'] },
  { category: 'Service', items: ['Habitat for Humanity', 'Tutoring Program', 'Environmental Club', 'Key Club', 'Animal Shelter Aid'] },
];

export default function AcademicsPage() {
  const [activeProgram, setActiveProgram] = useState('early-years');
  const currentProgram = programs.find(p => p.id === activeProgram)!;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-200 font-medium mb-2 text-sm uppercase tracking-wider">Academics</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            A comprehensive curriculum designed to challenge, inspire, and prepare students 
            for success at every stage of their educational journey.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From early childhood through high school, we offer age-appropriate programs that grow with your child.</p>
          </div>

          {/* Program Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeProgram === program.id
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <i className={`${program.icon} mr-2`}></i>
                {program.grades}
              </button>
            ))}
          </div>

          {/* Active Program Details */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentProgram.title}</h3>
                <p className="text-emerald-700 font-medium mb-4">{currentProgram.grades}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{currentProgram.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Program Highlights</h4>
                <ul className="space-y-3">
                  {currentProgram.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-check text-xs text-emerald-600"></i>
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Departments</h2>
            <p className="text-gray-600">Our dedicated departments offer diverse and rigorous coursework.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-emerald-200 transition-all">
                <h3 className="font-semibold text-gray-800 mb-3">{dept.name}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{dept.courses} courses</span>
                  <span className="text-gray-500">{dept.faculty} faculty</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Beyond the Classroom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Over 50 clubs, teams, and organizations to explore passions and build community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurriculars.map((group, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-emerald-700 mb-4 flex items-center">
                  <i className="fas fa-star text-sm mr-2"></i>
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Calendar 2025-2026</h2>
                <p className="text-gray-600 mb-6">Key dates for the current academic year.</p>
                <ul className="space-y-3">
                  {[
                    { date: 'Aug 25', event: 'First Day of School' },
                    { date: 'Oct 13-17', event: 'Fall Break' },
                    { date: 'Nov 24 - Dec 5', event: 'Thanksgiving Break' },
                    { date: 'Dec 19 - Jan 4', event: 'Winter Break' },
                    { date: 'Mar 9-13', event: 'Spring Break' },
                    { date: 'May 25', event: 'Last Day of School' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <span className="text-sm font-semibold text-emerald-700 w-28">{item.date}</span>
                      <span className="text-gray-700">{item.event}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">School Day Schedule</h2>
                <p className="text-gray-600 mb-6">A typical day at Greenfield Academy.</p>
                <ul className="space-y-3">
                  {[
                    { time: '7:30 AM', event: 'Doors Open / Breakfast Club' },
                    { time: '8:00 AM', event: 'Morning Assembly' },
                    { time: '8:15 AM', event: 'Classes Begin' },
                    { time: '12:00 PM', event: 'Lunch' },
                    { time: '12:45 PM', event: 'Afternoon Classes' },
                    { time: '3:15 PM', event: 'Dismissal' },
                    { time: '3:30 - 5:30 PM', event: 'After-School Activities' },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <span className="text-sm font-semibold text-emerald-700 w-28">{item.time}</span>
                      <span className="text-gray-700">{item.event}</span>
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
