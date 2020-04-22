import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useState} from 'react';

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

  const setUser = (userId: string) => {
    setCurrentUser(userId);
    AsyncStorage.setItem('user', JSON.stringify(userId));
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
