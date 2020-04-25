import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode';
import React, {createContext, useState} from 'react';
import {removeAccessToken, setAccessToken} from './accessToken';
import {TokenData} from './types';

export const AuthContext = createContext<{
  user: string | null;
  setUser: (userId: string) => void;
  removeUser: () => void;
  getUser: () => void;
}>({
  user: '',
  setUser: () => {},
  removeUser: () => {},
  getUser: () => {},
});

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const getUser = async () => {
    const userId = currentUser || (await AsyncStorage.getItem('user'));

    if (userId) {
      setCurrentUser(userId);
    }
  };

  const setUser = (token: string) => {
    const {userId} = jwtDecode<TokenData>(token);

    setCurrentUser(userId);
    setAccessToken(token);
  };

  const removeUser = () => {
    setCurrentUser(null);
    removeAccessToken();
  };

  return (
    <AuthContext.Provider
      value={{user: currentUser, setUser, removeUser, getUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
