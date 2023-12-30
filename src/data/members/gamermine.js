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
        "Currently in work-study at Capgemini, I worked and still works on various projects. I am open to " +
        "every type of projects and still wants to improve my experiences and skills.",
        [
            "https://github.com/GamerMine",
            "https://www.youtube.com/channel/UCjtjzedWxrnQwRkdSRVccUg",
            "https://www.twitch.tv/gamermine55"
        ],
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