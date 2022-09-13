import {Transforms, Editor, Element} from "slate"


export function customize(editor) {
	const { insertBreak, insertSoftBreak, isInline } = editor

	editor.insertSoftBreak = () => {
		Transforms.insertText(editor, '\n')
	}

	editor.insertBreak = () => {
		const {selection} = editor
		const selected = editor.children[selection.anchor.path[0]];
		if(["bulleted-list", "numbered-list"].includes(selected.type)) return insertBreak();
		Transforms.insertNodes(editor, {type : "paragraph", children : [{text : ''}]})
	}

	editor.isInline = (element) => {
		return ["link"].includes(element.type) || isInline(element.type)
	}


	return editor
}