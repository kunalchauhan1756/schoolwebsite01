import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { SchoolProvider } from '../context/SchoolContext';

export default function MainLayout() {
  useScrollToTop();

  return (
    <SchoolProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SchoolProvider>
  );
}
