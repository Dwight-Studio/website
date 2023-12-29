import {TinyMemberCard} from "../elements/members/tiny-member-card";
import {LargeMemberCard} from "../elements/members/large-member-card";
import {HeaderMemberCard} from "../elements/members/header-member-card";
import {faGithub, faLinkedin, faLinux, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class Member {
    constructor(logo, accentColor, pseudo, firstName, lastName, shortDescription, longDescription, socials) {
        if(!Member.allMembers) {Member.allMembers = []}
        Member.allMembers.push(this);

        this.logoURL = logo;
        this.accentColor = accentColor
        this.pseudo = pseudo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.socials = socials;
    }

    getEmail() {
        return (this.firstName.at(0) + this.lastName).toLowerCase();
    }

    getMemberURL() {
        return "/members/" + this.pseudo
    }

    getTinyCard() {
        return (<TinyMemberCard member={this}/>)
    }

    getLargeCard() {
        return (<LargeMemberCard member={this}/>)
    }

    getHeaderCard() {
        return (<HeaderMemberCard member={this}/>)
    }

    getSocials() {
        return (
            <div>
                {this.socials.map((item) => {
                    let icon = null;
                    switch (new URL(item).hostname) {
                        case "twitter.com":
                        case "www.twitter.com":
                        case "x.com":
                        case "www.x.com":
                            icon = faXTwitter;
                            break;

                        case "youtube.com":
                        case "www.youtube.com":
                            icon = faYoutube;
                            break;

                        case "github.com":
                        case "www.github.com":
                            icon = faGithub;
                            break;

                        case "linkedin.com":
                        case "www.linkedin.com":
                            icon = faLinkedin;
                            break;

                        default:
                            icon = faLinux;
                    }

                    return <a href={item}><FontAwesomeIcon icon={icon}/></a>
                })}
            </div>
        )
    }
}

export class Contributor {
    constructor(member, role) {
        this.member = member;
        this.role = role;
    }
}

export const GamerMine = new Member(
    "https://static.dwightstudio.fr/dwightstudio/PERSONAL/GamerMine/LOGO.png",
    "#d05539",
    "GamerMine",
    "Maxime",
    "Savary",
    "Student at IUT of Le Havre",
    "I did not write my description. I am a bad boy.",
    []
);

export const Yinx = new Member(
    "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Yinx/LOGO.png",
    "#3985d0",
    "Yinx",
    "Kévin",
    "Tollemer",
    "Student at INSA of Rennes",
    "I did not write my description. I am a bad boy.",
    []
);

export const Deleranax = new Member(
    "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Deleranax/LOGO.png",
    "#D8D8D8",
    "Deleranax",
    "Alexandre",
    "Leconte",
    "Student at INSA of Rennes",
    "Currently a student at the INSA engineering school in rennes, specializing in cloud computing. I " +
    "was introduced to programming through the development of mods and plugins for Mincraft back in 2019. Since then, " +
    "I've maintained a certain affection for Java, its power and portability.",
    ["https://github.com/Deleranax", "https://www.youtube.com/@deleranax", "https://twitter.com/Deleranax"]
);