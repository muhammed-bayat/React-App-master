import React from 'react';
import "./App.css"
function Hello({ name, message }) {



    return (<div className="sayHello">
        <h3> {name}</h3>
        <p>mesaj: {message}</p>
    </div>
    );
};



export default Hello;