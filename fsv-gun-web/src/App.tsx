
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import { ROUTE_CONFIG } from './routes.config';
import PageHeader from './layout/page-header/PageHeader';
import SubHeader from './layout/page-sub-header/PageSubHeader';
import PageFooter from './layout/page-footer/PageFooter';
import PageNotFound from './layout/page-not-found/PageNotFound';

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
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
