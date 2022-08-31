import React from "react";
import classes from "./MyInput.module.scss";

const MyInput = React.forwardRef((props, ref) => {
	return <input {...props} ref={ref} className={classes.myInput} />;
});

export default MyInput;
