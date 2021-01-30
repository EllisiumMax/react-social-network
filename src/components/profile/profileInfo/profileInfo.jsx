import c from './ProfileInfo.module.scss';

function ProfileInfo(props) {
    return (
        <div>
        <img src={props.backgroundImg} alt="" className={c.background}/>
        <div className={c.mainWrapper}>
            <img src={props.userPhoto} alt="User profile image" className={c.userPhoto}/>
            <div className={c.infoWrapper}>
            <h2>{props.userName}</h2>
            <h4>Age: {props.userAge}</h4>
            <h4>Living in: {props.livingAt}</h4>
            <h4>Working at: {props.workingAt}</h4>
            </div>
        </div>
        </div>
    );
}

export default ProfileInfo;