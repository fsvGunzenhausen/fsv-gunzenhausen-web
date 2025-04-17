
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTE_CONFIG } from './routes.config';
import PageHeader from './layout/page-header/PageHeader';
import SubHeader from './layout/page-sub-header/PageSubHeader';

function App() {

  return (
    <BrowserRouter>
      <div>
        {/* Render PageHeader */}
        <PageHeader />

        {/* Render SubHeader */}
        <SubHeader />

        {/* Dynamically generate routes based on ROUTE_CONFIG */}
        <Routes>
          {ROUTE_CONFIG.map(({ path, routeContent }) => (
            <Route key={path} path={path} element={routeContent.component} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
