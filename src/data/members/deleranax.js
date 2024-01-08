import React from "react";
import {Member} from "../member";

export default function Deleranax() {
    return new Member(
        "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Deleranax/LOGO.png",
        "#D8D8D8",
        "Deleranax",
        "Alexandre",
        "Leconte",
        "Student at INSA of Rennes",
        "Currently a student at the INSA Engineering School of Rennes, specializing in cloud computing. I " +
        "was introduced to programming through the development of mods and plugins for Minecraft back in 2019. Since then, " +
        "I've maintained a certain affection for Java, its power and portability.",
        [
            "https://github.com/Deleranax",
            "https://www.youtube.com/@deleranax",
            "https://twitter.com/Deleranax"
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