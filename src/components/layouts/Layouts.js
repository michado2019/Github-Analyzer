import { Link } from "react-router-dom";
import githubLogo from '../../assets/githubLogo.png'
import layout from "./Layout.module.css";
import homeIcon from '../layouts/assets/home.png';
import folowersIcon from '../layouts/assets/followers.png';
import followingIcon from '../layouts/assets/following.png';
import repoIcon from '../layouts/assets/repo.png';
import watchIcon from '../layouts/assets/watch.png';
//Navbar
export const Navbar = () => {
  return (
    <div className={layout.navbarWrapper}>
      <ul className={layout.navbarListFlex}>
        <div className={layout.logoDiv}>
        <img src={githubLogo} alt="logo" className={layout.appLogo} />
          <h2 className={layout.appLogoText}>Analazer App</h2>
        </div>
        <div className={layout.navbarListsDiv}>
          <li className={layout.navbarList}>
            <img src={homeIcon} alt='img' className={layout.navbarListImg} />
            <Link to="/" className={layout.navbarList}>Home</Link>
          </li>
          <img src={folowersIcon} alt='img' className={layout.navbarListImg} />
          <li className={layout.navbarList}>Followers</li>
          <img src={followingIcon} alt='img' className={layout.navbarListImg} />
          <li className={layout.navbarList}>Following</li>
          <img src={repoIcon} alt='img' className={layout.navbarListImg} />
          <li className={layout.navbarList}>Public-repo</li>
          <img src={watchIcon} alt='img' className={layout.navbarListImg} />
          <li className={layout.navbarList}>Created-at</li>
        </div>
      </ul>
    </div>
  );
};
