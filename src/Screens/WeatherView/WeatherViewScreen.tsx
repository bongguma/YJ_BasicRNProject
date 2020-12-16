import React, {useEffect, useState} from 'react';
import {FlatList, Alert, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SplashScreen from 'react-native-splash-screen';

import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #EEE;
`;

const WeatherContainer = Styled(FlatList)``;

const LoadingView = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const Loading = Styled.ActivityIndicator`
    margin-bottom: 16px;
`;
const LoadingLabel = Styled.Text`
  font-size: 16px;
`;

const WeatherItemContainer = Styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Weather = Styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
`;
const Temperature = Styled.Text`
  font-size: 16px;
`;

interface Props {}

const API_KEY = '971646f3a4af7308a4ac102f9e0317f4';

// Weather API 이용
interface IWeather {
  temperature?: number;
  weather?: string;
  isLoading: boolean;
}
const WeatherView = ({}: Props) => {
  const [weatherInfo, setWeatherInfo] = useState<IWeather>({
    temperature: undefined,
    weather: undefined,
    isLoading: false,
  });

  const getCurrentWeather = () => {
    setWeatherInfo({
      isLoading: false,
    });
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`,
        )
          .then(response => response.json())
          .then(json => {
            setWeatherInfo({
              temperature: json.main.temp,
              weather: json.weather[0].main,
              isLoading: true,
            });
          })
          .catch(error => {
            setWeatherInfo({
              isLoading: true,
            });
            showError('날씨 정보를 가져오는데 실패하였습니다.');
          });
      },
      error => {
        setWeatherInfo({
          isLoading: true,
        });
        showError('위치 정보를 가져오는데 실패하였습니다.');
      },
    );
  };

  const showError = (message: string): void => {
    setTimeout(() => {
      Alert.alert(message);
    }, 500);
  };

  // 위치 권한 퍼미션 로직
  async function requestPermission() {
    try {
        if (Platform.OS === "ios") {
               return await Geolocation.requestAuthorization("always"); 
        } 
    } catch (e) { 
        console.log(e); 
    } 
}


  useEffect(() => {

    SplashScreen.hide();
    //위치권한 퍼미션 
    requestPermission()
        .then(result => { 
            if (result === "granted") {
                 Geolocation.getCurrentPosition( pos => {
                    getCurrentWeather();
                }, error => { 
                console.log(error); }, {
                        enableHighAccuracy: true, timeout: 3600, maximumAge: 3600, 
                    },
                );
            } 
        });


  }, []);

  let data = [];
  const {isLoading, weather, temperature} = weatherInfo;
  if (weather && temperature) {
    data.push(weatherInfo);
  }

  return (
    <Container>
      <WeatherContainer
        onRefresh={() => getCurrentWeather()}
        refreshing={!isLoading}
        data={data}
        keyExtractor={(item, index) => {
          return `Weather-${index}`;
        }}
        ListEmptyComponent={
          <LoadingView>
            <Loading size="large" color="#1976D2" />
            <LoadingLabel>Loading...</LoadingLabel>
          </LoadingView>
        }
        renderItem={({item, index}) => (
          <WeatherItemContainer>
            <Weather>{(item as IWeather).weather}</Weather>
            <Temperature>({(item as IWeather).temperature}°C)</Temperature>
          </WeatherItemContainer>
        )}
        contentContainerStyle={{flex: 1}}
      />
    </Container>
  );
};

export default WeatherView;