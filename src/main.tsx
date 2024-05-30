import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';

import pkg from '../package.json';

import App from './App.tsx';

console.log(`App: Tontune TMA | Version: ${pkg.version}`);

const manifestUrl = 'https://raw.githubusercontent.com/Tontune/tontune-telegram-web-app/master/manifest.json';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

WebApp.ready();
WebApp.expand();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider
    manifestUrl={manifestUrl}
    actionsConfiguration={{
      twaReturnUrl: 'https://t.me/TontuneBot',
    }}
    uiPreferences={{ theme: THEME.LIGHT }}
  >
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </TonConnectUIProvider>,
);
