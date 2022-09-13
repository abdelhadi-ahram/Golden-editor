import React from "react";
import {Editor, Transforms, Element as SlateElement} from "slate"
import {useSlate} from "slate-react"
import {insertLink} from "./Link"

const LIST_TYPES = ['numbered-list', 'bulleted-list']

export const unwrapInline = (editor, format) => {
	Transforms.unwrapNodes(editor, {
		match: n => 
			!Editor.isEditor(n) && 
			SlateElement.isElement(n) && 
			n.type === format
	})
}

export const isInlineActive = (editor, format, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  )

  return !!match
}

function insertInline(editor, format) {
	switch(format) {
		case "link":
			return insertLink(editor, "www.google.com")
		default :
			return ; 
	}
}

export default function InlineButton({icon, format}){
	const editor = useSlate()
	return (
		<button
			className={`bg-transparent ${isInlineActive(editor,format) ? "text-white" : "text-slate-400"}`}
			onClick={event => {
				event.preventDefault()
				insertInline(editor, format)
			}}
		>
			{icon}
		</button>
	)
}
