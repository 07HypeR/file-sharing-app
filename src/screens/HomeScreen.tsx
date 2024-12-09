import {View} from 'react-native';
import React, {FC} from 'react';
import HomeHeader from '../components/home/HomeHeader';
import {commonStyles} from '../styles/commonStyles';

const HomeScreen: FC = () => {
  return (
    <View style={commonStyles.baseContainer}>
      <HomeHeader />
    </View>
  );
};

export default HomeScreen;
