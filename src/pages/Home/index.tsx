import React from 'react';
import { Link, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import Temperature from '../../components/Temperature';



const Home: React.FC = () => {  
  const navitation = useNavigation();  

  function handleNavigateToLocalitys() {
    navitation.navigate('Localitys');
  }

 

  return (
    <View style={styles.container}>
      <Temperature />
      <RectButton style={styles.btnSearch} onPress={handleNavigateToLocalitys}><Text style={styles.buttonText}>Cidades</Text></RectButton>
      <View style={styles.favorites}>
        <Text>Aqui vai a Lista de Favoritos</Text>
        
        </View>
    </View>
  );
}

export default Home;

