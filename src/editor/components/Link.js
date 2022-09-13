import React from "react";

export default function Link({attributes, children, element}){
	return(
		<a className="text-indigo-400" href="www.google.com">
			{children}
		</a>
	)
}