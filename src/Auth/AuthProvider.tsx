import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext<{
  accessToken?: string;
  setUser: (userId: string) => void;
}>({
  accessToken: '',
  setUser: () => {},
});

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        setUser(token);
      }
    })();
  }, []);

  const setUser = async (token: string) => {
    await AsyncStorage.setItem('token', token);
    setAccessToken(token);
  };

  return (
    <AuthContext.Provider value={{accessToken, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
