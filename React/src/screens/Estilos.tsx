import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5, 
    width: '50%',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonDisabled: {
    backgroundColor: '#ccc'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  secondaryButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    width: '50%',
    alignSelf: 'center'
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontWeight: 'bold'
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default styles;