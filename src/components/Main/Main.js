import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Main() {
    const [data, setData] = useState([]);
    

      return (
        <div>
            
            hello {JSON.stringify("Hello")}
        </div>
    )
}

export default Main;