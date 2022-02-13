import { useRef, useEffect } from "react";

function SearchInput({ searchTerm, showInput, setSearchTerm }) {
	const inputField = useRef(null);

    // focus the input field when showInput when search button is pressed.
	useEffect(() => {
		if (!showInput) inputField?.current.focus();
	}, [showInput]);

	return (
		<input
			type="text"
			className="search-input"
			ref={inputField}
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
		/>
	);
}

export default SearchInput;
