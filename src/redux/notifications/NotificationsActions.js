import { TOGGLE_NOTIFICATIONS } from './NotificationsConstants';

export function toggleNotifications(payload) {
    return {
        type: TOGGLE_NOTIFICATIONS,
        payload
    }
    
}