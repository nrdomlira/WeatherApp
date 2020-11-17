import React, { useEffect, useState } from 'react';
import { Link, useFocusEffect, useNavigation } from '@react-navigation/native';
import { Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import Temperature from '../../components/Temperature';
import Localitys from '../Localitys';



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


  async function loadTemp(place: any) {
    await AsyncStorage.setItem('@LastedLoadLocation', place);
    setCity(place);

  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <Temperature location={city} />
      <RectButton style={styles.btnSearch} onPress={handleNavigateToLocalitys}><Text style={styles.buttonText}>Cidades</Text></RectButton>
      <View style={styles.favorites}>
        <Text>Favoritos</Text>

        {favorites.map((list: any) => {
          return (
            <RectButton key={list.city} onPress={() => { loadTemp(list.city) }}>
              <Text>{list.name}</Text>
            </RectButton>
          )
        })}
        <Link to='/Localitys' style={styles.linkIcon}><Icon style={styles.iconAdd} name={'plus-circle'} size={20}/></Link>

      </View>
    </View>
  );
}

export default Home;

