import { useState } from 'react';

const categories = ['All', 'News', 'Events', 'Athletics', 'Arts'];

const allNews = [
  {
    id: 1,
    category: 'News',
    date: 'January 15, 2026',
    title: 'Science Fair Winners Announced',
    excerpt: 'Congratulations to our students who showcased incredible innovation at this year\'s regional science fair. Three Greenfield students received top honors.',
    content: 'Our students demonstrated exceptional scientific thinking and creativity at the 2026 Regional Science Fair held at the Convention Center. Senior Maya Johnson won first place for her project on sustainable water filtration systems, while sophomore Alex Kim took second place for his research on AI-assisted plant growth monitoring.',
  },
  {
    id: 2,
    category: 'Arts',
    date: 'January 10, 2026',
    title: 'Spring Musical: "Into the Woods"',
    excerpt: 'Don\'t miss our drama department\'s spectacular production running February 14-16 in the Whitfield Theater.',
    content: 'The Greenfield Drama Department is proud to present Stephen Sondheim\'s beloved musical "Into the Woods." This year\'s production features over 40 student performers and showcases the incredible talent of our theater program. Performances at 7:00 PM on Feb 14-15 and 2:00 PM matinee on Feb 16.',
  },
  {
    id: 3,
    category: 'News',
    date: 'January 5, 2026',
    title: 'New STEM Lab Grand Opening',
    excerpt: 'We\'re excited to announce the grand opening of our cutting-edge robotics and AI laboratory, made possible by a generous alumni donation.',
    content: 'The new $2 million Innovation Lab features 3D printers, laser cutters, robotics stations, and a dedicated AI research area. The facility was made possible by a generous donation from alumnus Dr. Robert Chen (Class of \'85) and will serve students across all grade levels.',
  },
  {
    id: 4,
    category: 'Athletics',
    date: 'December 20, 2025',
    title: 'Varsity Basketball Advances to Regionals',
    excerpt: 'The Greenfield Eagles secured their spot in the regional championship with a thrilling overtime victory over rival Westfield.',
    content: 'In a game that will be remembered for years to come, the Greenfield Eagles varsity basketball team defeated Westfield Prep 78-75 in overtime to advance to the regional championship. Senior point guard Marcus Williams scored 28 points including the game-winning three-pointer.',
  },
  {
    id: 5,
    category: 'Events',
    date: 'December 15, 2025',
    title: 'Winter Concert Highlights Season',
    excerpt: 'The annual Winter Concert featured performances by our orchestra, jazz band, and chamber choir to a packed auditorium.',
    content: 'Over 500 attendees enjoyed an evening of beautiful music at our annual Winter Concert. The evening featured the full orchestra performing Tchaikovsky\'s Nutcracker Suite, the jazz band with holiday favorites, and the chamber choir\'s moving rendition of "Silent Night."',
  },
  {
    id: 6,
    category: 'Events',
    date: 'December 8, 2025',
    title: 'Open House Draws Record Attendance',
    excerpt: 'Over 300 prospective families attended our annual Open House, exploring campus and meeting faculty and students.',
    content: 'Our annual Open House was our largest yet, with over 300 families visiting campus. Attendees toured classrooms, met with department heads, attended student panels, and enjoyed refreshments in the commons. The next Open House is scheduled for March 15, 2026.',
  },
  {
    id: 7,
    category: 'Athletics',
    date: 'November 30, 2025',
    title: 'Swim Team Sets School Records',
    excerpt: 'Three school records fell at the invitational meet, with the relay team qualifying for the state championship.',
    content: 'The Greenfield swim team had an outstanding performance at the Winter Invitational, setting school records in the 200m freestyle relay, 100m butterfly, and 400m medley relay. The 200m freestyle relay team has now qualified for the state championship for the third consecutive year.',
  },
  {
    id: 8,
    category: 'News',
    date: 'November 20, 2025',
    title: 'AP Exam Results Exceed National Average',
    excerpt: 'Greenfield students achieved a 92% pass rate on AP exams, significantly above the national average of 62%.',
    content: 'We are proud to announce that our students achieved a 92% pass rate (score of 3 or higher) on Advanced Placement exams, well above the national average. Particularly strong results were seen in AP Calculus BC (96% pass rate), AP English Literature (94%), and AP Biology (93%).',
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredNews = activeCategory === 'All'
    ? allNews
    : allNews.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-200 font-medium mb-2 text-sm uppercase tracking-wider">Stay Connected</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Stay up to date with the latest happenings, achievements, and upcoming events at Greenfield Academy.
          </p>
        </div>
      </section>

      {/* Filter & News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                <div className="h-44 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
                  <i className={`fas ${
                    item.category === 'Athletics' ? 'fa-trophy' :
                    item.category === 'Arts' ? 'fa-theater-masks' :
                    item.category === 'Events' ? 'fa-calendar-alt' :
                    'fa-newspaper'
                  } text-4xl text-emerald-200 group-hover:scale-110 transition-transform`}></i>
                  <span className="absolute top-3 right-3 bg-white/90 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-emerald-600 font-medium mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-500">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { date: 'Feb 1', title: 'Parent-Teacher Conference', time: '3:00 - 7:00 PM', location: 'Main Building' },
              { date: 'Feb 8', title: 'Varsity Basketball - Regional Championship', time: '6:00 PM', location: 'Gymnasium' },
              { date: 'Feb 14-16', title: 'Spring Musical: Into the Woods', time: '7:00 PM / 2:00 PM Sun', location: 'Whitfield Theater' },
              { date: 'Feb 22', title: 'STEM Open House', time: '10:00 AM - 2:00 PM', location: 'Innovation Lab' },
              { date: 'Mar 1', title: 'Spring Arts Exhibition', time: '5:00 - 8:00 PM', location: 'Arts Center' },
              { date: 'Mar 15', title: 'Admissions Open House', time: '9:00 AM - 12:00 PM', location: 'Campus-wide' },
            ].map((event, index) => (
              <div key={index} className="flex items-start space-x-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-xs font-bold text-emerald-700">{event.date.split(' ')[0]}</span>
                  <span className="text-lg font-bold text-emerald-800">{event.date.split(' ')[1]}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    <i className="fas fa-clock mr-1"></i>{event.time} · <i className="fas fa-map-marker-alt mr-1"></i>{event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
