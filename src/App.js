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
            {/*<Hero lastUpdateTime={lastUpdateTime} />*/}
            {/*<div className="tabs is-centered">*/}
            {/*    <ul>*/}
            {/*        <li className={(currentTab===1) ? "is-active": ""}>*/}
            {/*            <a href="/" key={1} onClick={(e)=> {*/}
            {/*            e.preventDefault();*/}
            {/*            setCurrentTab(1);*/}
            {/*        }}>1</a></li>*/}
            {/*        <li className={(currentTab===2) ? "is-active": ""}>*/}
            {/*            <a href="/" key={2} onClick={(e)=> {*/}
            {/*                e.preventDefault();*/}
            {/*                setCurrentTab(2);*/}
            {/*            }}>2</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*{(currentTab === 1) ? <Dashboard mainRef={mainRef} /> : null}*/}
            {/*<Footer />*/}
            <div className="box">
                <h1 className="title has-text-centered">Demystifying Reproducibility in Meta- and Multi-Task Reinforcement Learning</h1>
                <p>Establishing the significance of experimental results in reinforcement learning (RL) is difficult.
                    This is compounded by the additional complexity of meta- and multi-task RL, a rapidly-growing
                    research area which lacks well-defined baselines. We analyze several design decisions each author
                    must make when they implement a meta-RL or MTRL algorithm, and show that these seemingly-small
                    details can create variations in a single algorithm's performance that exceed the reported
                    performance differences between algorithms themselves. Informed by this analysis, we precisely
                    define several important hyperparameters, design decisions, and evaluation metrics for meta-RL
                    and MTRL methods, so that we can compare these methods reproducibly. We then provide multi-seed
                    benchmark results for seven of the most popular meta-RL and MTRL algorithms on the most challenging
                    benchmarks currently available. Finally, we share with the community an open source package of these
                    algorithm reference implementations, which use our consistent definitions, achieve
                    state-of-the-art-performance, and seeks to follow the original works introducing these algorithms
                    as closely as possible.
                </p>
            </div>
        </div>
    );
}

export default App;
