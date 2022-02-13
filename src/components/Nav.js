import search from "../images/search.svg"
import add from "../images/add.svg";
import exit from "../images/exit.svg";
import humburger from "../images/humburger.svg";
import ImageButton from "./Buttons"
import { Link } from "react-router-dom";
import { days , months} from "./utils";

export default function Nav({title, showInput, setShowInput, utilities, children}) {

    const btnIcon = showInput ? search : exit;

    return (
        <div className="nav flex jc-sb">

            <div className="left-menu">
                <ImageButton
                    image={humburger}
                    alt={"menu"}
                    cls={"search-icon"}
                />

                <span>
                    {title}
                </span>
            </div>

            {utilities && !showInput && children}

            {utilities && 
                <ImageButton
                    image={btnIcon}
                    onClick={() => setShowInput(!showInput)}
                    alt={"Seach for a task"}
                    cls={"search or close search"}
                />
            }

        </div>
    )
}

export function UtilityNav() {
    const today = new Date()
    
    return (
        <div className="flex jc-sb">
            <section className="date-shower iflex g-1">
                <aside className="a-center h-3 ">
                    {today.getDate()}
                </aside>

                <section className="flex cur-date">
                    <span className="cur-date-desc">
                        {days[today.getDay()]}
                    </span>

                    <span className="cur-date-desc">
                        {months[today.getMonth()]} {today.getFullYear()}
                    </span>
                </section>

            </section>

            <section className="wrapper flex">

            <Link className="btn btn__img add-task" to="/task/new">
                <img src={add} alt="Add Task" /> 
                ADD
            </Link>
               
            </section>

        </div>
    )
}