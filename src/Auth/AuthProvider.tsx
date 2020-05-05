import jwtDecode from 'jwt-decode';
import React, {createContext, useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';
import {TokenData} from './types';

export const AuthContext = createContext<{
  currentUser: string | null;
  currentToken: string | null;
  setUser: (userId: string) => void;
  removeUser: () => void;
  getUser: () => void;
}>({
  currentUser: '',
  currentToken: '',
  setUser: () => {},
  removeUser: () => {},
  getUser: () => {},
});

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [currentToken, setCurrentToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        const {userId} = jwtDecode<TokenData>(token);

        setCurrentUser(userId);
        setCurrentToken(token);
      }
    })();
  }, []);

  const getUser = async () => {
    const token = await AsyncStorage.getItem('token');

    return currentUser || token;
  };

  const setUser = async (token: string) => {
    const {userId} = jwtDecode<TokenData>(token);

    console.log('setUser: ', token);

    await AsyncStorage.setItem('token', token);
    setCurrentUser(userId);
    setCurrentToken(token);
  };

  const removeUser = async () => {
    await AsyncStorage.removeItem('token');
    setCurrentUser(null);
    setCurrentToken(null);
  };

  return (
    <AuthContext.Provider
      value={{currentUser, currentToken, setUser, removeUser, getUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
