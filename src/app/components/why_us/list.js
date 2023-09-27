import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
export default function List(props){
    return(
        <li><FontAwesomeIcon icon={faCheck} />{props.data.list_data}</li>
    )
}