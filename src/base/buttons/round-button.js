import "./round-button.css"
import {Link} from "react-router-dom";

function RoundButton(props) {
    return (
        <Link to={props.link}>
            <div className="round-button">{props.text}</div>
        </Link>
    )
}

export default RoundButton;