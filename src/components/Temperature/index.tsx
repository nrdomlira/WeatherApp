import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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

export interface Region {
    location: string;
}

const Temperature: React.FC<Region> = ({ location }) => {
    const [weatherData, setWeatherData] = useState<WeatherApiResponse>({} as WeatherApiResponse);
    const [description, setDescription] = useState('');
    const [city, setCity] = useState(location);
    const [lasted, setLasted] = useState('');


    async function handlePrintTempOnScreen() {
        // getData();
        if (location != null) {
            return
        }
        try {
            //setDescription('')
            //setCity('')
            //console.log(children)
            //const response = await Axios.get(`${}+${city}&appid=${process.env.API_KEY}`)
           // const response = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=${city}&appid=2b22e1b036190ec14d524c376e02a1c6`)
           // setWeatherData(response.data);
            //console.log(response.data)
            setDescription(weatherData.weather[0].description)

            setLasted(location)
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        //console.log(location)
        /* if (lasted != null) {
            Axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=${location}&appid=2b22e1b036190ec14d524c376e02a1c6`).then(async response => {
                setWeatherData(response.data);
                //setDescription(weatherData.weather[0].description)

            })
        } */
        //handlePrintTempOnScreen();
        /* try {
            
            Axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=${city}&appid=2b22e1b036190ec14d524c376e02a1c6`).then(response => {
                setWeatherData(response.data);
                setDescription(weatherData.weather[0].description)
                console.log(weatherData);
            })

        } catch (error) {
            console.log(error);
        } */
        //console.log(weatherData)
    }, [location]);

    if (!weatherData.name) {
        return null
    }
    return (
        <View style={styles.displayTemp}>
            <Text style={styles.textCity}>{weatherData.name}</Text>
            <Text style={styles.textTemp}>{weatherData.main.temp.toFixed(1)}°C</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

export default Temperature;