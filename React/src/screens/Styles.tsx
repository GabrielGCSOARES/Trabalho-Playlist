import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: "#121212" 
    },
    center: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    title: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 12,
        color: '#fff'
    },    
    card: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        padding: 12, 
        marginBottom: 10,  
        backgroundColor: "rgba(111, 111, 128, 0.85)", 
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 4 
    },
    nome: { 
        fontSize: 15, 
        color: "#fff" 
    },
    estilo: { 
        fontStyle: "italic", 
        color: "#fff" 
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: "#121212",
        padding: 20,
        borderRadius: 8,
        width: '80%',
        maxWidth: 400,
        borderWidth: 1,
        borderColor: "#333",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 5,
        padding: 12,
        marginBottom: 15,
        fontSize: 16,
        color: '#fff',
        backgroundColor: "rgba(111, 111, 128, 0.3)",
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        padding: 12,
        borderRadius: 5,
        minWidth: 100,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#666',
    },
    saveButton: {
        backgroundColor: '#6f0497ff',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;