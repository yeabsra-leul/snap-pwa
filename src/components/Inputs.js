function InputLine({ label, type, value, setter }) {
	return (
		<>
			<InputWrapper>
				<label className="input-name taskname-name">{label}</label>
			</InputWrapper>

			<InputWrapper>
				<input
					type={type}
					value={value}
					onChange={(e) => setter(e.target.value)}
				></input>
			</InputWrapper>
		</>
	);
}

export function InputWrapper({ children }) {
	return <div className="input-line">{children}</div>;
}

export function CheckBoxInputs({ label, value, options, setter}) {

    function handleSelect(newValue){
        console.log(value)
        
        value.push(newValue);
        
        let uniques = new Set(value);
        setter(Array.from(uniques));
    }

	return (
		<>
			<InputWrapper>
				<label className="input-name taskname-name">{label}</label>
			</InputWrapper>

			<InputWrapper>
                <select value={value} multiple={true} onChange={(e) => handleSelect(e.target.value)}>

				    {options.map((val, i) => <option value={val.toUpperCase()}>{val}</option>)}

                </select>
			</InputWrapper>
		</>
	);
}

export default InputLine;
