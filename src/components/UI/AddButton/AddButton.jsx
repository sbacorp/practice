import React from 'react'
import classes from "./AddButton.module.scss"

const AddButton = ({children,active,...props}) => {
	return (
		<button
			{...props}
			
			className={
				active ? `${classes.button} ${classes.active}` : classes.button
			}
		>
			+{children}
		</button>
	);
};

export default AddButton