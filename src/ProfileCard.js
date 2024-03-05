//function ProfileCard(props) {
function ProfileCard({title,handle}) {
    // const title = props.title;
    // const handle = props.handle;
    // can be condensed to:
    // const { title, handle } = props;
    // which can be redone as the function parameter, instead of using props as the parameter

    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </ div>
    );
}

export default ProfileCard;
