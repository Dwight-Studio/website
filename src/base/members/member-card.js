import react from 'React';

function TinyMemberCard(props) {
    return (
        <div className="member-card-wrapper">
            <img src={props.member.logoURL} alt="Member logo"/>
            <div className="text">

            </div>
        </div>
    );
}

export default TinyMemberCard;