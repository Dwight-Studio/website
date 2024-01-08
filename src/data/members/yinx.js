import React from "react";
import {Member} from "../member";

export default function Yinx() {
    return new Member(
        "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Yinx/LOGO.png",
        "#6e39d0",
        "Yinx",
        "Kévin",
        "Tollemer",
        "Student at INSA of Rennes",
        "Earthling since 2003, I escape reality with my computer so I decided to become great in it." +
        "I love to solve puzzles and programming is a neat way to do so, so I'm thriving in it. PS : You should check" +
        "out Advent of Code.",
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