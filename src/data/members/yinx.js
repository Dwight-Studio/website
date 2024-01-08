import React from "react";
import {Member} from "../member";

export default function Yinx() {
    return new Member(
        "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Yinx/LOGO.png",
        "#3985d0",
        "Yinx",
        "Kévin",
        "Tollemer",
        "Student at INSA of Rennes",
        "I did not write my description. I am a naughty boy.",
        [
            "https://github.com/FoxYinx",
            "https://twitter.com/YinxFox",
            "https://www.reddit.com/user/WhiteR3d"
        ],
        <div>
            <div className="section">
                <h1>Welcome to my page</h1>
                <p>
                    I must fill this page, which is empty for now.
                </p>
            </div>
        </div>
    );
}