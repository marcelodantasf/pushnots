import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

 export default async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export async function GetFCMToken(){
    let fcmtoken=AsyncStorage.getItem("fcmtoken");
    console.log(fcmtoken,"old token");
    if(!fcmtoken) {
        try{
            const fcmtoken= await messaging().getToken();
            if(fcmtoken){
                console.log(fcmtoken,"new token");
                await AsyncStorage.setItem("fcmtoken",fcmtoken);
            }
        } catch(error) {
            console.log(error,"error in fcmtoken");
        }
    }
}