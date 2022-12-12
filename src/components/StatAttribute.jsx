import React from "react";

export const StatAttribute = ({attribute, pokemon}) => <div className='stat-group'>
    <span>{attribute.key}</span>
    <div className='progress-bar'></div>
    <span className='counter-stat'>
                                            {pokemon.stats[attribute.value].base_stat}
                                        </span>
</div>;
