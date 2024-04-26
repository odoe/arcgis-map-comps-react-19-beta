import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import "@arcgis/core/assets/esri/themes/light/main.css";
import './index.css'

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
