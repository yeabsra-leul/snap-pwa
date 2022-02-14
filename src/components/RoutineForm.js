import { useEffect, useState } from "react";
import { days } from "./utils";
import InputLine, { InputWrapper, SelectInputs } from "./Inputs";
import { Routine } from "../scheduler/Routine";
import { routineManager } from "../scheduler/RoutineManager";
import { useNavigate } from "react-router-dom";
import validate from "validate.js";

function validateRoutineForm(form) {
	const timeConstraint = {
		presence: true,
		format: /[0-2][0-4]:[0-6][0-9]/,
	};

	let constraint = {
		routineName: {
			presence: {
				allowEmpty: false,
			},

			length: {
				minimum: 5,
				maximum: 80,
			},
		},

		startTime: timeConstraint,
		endTime: timeConstraint,

		repeat: {
			presence: {
				allowEmpty: false,
			},
		},
	};

	return validate(form, constraint);
}

function RoutineForm() {
	const [inputErrs, setInputErrs] = useState({});

	const [routineName, setRoutineName] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [repeat, setReapt] = useState([]);

	const navigator = useNavigate();

	function saveRoutine() {
		const err = validateRoutineForm({
			routineName,
			startTime,
			endTime,
			repeat,
		});

		if (err) {
			setInputErrs(err);
			return;
		}

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
		navigator("/", { replace: true });
	}

	useEffect(() => {
		// save the current routine to the repository
		return () => routineManager.saveState();
	}, []);

	return (
		<>
			<InputLine
				label="Name"
				propName="routineName"
				type="text"
				value={routineName}
				setter={setRoutineName}
				error={inputErrs}
			/>

			<InputLine
				propName="startTime"
				label="Start time"
				type="time"
				value={startTime}
				setter={setStartTime}
				error={inputErrs}
			/>

			<InputLine
				propName={"endTime"}
				label="End time"
				type="time"
				error={inputErrs}
				value={endTime}
				setter={setEndTime}
			/>

			<SelectInputs
				value={repeat}
				options={days}
				propName={"repeat"}
				setter={setReapt}
				error={inputErrs}
				label="Repeats"
			/>

			<InputWrapper>
				<button
					type="button"
					onClick={saveRoutine}
				>
					Add Routine
				</button>
			</InputWrapper>
		</>
	);
}

export default RoutineForm;
