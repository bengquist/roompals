import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode';
import React, {createContext, useState} from 'react';
import {TokenData} from './types';

// eslint-disable-next-line no-spaced-func
export const AuthContext = createContext<{
  user: string | null;
  setUser: (userId: string) => void;
  removeUser: () => void;
  getUser: () => void;
}>({
  user: 'blake',
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
    AsyncStorage.setItem('user', token);
  };

  const removeUser = () => {
    setCurrentUser(null);
    AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{user: currentUser, setUser, removeUser, getUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
