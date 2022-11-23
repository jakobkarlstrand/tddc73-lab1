import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

function Button({text, onPress}) {
  if (!text) {
    text = 'BUTTON';
  }

  const [isPress, setIsPress] = useState(false);
  var touchProps = {
    activeOpacity: 1,
    underlayColor: 'rgb(205,27,97)', // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {
      if (onPress) onPress();
    }, // <-- "onPress" is apparently required
  };
  return (
    <TouchableHighlight {...touchProps}>
      <Text style={{...styles.buttonText, color: isPress ? 'white' : 'black'}}>
        {text}
      </Text>
    </TouchableHighlight>
  );
}

const styles = {
  btnPress: {
    backgroundColor: '#D6D7D7',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  btnNormal: {
    backgroundColor: '#D6D7D7',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  buttonText: {
    color: 'black',
    fontWeight: '500',
  },
};

export default Button;
