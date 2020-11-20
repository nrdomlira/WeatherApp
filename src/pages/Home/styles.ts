import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#B0C4DE',
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
    linkIcon:{
        justifyContent: 'center',
        alignSelf: 'center',
    },
    iconAdd:{
        justifyContent: 'center',
    },
    reactButtonFav:{
        flexDirection:'row',
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        alignItems:'center',
        justifyContent: 'space-between'
    },
    cityName:{
        fontSize: 16,
        fontWeight: '700',

    }
});

export default styles;