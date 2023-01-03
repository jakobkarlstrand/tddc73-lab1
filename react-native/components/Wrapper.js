import React from 'react';
import {View} from 'react-native';
import Navbar from './Navbar';
import {COLORS} from './styles';

function Wrapper({children, title}) {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.MAIN,
      }}>
      <Navbar />
      {children}
    </View>
  );
}

export default Wrapper;
