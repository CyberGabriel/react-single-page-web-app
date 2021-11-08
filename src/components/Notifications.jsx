import React from 'react'
import { ReactComponent as Remove} from '../assets/icons/close.svg';
import { ReactComponent as Check} from '../assets/icons/check.svg';
import './Notifications.css';
import { connect } from 'react-redux';

function Notifications(props) {

    let {showNotifications, message, notificationType} = props;
    
    return (
        <div 
        className="notifications" 
        id={ showNotifications ? "show" : "hide"}
        style={{backgroundColor: notificationType === "addProduct" ? "#00F593" : "#FF0033"}}
        >
            <div className="icon">
                {notificationType === "addProduct" ? <h1><Check /></h1> : <h1><Remove /></h1>}
            </div>
            <div className="message">
                {message}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        showNotifications: state.notifications.showNotifications,
        message: state.notifications.message,
        notificationType: state.notifications.notificationType
    }
}


export default connect(mapStateToProps)(Notifications);