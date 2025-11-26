import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './Api';

export default function useAuth() {
  const [user, setUser] = useState(null);

  const register = async (name: string, email: string, password: string, password_confirmation: string) => {
    const res = await api.post('/register', { 
      name, 
      email, 
      password, 
      password_confirmation 
    });
    
    await AsyncStorage.setItem('token', res.data.token);
    await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
    setUser(res.data.user);
  };

  const login = async (email: string, password: string) => {
    const res = await api.post('/login', { email, password });
    
    await AsyncStorage.setItem('token', res.data.token);
    await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
    setUser(res.data.user);
  };

  const getUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');

    const res = await api.get('/user');
    return res;
  };

  const logout = async () => {
    try {
      await api.post('/logout');
    } catch (error) {
      console.log('Erro no logout:', error);
    } finally {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      setUser(null);
    }
  };

  return { user, register, login, getUser, logout };
}