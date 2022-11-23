import React from 'react';
import {View} from 'react-native';
import Button from './Button';

function ButtonGroup() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonBox}>
        <Button />
        <Button />
      </View>
      <View style={styles.buttonBox}>
        <Button />
        <Button />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    width: '70%',
  },
  buttonText: {
    color: 'black',
  },
  buttonBox: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 25,
  },
};

export default ButtonGroup;
