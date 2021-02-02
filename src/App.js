import React, { useState, useEffect } from 'react';
import LCC from 'lightning-container';
import './App.css';
import TerminalScreen from './TerminalScreen.js'

const App = () => {
    const [message, setMessage] = useState('');

    const messageRecievedHandler = msg => {
        const { name, value } = msg;
        console.log("Messaged received.");
        console.log(`Message name: ${name}`);
        console.log(`Message value: ${value}`);

        // Add Any Logic that should be handled here.
        setMessage(value);
    }

    useEffect( () => {
        LCC.addMessageHandler((message) => messageRecievedHandler(message));
    }, []);

    return (
        <div>
            <TerminalScreen text={message} />
        </div>
    );
};
export default App;
