import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: "#121212" },
    center: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" },
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
        color: "#fff" },
    estilo: { 
        fontStyle: "italic", 
        color: "#fff" },
});

export default styles;