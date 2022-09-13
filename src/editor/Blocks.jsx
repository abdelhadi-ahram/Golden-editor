import React from "react";
import {Editor, Transforms, Element as SlateElement} from "slate"
import {useSlate} from "slate-react"

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const isBlockActive = (editor, format, blockType = 'type') => {
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


const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format
  )
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) ,
    split: true,
  })

  let newProperties= {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }

  Transforms.setNodes(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

export default function BlockButton({icon, format}){
	const editor = useSlate()
	return (
		<button
			className={`bg-transparent ${isBlockActive(editor,format) ? "text-white" : "text-slate-400"}`}
			onClick={event => {
				event.preventDefault()
				toggleBlock(editor, format)
			}}
		>
			{icon}
		</button>
	)
}
