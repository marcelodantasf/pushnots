import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import requestUserPermission from './src/utils/pushnotifications_helper';
import { GetFCMToken, NotificationListner } from './src/utils/pushnotifications_helper';


const App = () => {

  useEffect(() =>{
    requestUserPermission();
    GetFCMToken();
    NotificationListner();
  },[])

  return (
    <View style={style.container}>
      <Text style={style.text_bold}>Push Notifications</Text>
    </View>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_bold: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black'
  }
})

export default App;
