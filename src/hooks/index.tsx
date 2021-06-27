import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';

type Props = {
  children: ReactNode;
}

const AppProvider = ({ children }: Props ) => (
  <AuthProvider>{children}</AuthProvider>
);

export { AppProvider };