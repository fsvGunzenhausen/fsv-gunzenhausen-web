import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import { ROUTE_CONFIG } from './routes.config';
import PageHeader from './layout/page-header/PageHeader';
import SubHeader from './layout/page-sub-header/PageSubHeader';
import PageFooter from './layout/page-footer/PageFooter';
import PageNotFound from './layout/page-not-found/PageNotFound';
import ScrollToTop from './shared/scrollToTop/ScrollToTop';
import { NewsProvider } from './components/news/NewsContext';
import RundflugtagModal from './components/plakat/Rundflugtag';


function App() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const today = new Date();
      const cutoffDate = new Date('2026-08-02');

      // Show modal only if today is before August 2, 2026
      if (today < cutoffDate) {
        setShowModal(true);
      }
    }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="d-flex flex-column min-vh-100">

       {showModal && <RundflugtagModal />}
        <PageHeader />
        <NewsProvider>
          <SubHeader />

          <main className="flex-grow-1">
            <Routes>
              {ROUTE_CONFIG.map(({ path, routeContent }) => (
                <Route
                  key={path}
                  path={path}
                  element={routeContent.component}
                />
              ))}

              <Route
                path={ROUTES.NOTFOUND}
                element={<PageNotFound />}
              />
            </Routes>
          </main>
        </NewsProvider>

        <PageFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;