import { Link } from "react-router-dom";
import githubLogo from '../../assets/githubLogo.png'
import layout from "./Layout.module.css";

//Navbar
export const Navbar = () => {
  return (
    <div className={layout.layoutWrapper}>
      <ul className={layout.navbarListFlex}>
        <div className={layout.logoDiv}>
          <img src={githubLogo} alt="logo" className={layout.appLogo} />
          <h2 className={layout.appLogoText}>Analazer App</h2>
        </div>
        <div className={layout.listsDiv}>
          <li className={layout.list}>
            <Link to="/">Home</Link>
          </li>
          <li className={layout.list}>Followers</li>
          <li className={layout.list}>Following</li>
          <li className={layout.list}>Public repo</li>
          <li className={layout.list}>Created at</li>
        </div>
      </ul>
    </div>
  );
};
