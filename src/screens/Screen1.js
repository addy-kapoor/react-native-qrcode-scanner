import { View, Text, StyleSheet, TouchableOpacity,Dimensions, Linking} from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';



export default function Screen1() {
  const onSuccess = (e) =>{
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
    // alert('done');
    // console.log(e);
  }

return (
      <QRCodeScanner
      onRead={(e) => onSuccess(e)}
        // onRead={this.onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
  
//   return (
//     <View style={{ flex: 1}}>
//       {/* <RNCamera style={{  ...StyleSheet.absoluteFill }} captureAudio={false}/>
      
//       <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
//           <View style={{ width: width/2,height: width/2, }}> */}
//               <QRCodeScanner
//         cameraContainerStyle={{ width: 275, heiht:800, borderWidth: 1, borderColor: 'white', alignSelf: 'center',borderRadius: 10, }} 
//         cameraStyle={{ width: '97%', alignSelf: 'center', }}
//           onRead={(e) => onSuccess(e)}
//           // flashMode={RNCamera.Constants.FlashMode.torch}
//         />
//               {/* <View style={{ flex: 1,flexDirection: 'row'}}>
//                     <View style={{ flex: 1, ...leftTop}} />
//                     <View style={{ flex: 1}} />
//                     <View style={{ flex: 1, ...rightTop}} />
//               </View>
//               <View style={{ flex: 1}} />
//               <View style={{ flex: 1,flexDirection: 'row'}}>
//                     <View style={{ flex: 1, ...leftBottom}} />
//                     <View style={{ flex: 1}} />
//                     <View style={{ flex: 1, ...righttBottom}} />
//               </View>
//           </View>
//       </View> */}
//     </View>
//   )
// }

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
