import logo from "../../../assets/logo.png";
import classes from "./Nav.module.scss";
import Logout from "../Auth/Logout";
import  NavLink  from "../NavLink/NavLink";
import { useSelector } from 'react-redux';
import { getFirstUser } from '../../../utils/selectors';

const Nav = (props) =>{
    let user = useSelector(getFirstUser);

  if(!user) {
    user = useSelector(state => state.user ? state.user : {}); 

  }

    return ( 

    <div className={classes.navContainer}>
      {/* DIV FOR LOGO */}
      <div>
        <img className={classes.logo} src={logo} alt="HR Logo" />
      </div>

      {/* DIV FOR SEARCH AND NAVIGATION */}

      <div className={classes.secondSection}>
        <div className={classes.wrapperItems}>
          {props.logged && (
            <NavLink linknav={classes.linknav} itemnav={classes.itemnav} />
          )}
        </div>

         
                
          <div className={classes.logoutDiv}>
            { user?.loggedIn && <Logout logOut={props.logOut} /> }
          </div>
        </div>
     


    </div>)
}

export default Nav;