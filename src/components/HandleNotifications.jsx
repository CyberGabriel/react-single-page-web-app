import store from "../redux/store";

 export default function handleNotifications (notification) {
    store.dispatch({
        type: 'TOGGLE_NOTIFICATIONS',
        payload: {
            showNotifications: true,
            message: notification.message,
            notificationType: notification.type
        }
    })
    setTimeout(() =>  {
        store.dispatch({
            type: 'TOGGLE_NOTIFICATIONS',
            payload: {
                showNotifications: false,
                message: "",
                notificationType: ""
            }
        })
    }, 2000)
}
