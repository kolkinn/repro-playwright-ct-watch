import { useDemoState } from "./demo-hook";
import classes from "./demo.module.scss";
import logo from "./logo.svg";

const Demo = () => {
  const [count, incrementCounter] = useDemoState();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>
          <button type="button" onClick={() => incrementCounter()}>
            {`Count is: ${count}`}
          </button>
        </p>
      </header>
    </div>
  );
};

export default Demo;
