const initialState = {
    showNotifications: false,
    message: "",
    notificationType: ""
}

export function notificationsReducer(state = initialState, action) {
    switch (action.type) {

        case 'TOGGLE_NOTIFICATIONS':
            return Object.assign({}, state, action.payload)

        default:
            return state;
    }
}