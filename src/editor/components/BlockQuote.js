import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faQuoteLeft
	 } from '@fortawesome/free-solid-svg-icons'

import {ReactEditor, useSlate} from "slate-react"
import {Editor, Transforms, Element as SlateElement} from "slate"

export default function BlockQuote({ attributes, children, element }){
	/*const [quotee, setQuotee] = useState("hello")*/
	const editor = useSlate()
	return(
		<div className="bg-slate-600 p-2 text-mono shadow w-full my-1 rounded-md">
			<div className="" contentEditable={false}>
				<FontAwesomeIcon className="text-xl text-slate-400" icon={faQuoteLeft} />
			</div>
			<div className="p-2">{children}</div>
			<div className="flex items-center justify-end text-slate-300" contentEditable={false}>
				<input 
					type="text"
					value={element.quotee}
					className="bg-transparent focus:outline-none px-2 py-1 cursor-red-500" 
					placeholder={"quotee"} 
					onChange={(e) => {
						const path = ReactEditor.findPath(editor, element)
			            const newProperties={
			              quotee: e.target.value,
			              children
			            }
			            Transforms.setNodes(editor, newProperties, {
			              at: path,
			            })
					}}
					/>
			</div>
		</div>
	)
}