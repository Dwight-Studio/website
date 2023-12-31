import {getAllMembers} from "../data/member";
import {getAllProjects} from "../data/project";

export default function Sitemap() {
    const base = "https://www.dwightstudio.fr";

    function link(...args) {
        return (
            <div>
                {args.map(item => <div>{base + item}<br/></div>)}
            </div>
        )
    }

    return link(
        "/",
        "/projects",
        "/members",
        "/about-us",
        ...getAllMembers().map(member => member.getMemberURL()),
        ...getAllProjects().map(member => member.getProjectURL())
    )
}