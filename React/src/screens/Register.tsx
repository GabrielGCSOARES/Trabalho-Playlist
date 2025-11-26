import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import useAuth from '../api/UserAuth';
import styles from './Estilos';

export default function RegisterScreen({ navigation }: any) {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password, confirmPassword);
      navigation.replace('Home');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Erro ao registrar';
      Alert.alert('Erro', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      
      <TextInput 
        placeholder="Nome" 
        value={name} 
        onChangeText={setName} 
        style={styles.input} 
      />
      
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput 
        placeholder="Senha" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
        style={styles.input} 
      />
      
      <TextInput 
        placeholder="Confirme a senha" 
        secureTextEntry 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
        style={styles.input} 
      />
      
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'REGISTRANDO...' : 'REGISTRAR'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>VOLTAR AO LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}