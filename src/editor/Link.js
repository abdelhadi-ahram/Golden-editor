import {Transforms, Range} from "slate"
import {isInlineActive, unwrapInline} from "./Inlines"

export const insertLink = (editor, link) => {
	wrapLink(editor, link)
}

const wrapLink = (editor, url) => {
	if(isInlineActive(editor, "link")) return unwrapInline(editor, "link");

	const {selection} = editor 
	const isCollapsed = selection && Range.isCollapsed(selection)

	const link = {
		type : "link",
		url : url,
		children : [{text : url}]
	}

	Transforms.insertNodes(editor, link)
}
