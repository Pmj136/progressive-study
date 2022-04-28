import { createRoot } from "react-dom/client";
import App from "./App";
import 'antd/dist/antd.css';
import './tailwind.css';

const root = createRoot(document.getElementById('root')!);
root.render(<App />)
