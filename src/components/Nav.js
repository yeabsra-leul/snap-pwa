import search from "../images/search.svg"
import add from "../images/add.svg";
import humburger from "../images/humburger.svg";
import ImageButton from "./Buttons"
import { Link } from "react-router-dom";

export default function Nav({title, utilities}) {
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

            {
                utilities && 
                    <ImageButton
                        image={search}
                        alt={"Seach for a task"}
                        cls={"search-icon"}
                    />
            }

        </div>
    )
}

export function UtilityNav() {
    return (
        <div className="flex jc-sb">
            <section className="date-shower iflex g-1">
                <aside className="a-center h-3 ">
                    24
                </aside>

                <section className="flex cur-date">
                    <span className="cur-date-desc">
                        wed
                    </span>

                    <span className="cur-date-desc">
                        Jan 2020
                    </span>
                </section>

            </section>

            <section className="wrapper flex">

            <Link className="btn btn__img add-task" to="/task">
                <img src={add} alt="Add Task" /> 
                ADD
            </Link>
               
            </section>

        </div>
    )
}