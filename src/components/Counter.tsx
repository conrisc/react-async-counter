import { useEffect, useState } from "react";
import { getNumber } from "../api/getNumber";

function Counter(props: { seconds: number }) {
	const [counter, setCounter] = useState(0)

    useEffect(() => {
		let isMounted = true;

		getNumber(props.seconds)
			.then((number) => {
				if (isMounted) setCounter(currentNumber => currentNumber == 0 ? number : currentNumber)
			});

		return () => { isMounted = false; };
	}, []);

	function incr() {
		setCounter(counter + 1);
	}

	return <button onClick={incr}>{counter}</button>;
}

export default Counter;