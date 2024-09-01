import React from "react";
import {Member} from "@/lib/data/member";

export default function GamerMine() {
    return new Member(
        "https://static.dwightstudio.fr/dwightstudio/PERSONAL/GamerMine/LOGO.png",
        "#d05539",
        "GamerMine",
        "Maxime",
        "Savary",
        "Student at IUT of Le Havre",
        "Currently in work-study at Capgemini, I worked and still work on various projects. I am open " +
        "to every type of projects and still want to improve my experiences and skills.",
        [
            "https://github.com/GamerMine",
            "https://www.youtube.com/channel/UCjtjzedWxrnQwRkdSRVccUg",
            "https://www.twitch.tv/gamermine55"
        ],
        <div>
        </div>
    )
}