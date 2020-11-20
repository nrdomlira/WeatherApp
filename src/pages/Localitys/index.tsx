import React, { useEffect, useState } from 'react';
import { Alert, Text, TextInput, View, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Axios from 'axios';

interface Data {
    title: string;
    place: string;
}

interface LatLong {
    latitude: number;
    longitude: number;
    latitudeDelta?: number;
    longitudeDelta?: number;
}




const Localitys: React.FC<Data> = ({ title, place }) => {
    const [city, setCity] = useState(place);
    const [name, setName] = useState(title);
    const [initialPosition, setInitialPosition] = useState<LatLong>();
    const [coorde, setCoorde] = useState<LatLong>();



    async function store() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        let isExists

        /* const isExists = AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const existCity = JSON.parse(response);
                existCity.filter((f: any) => f.city == city)
                console.log(existCity)
            }      
        }) */

        //const isExists = favorites.filter((f: any) => f.city == city)
        //console.log(isExists)

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
            isExists = favoritesArray.filter((f: any) => f.city == city)
        }
        if (isExists != null && city != null) {
            AsyncStorage.getItem('favorites').then(response => {
                let filteredName;
                if (response) {
                    try {
                        const favoritedListNames = JSON.parse(response);
                        const filterName = favoritedListNames.filter((citySelect: any) => citySelect.city === city)
                        filteredName = filterName[0].name
                        console.log(filterName[0].name)
                    } catch (error) {
                        Alert.alert(`Porfavor verifique se digitou corretamente a cidade.`);
                    }
                }else if(name !== 'undefined' && name === null){console.log('hi')}
                /* if(name !== 'undefined' && name !== null) {
                    Alert.alert(`Opa! A cidade já favoritada como "${filteredName}".`);
                } */
            })

        } else {
            //console.log(city)
            //favoritesArray.push({ name, city });
            // await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray.reverse()));

        }

    }

    useEffect(() => {

        async function location() {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            /* const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION); */

            if (granted) {
                //console.log("You can use the ACCESS_FINE_LOCATION")
                await Geolocation.getCurrentPosition(
                    position => {
                        const { coords } = position;
                        const { latitude, longitude } = coords;
                        setCoorde({ latitude, longitude });
                        console.log(coorde)
                        setInitialPosition({ latitude, longitude, latitudeDelta: 0.04, longitudeDelta: 0.04 })
                    },
                    error => Alert.alert('Error', JSON.stringify(error)),
                    { enableHighAccuracy: true }
                );
            } else {
                //console.log("ACCESS_FINE_LOCATION permission denied")
            }


        }


        location()

    }, [])

    if (!initialPosition) {
        return null
    }

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 32 }}>
            <Text>Cidade</Text>
            <TextInput value={city} onChangeText={setCity}></TextInput>
            <Text>Nome</Text>
            <TextInput value={name} onChangeText={setName}></TextInput>
            <RectButton onPress={store}>
                <Text>Add</Text>
            </RectButton>
            <View>
                <MapView
                    style={{ width: 400, height: 360 }}
                    initialRegion={initialPosition}>
                    <Marker coordinate={initialPosition} draggable={true} onPress={() => { Geolocation.watchPosition(cd => console.log(cd)) }} />
                </MapView>

            </View>


        </View>
    );
}

export default Localitys;