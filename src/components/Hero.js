import React from "react";

import 'bulma/css/bulma.min.css'
import './Hero.css'

function Hero(props) {
    //let commitHash = props.commitHash;
    let lastUpdate = props.lastUpdateTime;

    return (
        <section className="hero is-light">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Benchmarks
                    </h1>
                    <h2 className="subtitle">
                        {/*<span className="tag-item tag is-info">*/}
                        {/*    <span className="icon">*/}
                        {/*        <i className="fas fa-code-branch"/>*/}
                        {/*    </span>*/}
                        {/*    <span>*/}
                        {/*    From Commit: {commitHash}*/}
                        {/*    </span>*/}
                        {/*</span>*/}
                        <span className="tag-item tag is-success">
                                <span className="icon">
                                    <i className="fas fa-clock" />
                                </span>
                                <span>
                                Last Update: {lastUpdate}
                                </span>
                            </span>
                    </h2>
                </div>
            </div>
        </section>
    );

}

export default Hero;
