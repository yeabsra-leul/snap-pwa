import search from "../images/search.svg"
import add from "../images/add.svg"
import ImageButton from "./Buttons"

export default function Nav() {
    return (
        <div className="nav flex jc-sb">
            <div></div>

            <ImageButton
                image={search}
                alt={"Seach for a task"}
            />

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

                <ImageButton image={add} cls={"add-task"} alt={"add task"} >
                    ADD
                </ImageButton>
               
            </section>

        </div>
    )
}