import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

interface AuthState {
  token: string;
  userId: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  userId: string;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

type Props = {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: Props) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const [token, user] = await AsyncStorage.multiGet([
        '@meEmpresta:token',
        '@meEmpresta:user',
      ]);

      if (user[1] && token[1]) {
        setData({ token: token[1], userId: user[1] });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password,
    });

    const { userId, token } = response.data;

    await AsyncStorage.multiSet([
      ['@meEmpresta:token', token],
      ['@meEmpresta:user', userId],
    ]);

    setData({
      token,
      userId,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@meEmpresta:token', '@meEmpresta:user']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ userId: data.userId, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}