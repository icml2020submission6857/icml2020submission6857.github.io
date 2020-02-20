import React, { useState } from 'react';

import EnvsDropdown from "./EnvsDropdown";
//import SelectionLevel from "./SelectionLevel";

import 'bulma/css/bulma.min.css'
import './Dashboard.css'
import ChartCanvas from "./ChartCanvas";

function Dashboard(props) {
    let mainRef = props.mainRef;
    let envs = mainRef['envs'];

    const [currentEnv, setCurrentEnv] = useState(envs[0]);

    let runs = mainRef['runs'].filter((item) => { return item['env'] === currentEnv });
    runs.forEach((item) => {
       item['data'] = require('../results/' + item['run_name'] + '.json');
    });

    return (
        <section className="dashboard">
            <div className="dashboard-control">
                <EnvsDropdown envs={envs} currentEnv={currentEnv} setCurrentEnv={setCurrentEnv} />
            </div>
            <ChartCanvas runs={runs} key={runs} />
        </section>
    );
}

export default Dashboard;
