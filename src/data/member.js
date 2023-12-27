import {LargeMemberCard, TinyMemberCard} from "../base/members/member-card";

export class Member {
    constructor(logoURL, pseudo, firstName, lastName, shortDescription, longDescription) {
        if(!Member.allMembers) {Member.allMembers = []}
        Member.allMembers.push(this);

        this.logoURL = logoURL;
        this.pseudo = pseudo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
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
}

export class Contributor {
    constructor(member, role) {
        this.member = member;
        this.role = role;
    }
}

export const GamerMine = new Member(
    "https://static.dwightstudio.fr/dwightstudio/PERSONAL/GamerMine/LOGO.png",
    "GamerMine",
    "Maxime",
    "Savary",
    "Student at the IUT of Le Havre, majoring in \"Application development: design, development, validation\"",
    ""
);

export const Yinx = new Member(
    "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Yinx/LOGO.png",
    "Yinx",
    "Kévin",
    "Tollemer",
    "Student at INSA of Rennes engineering school, majoring in Cloud specialization",
    ""
);

export const Deleranax = new Member(
    "https://static.dwightstudio.fr/dwightstudio/PERSONAL/Deleranax/LOGO.png",
    "Deleranax",
    "Alexandre",
    "Leconte",
    "Student at INSA of Rennes engineering school, majoring in Cloud specialization",
    "A Java enthusiast, I was introduced to programming through the development of mods and plugins for" +
    "Mincraft back in 2019. Since then, I've maintained a certain affection for this language, its power and portability." +
    "\n\n" +
    ""
);