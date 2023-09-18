import { StatusBar, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#80B090',
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 700,
    },
    panel: {
        backgroundColor: '#DDDDDD',
        borderRadius: 15,
        margin: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 8,
        borderBottomWidth: 1,
        padding: 10,
        textAlign: 'center',
    },
    buttonArea: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 10,
        width: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    buttonDisabled: {
        backgroundColor: '#A0D0B0',
        padding: 10,
        borderRadius: 10,
        width: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    buttonTxt: {
        fontSize: 18,
        textAlign: 'center',
    },
    panelResult: {
        backgroundColor: '#C0C0C0',
        borderRadius: 15,
        margin: 10,
        padding: 5,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    result: {
        fontSize: 18,
        textAlign: 'center',
    },
})

export default styles;