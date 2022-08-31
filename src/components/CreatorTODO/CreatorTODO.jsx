import React from "react";
import classes from "./CreatorTODO.module.scss";

const CreatorTODO = ( {children, active, setActive }) => {
	return (
		<div
			className={
				active
					? `${classes.creator} ${classes.active}`
					: classes.creator
			}
			onClick={() => setActive(false)}
		>
			<div
				className={classes.creator__content}
				onClick={(e) => e.stopPropagation()}
			>
				<div className={classes.creator__title}>Новое TODO</div>
				{children}
			</div>
		</div>
	);
};

export default CreatorTODO;
