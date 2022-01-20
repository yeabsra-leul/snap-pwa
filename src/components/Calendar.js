import classNames from "classnames";
import {useState} from "react";

function Calendar(){
    const days = ["Sunday", "monday", "tuesday", "wednesday", "thursday", "firday", "saturday"];

    const date = new Date()
    const [selected, setSelected] = useState(date.getDate());

    const dayWidgets = days.map( (day, i) => {
        let dayNo = date.getDate() + ( i - date.getDay())
        return (
            <Day 
                key={dayNo}
                dayNo={dayNo}
                week={day[0]}
                selected={selected}
                setSelected={setSelected}
            />
    )})

    return (
        <ul className="calendar flex jc-sb">                         
            {dayWidgets}                  
        </ul>
    )
}

function Day({dayNo, week, selected, setSelected}) {

    const clsName = classNames({
        "day": true, 
        "day--active": (dayNo == selected)
    })

    return (
        <li 
            className={clsName}
            onClick={() => setSelected(dayNo)}
        >
            <span className="day__number">{dayNo}</span>
            <span className="day__week">{week}</span>
        </li>
    )

}

export default Calendar;
