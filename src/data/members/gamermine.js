import React from "react";
import {Member} from "../member";

export default function GamerMine() {
    return new Member(
        "https://static.dwightstudio.fr/dwightstudio/PERSONAL/GamerMine/LOGO.png",
        "#d05539",
        "GamerMine",
        "Maxime",
        "Savary",
        "Student at IUT of Le Havre",
        "I did not write my description. I am a bad boy.",
        [],
        <div>
            <div className="section">
                <h1>Welcome to my page</h1>
                <p>
                    I must fill this page, which is empty for now.
                </p>
            </div>
        </div>
    )
}