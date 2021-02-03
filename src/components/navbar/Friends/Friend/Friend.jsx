import { NavLink } from 'react-router-dom';
import c from './Friend.module.scss';

function Friend(props) {
    let online = '';

    (props.online) ? online = <div className={c.online}></div> : online = '';

    return (
        <NavLink to={props.id} className={c.container}>
            <img src={props.imgLink} alt="User photo" className={c.photo}/>
            <p className={c.name}>{props.name}</p>
            {online}
        </NavLink>
    );
}

export default Friend;