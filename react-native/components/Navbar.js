import React from 'react';
import {Text, View} from 'react-native';

function Navbar({title}) {
  if (!title) {
    title = 'Example 1';
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: '#2D8576',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    top: 0,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    fontWeight: '500',
  },
};

export default Navbar;
