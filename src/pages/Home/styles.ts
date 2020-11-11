import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#B0C4DE',
    },
    input: {
        backgroundColor: 'white'
    },
    displayTemp: {
        padding: 24,
        alignItems: 'center'
    },
    textCity: {
        fontSize: 40,
        fontWeight: '500',
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: -2, height: 5 },
        textShadowRadius: 15
    },
    textTemp: {
        marginBottom: 8,
        fontSize: 64,
        textShadowColor: 'rgba(0, 0, 0, 0.7)',
        textShadowOffset: { width: -2, height: 5 },
        textShadowRadius: 15
    },
    description:{
        fontSize: 24
    },
    btnSearch: {
        backgroundColor: '#F0F8FF',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
    },
    favorites: {
        marginTop: 32,
        alignSelf: 'center',
    },
});

export default styles;