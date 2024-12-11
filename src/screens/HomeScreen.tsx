import {ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import HomeHeader from '../components/home/HomeHeader';
import {commonStyles} from '../styles/commonStyles';
import SendReceiveButton from '../components/home/SendReceiveButton';
import Options from '../components/home/Options';
import Misc from '../components/home/Misc';

const HomeScreen: FC = () => {
  return (
    <View style={commonStyles.baseContainer}>
      <HomeHeader />

      <ScrollView
        contentContainerStyle={{paddingBottom: 100, padding: 15}}
        showsVerticalScrollIndicator={false}>
        <SendReceiveButton />

        <Options />

        <Misc />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
