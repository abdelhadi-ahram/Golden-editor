import React from "react";


export default function Toolbar({children}){
	return(
		<div className="flex items-center justify-between bg-slate-600 px-4 py-1.5">
			{children}
		</div>
	)
}