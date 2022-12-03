import { useContext } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";
import githubLogo from "../../assets/githubLogo.png";
import layout from "./Layout.module.css";
import homeIcon from "../layouts/assets/home.png";
import folowersIcon from "../layouts/assets/followers.png";
import followingIcon from "../layouts/assets/following.png";
import repoIcon from "../layouts/assets/repo.png";
import linkIcon from "../layouts/assets/linkLogo.jpg";
import loveImg from "../layouts/assets/loveIcon.jpg";

//Navbar
export const Navbar = () => {

  // Use context
  const data = useContext(DataContext)
  return (
    <div className={layout.navbarWrapper}>
      <ul className={layout.navbarListFlex}>
        <div className={layout.logoDiv}>
          <img src={githubLogo} alt="logo" className={layout.appLogo} />
          <h2 className={layout.appLogoText}>Analazer</h2>
        </div>
        <div className={layout.navbarListsDiv}>
          <li className={layout.navbarList}>
            <img src={homeIcon} alt="img" className={layout.navbarListImg} />
            <Link to="/" className={layout.navbarList}>
              Home
            </Link>
          </li>
          <img src={folowersIcon} alt="img" className={layout.navbarListImg} />
          <a href="https://github.com/michado2019">
            <li className={layout.navbarList}>
              Followers{" "}
              <span className={layout.navbarFetchedData}>{data.followers}</span>
            </li>
          </a>
          <img src={followingIcon} alt="img" className={layout.navbarListImg} />
          <a href="https://github.com/michado2019">
            <li className={layout.navbarList}>
              Following{" "}
              <span className={layout.navbarFetchedData}>{data.following}</span>
            </li>
          </a>
          <img src={repoIcon} alt="img" className={layout.navbarListImg} />
          <a href="https://github.com/michado2019">
            <li className={layout.navbarList}>
              Public-repo{" "}
              <span className={layout.navbarFetchedData}>{data.repos}</span>
            </li>
          </a>
        </div>
      </ul>
    </div>
  );
};

// Sidebar
export const Sidebar = () => {
  
  // Use context
  const data = useContext(DataContext)
  return (
 <div className={layout.sidebarWrapper}>
      <div className={layout.sidebarContent}>
        <img
          src={data.avatar}
          alt="img"
          className={layout.sidebarGrandUserImg}
        />
        <div className={layout.sidebarDivs}>
        <label className={layout.sidebarLabels}>Name: </label>
        <h2 className={layout.sidebarGrandUserName}>{data.name}</h2>
        </div>
        <div className={layout.sidebarDivs}>
        <label className={layout.sidebarLabels}>Bio: </label>
        <p className={layout.sidebarLinks}>{data.bio}</p>
        </div>
        <div className={layout.sidebarDivs}>
        <img src={linkIcon} alt="img" className={layout.sidebarLinkIcon} />
        <a href={data.html_url} target='_blank' rel="noreferrer" className={layout.sidebarLinks}>{data.html_url}</a>
        </div>
        <div className={layout.sidebarDivs}>
        <label className={layout.sidebarLabels}>Twitter: </label>
        <a href='https://twitter.com/Mike_Adeshina' target='_blank' rel="noreferrer" className={layout.sidebarLinks}>{data.twitter_username}</a>
        </div>
      </div>
      <CopyRight />
      <p className={layout.loveImgText}>Made with <img src={loveImg} alt='img' className={layout.loveImg} />by Adeshina Michael</p>
    </div>  
  );
};

export const CopyRight = () => {
  return(
    <div className={layout.copyRight}>
      <p>© 2021 Michado2019. All rights reserved.</p>
    </div>
  )
}