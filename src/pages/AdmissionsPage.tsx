import { useState } from 'react';

const steps = [
  { step: 1, title: 'Inquiry', description: 'Submit an inquiry form or attend an open house to learn more about Greenfield Academy.', icon: 'fas fa-search' },
  { step: 2, title: 'Application', description: 'Complete the online application with required documents, transcripts, and recommendations.', icon: 'fas fa-file-alt' },
  { step: 3, title: 'Assessment', description: 'Students complete age-appropriate assessments and an interview with our admissions team.', icon: 'fas fa-pencil-alt' },
  { step: 4, title: 'Decision', description: 'Families receive admission decisions and financial aid notifications.', icon: 'fas fa-envelope-open' },
  { step: 5, title: 'Enrollment', description: 'Complete enrollment paperwork and attend orientation to join the Greenfield community.', icon: 'fas fa-check-circle' },
];

const tuitionData = [
  { level: 'Early Years (Pre-K)', tuition: '$18,500', fees: '$1,200' },
  { level: 'Kindergarten', tuition: '$21,000', fees: '$1,200' },
  { level: 'Elementary (Grades 1-5)', tuition: '$25,500', fees: '$1,500' },
  { level: 'Middle School (Grades 6-8)', tuition: '$29,000', fees: '$1,800' },
  { level: 'High School (Grades 9-12)', tuition: '$32,500', fees: '$2,000' },
];

const faqs = [
  {
    question: 'When is the application deadline?',
    answer: 'The priority application deadline is January 15th for the following academic year. Applications received after this date will be considered on a rolling basis if space is available.',
  },
  {
    question: 'Is financial aid available?',
    answer: 'Yes! Greenfield Academy is committed to making education accessible. We offer need-based financial aid that can cover up to 80% of tuition. Over 30% of our students receive some form of financial assistance.',
  },
  {
    question: 'What is the student-teacher ratio?',
    answer: 'Our average student-teacher ratio is 15:1, with an average class size of 16 students. This ensures personalized attention for every learner.',
  },
  {
    question: 'Do you accept international students?',
    answer: 'Yes, we welcome applications from international students. We provide ESL support and have a dedicated international student advisor to help with the transition.',
  },
  {
    question: 'What standardized tests do you require?',
    answer: 'Applicants in Grades 3-11 take the ISEE or SSAT. Early Years and Kindergarten applicants complete a readiness assessment during their campus visit.',
  },
  {
    question: 'Is transportation provided?',
    answer: 'We offer bus service to most areas within a 15-mile radius of campus. Routes and schedules are published each August for the upcoming school year.',
  },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-200 font-medium mb-2 text-sm uppercase tracking-wider">Admissions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            We welcome families who share our commitment to academic excellence, character development, 
            and community engagement.
          </p>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-10 bg-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-sm text-emerald-600 font-medium">Application Deadline</p>
              <p className="text-lg font-bold text-gray-800">January 15, 2026</p>
            </div>
            <div>
              <p className="text-sm text-emerald-600 font-medium">Decision Notifications</p>
              <p className="text-lg font-bold text-gray-800">March 10, 2026</p>
            </div>
            <div>
              <p className="text-sm text-emerald-600 font-medium">Enrollment Deadline</p>
              <p className="text-lg font-bold text-gray-800">April 10, 2026</p>
            </div>
            <div>
              <p className="text-sm text-emerald-600 font-medium">Open House</p>
              <p className="text-lg font-bold text-gray-800">November 8, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our streamlined admissions process is designed to be thorough yet accessible.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mr-5">
                  <i className={`${step.icon} text-lg text-emerald-700`}></i>
                </div>
                <div className="pt-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Step {step.step}</span>
                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tuition & Fees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Investment in your child's future for the 2025-2026 academic year.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <table className="w-full">
                <thead>
                  <tr className="bg-emerald-50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Grade Level</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Annual Tuition</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Activity Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionData.map((row, index) => (
                    <tr key={index} className="border-t border-gray-100">
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.level}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.tuition}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{row.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Financial aid available for qualifying families. Contact admissions for details.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Requirements</h2>
              <ul className="space-y-3">
                {[
                  'Completed online application form',
                  'Application fee ($75, non-refundable)',
                  'Official transcripts (last 2 years)',
                  'Teacher recommendation (2 for Grades 6-12)',
                  'Parent statement of purpose',
                  'Standardized test scores (ISEE/SSAT for Grades 3-11)',
                  'Student interview',
                  'Immunization records',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-emerald-500 mt-0.5"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Aid</h2>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Greenfield Academy believes that financial circumstances should not be a barrier to a quality education. 
                  Our financial aid program awards over <strong>$2.5 million</strong> annually to deserving families.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Need-based aid covering up to 80% of tuition',
                  'Merit scholarships for exceptional students',
                  'Sibling discounts available',
                  'Payment plan options (monthly/quarterly)',
                  'Financial aid deadline: February 1',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="fas fa-dollar-sign text-emerald-500 mt-0.5"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <i className={`fas fa-chevron-down text-sm text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}></i>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
