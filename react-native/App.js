import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonGroup from './components/ButtonGroup';
import InputField from './components/InputField';
import Wrapper from './components/Wrapper';

export default function App() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={{marginBottom: 50}}>
          <Image
            style={styles.image}
            source={require('./images/astronaut.jpeg')}
          />
        </View>
        <ButtonGroup />
        <InputField />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: '30%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 2000,
  },
});
