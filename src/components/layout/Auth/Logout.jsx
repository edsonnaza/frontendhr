import classes from './Logout.module.scss';
import { useSelector } from 'react-redux';
import { getFirstUser } from '../../../utils/selectors';

const Logout = (props)=>{
  let user = useSelector(getFirstUser);

  if(!user) {
    user = useSelector(state => state.user ? state.user : {}); 

  }
    return (
        <div className={classes.container}>
          
          <hr />
          <h3 className="userName">{user.email}</h3>
          <hr />
          <div className="form_buttons">
            <span 
            className={classes.btn}
            onClick={props.logOut}
            >
              Log Out
            </span>
          </div>
        </div>)
    
}

export default Logout;