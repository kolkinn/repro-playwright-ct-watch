import { useState } from "react";

export const useDemoState = (): [number, VoidFunction] => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((count) => count + 2);
  return [counter, incrementCounter];
};
