import * as Permissions from 'expo-permissions';
import * as Notifications from  'expo-notifications';


async function registerForPushNotificationsAsync(){
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalstatus = status;

    if (status !== 'granted'){
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalstatus = status;
    }
    if (finalstatus !== 'granted'){
        return;
    }

    let token = await Notifications.getExpoPushTokenAsync();

    console.log(status, token);

}return token;

export default function Notifier(){
   token = registerForPushNotificationsAsync();
}


{/*        THIS IS HOW WE HAVE TO "SEND" A NOTIFICATION IN CODE
export function SendNotification(token,title,body,sound,priority){
    const request = {
        to: token, // ExpoPushToken
        //data?: ,// JSON object 
        title?: "NotificationsTitle", //string 
        body?: "NotificationBody", //string
        sound?: 'default', // null,
        //ttl?: , //number, try again cada ttl? segundos
        //expiration?: ,//number, tiempo en segundos para expirar
        priority?: 'default' // 'normal | 'high',
        //badge?: , //number,
    }
}
*/}