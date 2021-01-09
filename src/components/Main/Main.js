import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import dats from './data.json';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Main() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('react');
    const loadData = [...dats];

      return (
        <div>
            
            hello {JSON.stringify(loadData[5])}
        </div>
    )
}

export default Main;