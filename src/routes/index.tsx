import React from 'react';
import AppLoading from "expo-app-loading";
import { useAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

const Routes = () => {
  const { userId, loading } = useAuth();

  if (loading) {
    return <AppLoading />
  }

  return userId ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };