//function ProfileCard(props) {
function ProfileCard({ image, title, handle, description }) {
    // const image = props.image;
    // const title = props.title;
    // const handle = props.handle;
    // can be condensed to:
    // const { image, title, handle } = props;
    // which can be redone as the function parameter, instead of using props as the parameter

    console.log(image, title, handle, description);

    return (
        <div className="card" style={{ minHeight: "100%" }}>
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo"></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </ div>
    );
}

export default ProfileCard;
