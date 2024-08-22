import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <Router>
      <App />
    </Router>
  );
} else {
  throw new Error("Failed to find the root element");
}
