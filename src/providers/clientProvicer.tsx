'use client';

import { setupInterceptores } from '@/api/axios/interceptor';
import { persistor, store } from '@/store';
import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

type Props = {
  children: ReactNode;
};

const ClientProvider = ({ children }: Props) => {
  useEffect(() => {
    setupInterceptores();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ClientProvider;
