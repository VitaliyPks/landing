import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { store } from './store/store';

import App from './App';

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('theme', state.theme.mode);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
