import React from "react";
import {BlockQuote, Link} from "./components"

export default function Element(props){
	const { attributes, children, element } = props
	switch (element.type) {
	    case 'quote':
	      return (
	        <BlockQuote {...props} >
	          {children}
	        </BlockQuote>
	      )
	    case 'list-item':
	      return (
	        <li {...attributes}>
	          {children}
	        </li>
	      )
	    case 'numbered-list':
	      return (
	        <ol className="list-decimal px-4" {...attributes}>
	          {children}
	        </ol>
	      )
	    case 'bulleted-list':
	      return (
	        <ul className="list-disc px-4" {...attributes}>
	          {children}
	        </ul>
	      )
	    case 'heading-one':
	      return (
	        <h1 {...attributes}>
	          {children}
	        </h1>
	      )
	    case 'heading-two':
	      return (
	        <h2 {...attributes}>
	          {children}
	        </h2>
	      )
	     case 'link':
	     	return (
	     		<Link {...attributes}>{children}</Link>
	     	)
	    default:
	      return (
	        <p {...attributes}>
	          {children}
	        </p>
	      )
	  }
}