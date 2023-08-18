import './MajHero.scss';

import {Component, Show} from "solid-js";

const MajHero: Component<{ header: string, description?: string }> = (props) => {
    return(
        <div class="hero">
            <div class="text">
                <h1 >{props.header}</h1>
                <Show when={props.description != undefined}>
                    <p>{props.description}</p>
                </Show>
            </div>
        </div>
    );
};

export default MajHero;