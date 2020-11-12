import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    description: {
        fontSize: 24
    },
})

export default styles;