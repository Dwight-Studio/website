import "./header-project-card.css"

export default function HeaderProjectCard(props) {
    return (
        <div className="header-project-card">
            <div className="downloads">
                {props.children}
            </div>
            <div className="contributors">
                <div className="title">Contributors</div>
                {props.project.getContributorCards()}
            </div>
        </div>
    )
}