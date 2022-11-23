import React from 'react';
import {Text, TextInput, View} from 'react-native';

function InputField() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput selectionColor={'rgb(205,27,97)'} style={styles.input} />
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(205,27,97)',
    width: 220,
    fontSize: 20,
  },
  text: {
    marginRight: 60,
    color: 'gray',
  },
};

export default InputField;
