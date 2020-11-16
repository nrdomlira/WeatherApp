import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import Temperature from '../../components/Temperature';



const Home: React.FC = () => {
  const navitation = useNavigation();
  const [favorites, setFavorites] = useState([]);
  const [city, setCity] = useState('');

  function handleNavigateToLocalitys() {
    navitation.navigate('Localitys');
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favorited = JSON.parse(response);
        setFavorites(favorited);
      }
    });
  }

  async function loadTemp() {
    let favoritedListNames;
    await AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedList = JSON.parse(response);
        console.log(city)
        favoritedListNames = favoritedList.map(a => a.city == city)
        console.log(favoritedListNames)
      }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )
  /* 
    useEffect(() => {
    }, [city]) */

  return (
    <View style={styles.container}>
      <Temperature location={'recife'} />
      <RectButton style={styles.btnSearch} onPress={handleNavigateToLocalitys}><Text style={styles.buttonText}>Cidades</Text></RectButton>
      <View style={styles.favorites}>
        <Text>Aqui vai a Lista de Favoritos</Text>

        {favorites.map((list: any) => {
          return (
            <RectButton key={list.city} onPress={loadTemp}>
              <Text>{list.name}</Text>
            </RectButton>
          )
        })}
      </View>
    </View>
  );
}

export default Home;

