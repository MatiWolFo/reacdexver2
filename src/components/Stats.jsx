import {StatAttribute} from "./StatAttribute";
import React from "react";

const attributes = [
    {key: "HP", value: 0},
    {key: "ATK", value: 1},
    {key: "DEF", value: 2},
    {key: "SP", value: 3},
    {key: "SP", value: 4},
    {key: "SPD", value: 5},
]
export const Stats = ({pokemon}) => <div className='container-stats'>
    <h1>STATS BASE</h1>
    <div className='stats'>
        {attributes.map(attribute => <StatAttribute attribute={attribute} pokemon={pokemon}/>)}
    </div>
</div>;
