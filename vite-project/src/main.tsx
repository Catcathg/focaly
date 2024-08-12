import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);
