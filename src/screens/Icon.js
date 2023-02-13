import { View, Text, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import Torch from 'react-native-torch';

export default function Icon() {
  // const [isTorchON, setisTorchON] = useState(false);

  // const handlerTurnOnOFFTorch = () => {
  //   Torch.switchState(!isTorchON)
  //   setisTorchON(!isTorchON)
  // }

  return (
    // <TouchableOpacity 
    // onPress={handlerTurnOnOFFTorch}>
    <View>
      <Icons name="flash" size={25}></Icons>
    </View>
    // </TouchableOpacity>
  )
  }