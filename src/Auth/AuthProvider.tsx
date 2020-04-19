import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useState} from 'react';

// eslint-disable-next-line no-spaced-func
export const AuthContext = createContext<{
  user: string | null;
  login: (userId: string) => void;
  logout: () => void;
  getUser: () => void;
}>({
  user: 'blake',
  login: () => {},
  logout: () => {},
  getUser: () => {},
});

interface AuthProviderProps {}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<string | null>(null);

  const getUser = async () => {
    const userId = user || (await AsyncStorage.getItem('user'));

    if (userId) {
      setUser(userId);
    }
  };

  const login = (userId: string) => {
    setUser(userId);
    AsyncStorage.setItem('user', JSON.stringify(userId));
  };

  const logout = () => {
    setUser(null);
    AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{user, login, logout, getUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
