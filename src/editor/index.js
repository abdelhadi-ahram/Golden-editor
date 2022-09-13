import React, {useCallback, useMemo} from "react";
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from 'slate'
import { withHistory } from 'slate-history'
import {customize} from "./customize"

import Element from "./Element"
import Leaf from "./Leaf"

import Toolbar from "./Toolbar"
import MarkButton from "./Marks"
import InlineButton from "./Inlines"
import BlockButton from "./Blocks"
import {icons} from "./icons"

const MARK_BUTTONS = ["bold", "italic", "stroke", "code"]
const INLINE_BUTTONS = ["link"]
const BLOCK_BUTTONS = ["quote", "bulleted-list", "numbered-list", "video", "image"]

const SOFT_BREAK_BLOCKS = ["quote"]

const initialValue = [
	{
		type: 'paragraph',
		children: [
		{
		text:
			"Since it's rich text, you can do things like turn a selection of text ",
		},
		{ text: 'bold', bold: true },
		{
		text:
			', or add a semantically rendered block quote in the middle of the page, like this:',
		},
		],
	}
]

export default function COMPONENT(){
	const renderElement = useCallback(props => <Element {...props} />, [])
	const renderLeaf = useCallback(props => <Leaf {...props} />, [])
	const editor = useMemo(() => customize(withHistory(withReact(createEditor()))), [])
	
	return(
		<Slate editor={editor} value={initialValue}>
			<Toolbar>
				<div className="flex items-center space-x-4">
					{MARK_BUTTONS.map((btn, index) => <MarkButton key={index} icon={icons[btn]} format={btn} />)}
					{INLINE_BUTTONS.map((btn, index) => <InlineButton key={index} icon={icons[btn]} format={btn} />)}
					{BLOCK_BUTTONS.map((btn, index) => <BlockButton key={index} icon={icons[btn]} format={btn} />)}
				</div>
			</Toolbar>
			<Editable
				className="p-5 text-white"
				renderElement={renderElement}
				renderLeaf={renderLeaf}
				placeholder="Start typing..."
				spellCheck
				autoFocus
				/>
		</Slate>
	)
}
