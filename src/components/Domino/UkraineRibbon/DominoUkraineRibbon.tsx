import './DominoUkraineRibbon.scss'

import {Component} from "solid-js";

const DominoUkraineRibbon: Component = () => {
    return(
        <div class="dc_domino_ukraine_ribbon">
            <a target="_blank" domino-tooltip>
                <div class="stripe1"></div>
                <div class="stripe2"></div>
            </a>
        </div>
    );
};

export default DominoUkraineRibbon;