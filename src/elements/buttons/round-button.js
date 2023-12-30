import "./round-button.css"
import {Link} from "react-router-dom";

export default function RoundButton(props) {
    return (
        <Link to={props.link}>
            <div className="round-button">
                {props.leftGraphic}
                {props.text}
                {props.rightGraphic}
            </div>
        </Link>
    )
}