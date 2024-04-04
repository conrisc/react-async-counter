import { useEffect, useState } from "react"
import { getNumber } from "../api/getNumber";

function Counter(props: { seconds: number }) {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		getNumber(props.seconds)
			.then((number) => {
				setCounter(currentNumber => currentNumber == 0 ? number : currentNumber)
			})
	}, []);

	function incr() {
		setCounter(counter + 1);
	}

	return <button onClick={incr}>{counter}</button>
}

export default Counter;