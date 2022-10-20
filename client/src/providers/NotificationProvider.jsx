import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import PopupModal from '../components/PopupModal';

const NotificationCtx = createContext();

export const useNotification = () => useContext(NotificationCtx).setNotif;

const NotificationProvider = ({ children }) => {
    const [notif, setNotif] = useState({});
    
    return (
        <NotificationCtx.Provider value={{setNotif}}>
        {children}
        <PopupModal
        content={notif}
        />
        </NotificationCtx.Provider>
    )
};

export default NotificationProvider;