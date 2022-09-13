import {useSlate} from "slate-react"
import {Editor} from "slate"

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

export default function MarkButton({ format, icon }){
  const editor = useSlate()
  return (
    <button 
      className={`bg-transparent ${isMarkActive(editor, format) ? "text-white" : "text-slate-400"}`}
      onClick={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </button>
  )
}