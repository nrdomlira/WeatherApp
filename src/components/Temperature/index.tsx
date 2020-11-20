import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

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

export interface Region {
    location: string;
}

const Temperature: React.FC<Region> = ({ location }) => {
    const [weatherData, setWeatherData] = useState<WeatherApiResponse>({} as WeatherApiResponse);
    const [description, setDescription] = useState('');
    const [city, setCity] = useState(location);

    useEffect(() => {
        async function getLasted() {
            const _lastLocation: any = await AsyncStorage.getItem('@LastedLoadLocation')
            const response = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=${_lastLocation}&appid=2b22e1b036190ec14d524c376e02a1c6`)

            setWeatherData(response.data);
            //console.log(_lastLocation);           
        }
        getLasted()

    }, [location]);

    if (!weatherData.name) {
        return (<ActivityIndicator size="large" />)
    }
    return (
        <View style={styles.displayTemp}>
            <Text style={styles.textCity}>{weatherData.name}</Text>
            <Text style={styles.textTemp}>{weatherData.main.temp.toFixed(1)}°C</Text>
            <Text style={styles.description}>{weatherData.weather[0].description}</Text>
        </View>
    );
}

export default Temperature;