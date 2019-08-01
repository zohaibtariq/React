import React from 'react';
const Season = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div id="season-project" className={`display-season ${season}`}>
            <i className={`icon-top-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-bottom-right massive ${iconName} icon`}></i>
        </div>
    )
}
const seasonConfig = {
    summer: {
        text:       'Let\'s hit the beach',
        iconName:   'sun'
    },
    winter: {
        text:       'Burr it\'s chilly',
        iconName:   'snowflake'
    }
}
const getSeason = (latitude, month) => {
    if(month > 2 && month < 9)
        return latitude > 0 ? 'summer' : 'winter'
    else
        return latitude > 0 ? 'winter' : 'summer'
}
export default Season;