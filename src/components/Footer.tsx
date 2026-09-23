import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">GA</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Greenfield Academy</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Nurturing minds, building character, and inspiring excellence since 1952. 
              We are committed to providing a world-class education in a supportive environment.
            </p>
            <div className="flex space-x-4 mt-5">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-sm hover:text-emerald-400 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-sm hover:text-emerald-400 transition-colors">Admissions</Link></li>
              <li><Link to="/news" className="text-sm hover:text-emerald-400 transition-colors">News & Events</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm">Early Years (Pre-K)</span></li>
              <li><span className="text-sm">Elementary School</span></li>
              <li><span className="text-sm">Middle School</span></li>
              <li><span className="text-sm">High School</span></li>
              <li><span className="text-sm">After-School Programs</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-emerald-500 mt-1"></i>
                <span className="text-sm">123 Academy Drive<br />Greenfield, CA 93927</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-emerald-500"></i>
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-emerald-500"></i>
                <span className="text-sm">info@greenfieldacademy.edu</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-clock text-emerald-500"></i>
                <span className="text-sm">Mon-Fri: 7:30 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; 2026 Greenfield Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
