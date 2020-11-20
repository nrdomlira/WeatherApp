import React, { useState } from 'react';
import { Link, useFocusEffect } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import Temperature from '../../components/Temperature';



const Home: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  const [city, setCity] = useState('');


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favorited = JSON.parse(response);
        //console.log(a)
        setFavorites(favorited);
      }
    });
  }


  async function loadTemp(place: any) {
    await AsyncStorage.setItem('@LastedLoadLocation', place);
    setCity(place);

  }

  function remove(key: any) {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favorited = JSON.parse(response);
        const filtered = favorited.filter((filte: any) => filte.city != key)

        AsyncStorage.setItem('favorites', JSON.stringify(filtered));
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [favorites])
  )

  return (
    <View style={styles.container}>
      <Icon name='star' size={16} style={{ color: 'black' }} />
      <Temperature location={city} />
      <Text style={styles.favorites}>Favoritos</Text>
      <ScrollView>
        {favorites.map((list: any) => {
          return (
            <RectButton key={list.city} onPress={() => { loadTemp(list.city) }} style={styles.reactButtonFav}>
              <Text style={styles.cityName}>{list.name}</Text>
              <TouchableOpacity onPress={() => { remove(list.city) }}><Icon style={{ alignSelf: 'center' }} name='more-vertical' /></TouchableOpacity>
            </RectButton>
          )
        })}
        <Link to='/Localitys' style={styles.linkIcon}><Icon style={styles.iconAdd} name={'plus-circle'} size={20} /></Link>
      </ScrollView>
    </View>
  );
}

export default Home;

