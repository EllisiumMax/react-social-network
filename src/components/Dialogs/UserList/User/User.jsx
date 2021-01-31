import { NavLink } from 'react-router-dom';
import c from './User.module.scss';

function User(props) {
    return (
        <div className={c.wrapper}>
            <NavLink to="#" activeClassName={c.active}>{props.userName}</NavLink>
        </div>
    );
}

export default User;