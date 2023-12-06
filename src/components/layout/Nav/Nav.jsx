import logoCompany from "../../../assets/cec35aniversarioblanco.png";
import classes from "./Nav.module.scss";
import Logout from "../Auth/Logout";
import  NavLink  from "../NavLink/NavLink";

const Nav = (props) =>{

    return ( 

    <div className={classes.navContainer}>
      {/* DIV FOR LOGO */}
      <div>
        <img className={classes.logo} src={logoCompany} alt="HR Logo" />
      </div>

      {/* DIV FOR SEARCH AND NAVIGATION */}

      <div className={classes.secondSection}>
        <div className={classes.wrapperItems}>
          {props.logged && (
            <NavLink linknav={classes.linknav} itemnav={classes.itemnav} />
          )}
        </div>

         
                
          <div className={classes.logoutDiv}>
            { props.logged && <Logout logOut={props.logOut} /> }
          </div>
        </div>
     


    </div>)
}

export default Nav;