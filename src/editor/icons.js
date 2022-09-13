import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faBold, 
	faItalic,
	faStrikethrough,
	faCode,
	faListUl,
	faListOl,
	faLink,
	faImage,
	faVideo,
	faQuoteLeft
	 } from '@fortawesome/free-solid-svg-icons'

export const icons = {
	"bold"  :  <FontAwesomeIcon icon={faBold} />,
	"italic" : <FontAwesomeIcon icon={faItalic} />,
	"stroke" : <FontAwesomeIcon icon={faStrikethrough} />,
	"link" : <FontAwesomeIcon icon={faLink} />,
	"quote" : <FontAwesomeIcon icon={faQuoteLeft} />,
	"code" : <FontAwesomeIcon icon={faCode} />,
	"bulleted-list" :  <FontAwesomeIcon icon={faListUl} />,
	"numbered-list" :  <FontAwesomeIcon icon={faListOl} />,
	"video" : <FontAwesomeIcon icon={faVideo} />,
	"image" : <FontAwesomeIcon icon={faImage} />,
}