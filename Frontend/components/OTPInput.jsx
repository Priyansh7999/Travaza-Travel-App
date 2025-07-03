import React, { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
      {[0, 1, 2, 3].map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            width: 50,
            height: 50,
            textAlign: 'center',
            fontSize: 20,
          }}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          value={otp[index]}
        />
      ))}
    </View>
  );
};

export default OTPInput;
