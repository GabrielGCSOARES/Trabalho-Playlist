import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: "#3e3737ff" },
    center: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" },
    title: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginBottom: 12 },
    card: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        padding: 12, 
        marginBottom: 10,  
        borderBottomColor:"#fff",
        borderBottomWidth:1
    },
    nome: { 
        fontSize: 15, 
        color: "#fff" },
    estilo: { 
        fontStyle: "italic", 
        color: "#fff" },
});

export default styles;