import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface WeatherApiResponse {
  main: {
    temp: Number;
    temp_min: Number;
    temp_max: Number;
  };
  name: string;
  weather: {
    description: string;
  }[];
}

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse>({} as WeatherApiResponse);
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const navitation = useNavigation();


  async function handlePrintTempOnScreen() {
    if (!city) {
      return
    }
    try {
      setDescription('')
      setCity('')
      //const response = await Axios.get(`${}+${city}&appid=${process.env.API_KEY}`)
      const response = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=${city}&appid=2b22e1b036190ec14d524c376e02a1c6`)
      setWeatherData(response.data);
      setDescription(weatherData.weather[0].description)
      console.log(weatherData);
    } catch (error) {
      console.log(error);
    }


  }

  function handleNavigateToLocalitys() {
    navitation.navigate('Localitys');
  }

  useEffect(() => {
    setCity('')
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=${'Recife'}&appid=2b22e1b036190ec14d524c376e02a1c6`).then(async response => {
      setWeatherData(response.data);
      setDescription(weatherData.weather[0].description);
    })
  }, []);

  if(!weatherData.name){
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayTemp}>
        <Text style={styles.textCity}>{weatherData.name}</Text>
        <Text style={styles.textTemp}>{weatherData.main.temp}°C
  {/* <View><Text> Max {weatherData.main.temp_max}</Text><Text>Min {weatherData.main.temp_min}</Text></View> */}
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TextInput style={styles.input} value={city} onChangeText={setCity} />
      <RectButton style={styles.btnSearch} onPress={handlePrintTempOnScreen}><Text style={styles.buttonText}>Cidades</Text></RectButton>
      <View style={styles.favorites}><Text>Aqui vai a Lista de Favoritos</Text></View>
    </View>
  );
}

export default Home;

