import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getWeather } from '../services/weatherService';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const data = await getWeather(city);
    setWeather(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Time</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={fetchWeather} />
      {weather && (
        <View style={styles.result}>
          <Text>{weather.name}, {weather.sys.country}</Text>
          <Text>{weather.main.temp}°C</Text>
          <Text>{weather.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold' },
    input: { borderBottomWidth: 1, width: '80%', marginBottom: 10 },
    result: { marginTop: 20, alignItems: 'center' },
});

export default HomeScreen;
