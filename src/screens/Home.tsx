import { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, FlatList, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles';
import axios from 'axios';

export function Home() {
    const [musicas, setMusicas] = useState<any[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [novaMusica, setNovaMusica] = useState({
        nome: '',
        duracao: '',
        compositor: '',
        estilo: ''
    });

    useEffect(() => {
        carregarMusicas();
    }, [])

    const carregarMusicas = () => {
        axios
            .get("http://127.0.0.1:8000/api/musicas")
            .then((res) => setMusicas(res.data))
            .catch((err) => console.error("Erro ao carregar músicas:", err))
    }

    const handleCadastrarMusica = () => {
        // Validação básica
        if (!novaMusica.nome || !novaMusica.duracao || !novaMusica.compositor || !novaMusica.estilo) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        axios
            .post("http://127.0.0.1:8000/api/musicas", novaMusica)
            .then((res) => {
                setModalVisible(false);
                setNovaMusica({ nome: '', duracao: '', compositor: '', estilo: '' });
                carregarMusicas();
                Alert.alert('Sucesso', 'Música cadastrada com sucesso!');
            })
            .catch((err) => {
                console.error("Erro ao cadastrar música:", err);
                Alert.alert('Erro', 'Não foi possível cadastrar a música');
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>🎵 Lista de Músicas</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Ionicons name="add-circle" size={30} style={{ color: "#6f0497ff" }} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={musicas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nome}>#{item.id}</Text>
                        <View style={{ flex: 1, justifyContent: "space-evenly", marginLeft: 10 }}>
                            <Text style={[styles.nome, { fontWeight: "bold" }]}>{item.nome}</Text>
                            <Text style={styles.nome}>{item.compositor}</Text>
                        </View>
                        <View>
                            <Text style={styles.nome}>{item.duracao}</Text>
                            <Text style={styles.estilo}>{item.estilo}</Text>     
                        </View>
                        <Ionicons name="play-circle" size={30} style={{marginLeft:10, color:"#6f0497ff"}} />
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Cadastrar Nova Música</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Nome da música"
                            placeholderTextColor="#999"
                            value={novaMusica.nome}
                            onChangeText={(text) => setNovaMusica({...novaMusica, nome: text})}
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Duração (ex: 03:45)"
                            placeholderTextColor="#999"
                            value={novaMusica.duracao}
                            onChangeText={(text) => setNovaMusica({...novaMusica, duracao: text})}
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Compositor"
                            placeholderTextColor="#999"
                            value={novaMusica.compositor}
                            onChangeText={(text) => setNovaMusica({...novaMusica, compositor: text})}
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Estilo musical (ex: Rock, Heavy Metal, Pop)"
                            placeholderTextColor="#999"
                            value={novaMusica.estilo}
                            onChangeText={(text) => setNovaMusica({...novaMusica, estilo: text})}
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity 
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={[styles.button, styles.saveButton]}
                                onPress={handleCadastrarMusica}
                            >
                                <Text style={styles.buttonText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}