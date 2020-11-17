import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RectButton } from 'react-native-gesture-handler';

interface Data {
    title: string;
    place: string;
}

const Localitys: React.FC<Data> = ({ title, place }) => {
    const [city, setCity] = useState(place);
    const [name, setName] = useState(title);

    async function store() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];
        let favoritedListNames;

        const isExists = await AsyncStorage.getItem('favorites').then(response => {
            return response?.match(city)
        })

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }
        if (isExists != null && 'undefined') {
            await AsyncStorage.getItem('favorites').then(response => {
                if (response) {
                    const favoritedList = JSON.parse(response);
                    favoritedListNames = favoritedList.map((names: any) => {
                        return names.name;
                    })

                }
            })
            Alert.alert(`Opa!, lugar já adicionado como ${favoritedListNames}, porfavor escolha outra cidade.`);
        } else {
            favoritesArray.push({ name, city });
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

        }

    }

    return (
        <View>
            <TextInput value={city} onChangeText={setCity}></TextInput>
            <TextInput value={name} onChangeText={setName}></TextInput>
            <RectButton onPress={store}>
                <Text>Add</Text>
            </RectButton>
        </View>
    );
}

export default Localitys;