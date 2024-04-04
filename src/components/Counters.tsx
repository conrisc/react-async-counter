import { memo } from "react";
import Counter from "./Counter";

const Counters = memo(function Counters(props: { numbers: number[], startId: number }) {
  return <>
    {props.numbers.map((it, index) =>
      <Counter key={`${props.startId}|${index}`} seconds={it} />
    )}
  </>;
});

export default Counters;
