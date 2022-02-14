import { useEffect, useState } from "react";
import { days } from "./utils";
import InputLine, { InputWrapper, CheckBoxInputs } from "./Inputs";
import { Routine } from "../scheduler/Routine";
import { routineManager } from "../scheduler/RoutineManager";
import { useNavigate } from "react-router-dom";

function RoutineForm() {
	const [routineName, setRoutineName] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [repeat, setReapt] = useState([]);

    const navigator = useNavigate();

	function saveRoutine() {
        
        // change the time from 20:20 format to and integer
		let getInt = (time) => {
			let raw = time.split(":");
			return parseInt(raw[0]) * 60 + parseInt(raw[1]);
		};

        // create the routine Object from the form state
		let routine = new Routine(
			getInt(startTime),
			getInt(endTime),
			routineName,
			repeat
		);

        // add the new routine the routineManagers Cache
		routineManager.addRoutine(routine);

        // go to  the main page
        navigator('/', { replace: true })
	}

    useEffect(() =>{
        // save the current routine to the repository
        return () => routineManager.saveState()
    }, []);

	return (
		<>
			<InputLine
				label="Name"
				type="text"
				value={routineName}
				setter={setRoutineName}
			/>

			<InputLine
				label="Start time"
				type="time"
				value={startTime}
				setter={setStartTime}
			/>

			<InputLine
				label="End time"
				type="time"
				value={endTime}
				setter={setEndTime}
			/>

			<CheckBoxInputs
				value={repeat}
				options={days}
				setter={setReapt}
				label="Repeats"
			/>

			<InputWrapper>
				<button
					type="button"
					className="mt-4 btn btn__img add-routine"
					onClick={saveRoutine}
				>
					Add Routine
				</button>
			</InputWrapper>
		</>
	);
}

export default RoutineForm;
