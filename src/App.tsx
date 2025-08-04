
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ROUTES } from './routes';
import { ROUTE_CONFIG } from './routes.config';
import PageHeader from './layout/page-header/PageHeader';
import SubHeader from './layout/page-sub-header/PageSubHeader';
import PageFooter from './layout/page-footer/PageFooter';
import PageNotFound from './layout/page-not-found/PageNotFound';
import ScrollToTop from './shared/scrollToTop/ScrollToTop';
import PlakatModal from './components/plakat/Plakat';

function App() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const today = new Date();
      const cutoffDate = new Date('2025-08-11');

      // Show modal only if today is before August 11, 2025
      if (today < cutoffDate) {
        setShowModal(true);
      }
    }, []);

  return (
    <BrowserRouter>
         <ScrollToTop/> 
      <div className="d-flex flex-column min-vh-100">
        {showModal && <PlakatModal />}
        <PageHeader />
        <SubHeader />

        <main className="flex-grow-1">
          <Routes>
            {ROUTE_CONFIG.map(({ path, routeContent }) => (
              <Route key={path} path={path} element={routeContent.component} />
            ))}
          {/* Catch-all route for undefined paths */}
          <Route path={ROUTES.NOTFOUND} element={<PageNotFound />} />
          </Routes>
        </main>

        <PageFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
