import './bootstrap';
import '../css/app.css';

import "primereact/resources/themes/lara-light-amber/theme.css";
import 'primeicons/primeicons.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import { CartProvider } from '@/Components/Shop/CartContext';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<CartProvider><PrimeReactProvider><App {...props} /></PrimeReactProvider></CartProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
