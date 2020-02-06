import React, { useState } from 'react';

import 'bulma/css/bulma.min.css'
import './App.css'

import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

import mainRef from './results/result.json'

function App() {
    const [currentTab, setCurrentTab] = useState(1);
    //let commitHash = jsonData['githash'].substring(0, 7);
    let lastUpdateTime = mainRef['timestamp'];
    return (
        <div>
            <Hero lastUpdateTime={lastUpdateTime} />
            <div className="tabs is-centered">
                <ul>
                    <li className={(currentTab===1) ? "is-active": ""}>
                        <a href="/" key={1} onClick={(e)=> {
                        e.preventDefault();
                        setCurrentTab(1);
                    }}>1</a></li>
                    <li className={(currentTab===2) ? "is-active": ""}>
                        <a href="/" key={2} onClick={(e)=> {
                            e.preventDefault();
                            setCurrentTab(2);
                        }}>2</a></li>
                </ul>
            </div>
            {(currentTab === 1) ? <Dashboard mainRef={mainRef} /> : null}
            <Footer />
        </div>
    );
}

export default App;
