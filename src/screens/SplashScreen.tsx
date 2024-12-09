import {View, Text} from 'react-native';
import React, {FC, useEffect} from 'react';
import {navigate} from '../utils/NavigationUtil';
import {commonStyles} from '../styles/commonStyles';
import {Image} from 'react-native';

const SplashScreen: FC = () => {
  const navigateToHome = () => {
    navigate('HomeScreen');
  };

  useEffect(() => {
    const timeoutId = setTimeout(navigateToHome, 1200);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={commonStyles.container}>
      <Image
        style={commonStyles.img}
        source={require('../assets/images/logo_text.png')}
      />
    </View>
  );
};

export default SplashScreen;
