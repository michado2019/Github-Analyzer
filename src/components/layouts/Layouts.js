import {useState} from 'react';
import { Link } from "react-router-dom";
import githubLogo from '../../assets/githubLogo.png'
import layout from "./Layout.module.css";
import homeIcon from '../layouts/assets/home.png';
import folowersIcon from '../layouts/assets/followers.png';
import followingIcon from '../layouts/assets/following.png';
import repoIcon from '../layouts/assets/repo.png';

//Navbar
export const Navbar = () => {

  // State
  const [data, setData] = useState({});
  // Fetch adata from gitbub api
  async function getData() {
    const url = 'https://api.github.com/users/michado2019';
    const response = await fetch(url);
    const results = await response.json();
    setData({
      name: results?.name,
      avatar: results?.avatar_url,
      followers: results?.followers,
      following: results?.following,
      repos: results?.public_repos,
    });
  }
  getData()
  return (
    <div className={layout.navbarWrapper}>
      <ul className={layout.navbarListFlex}>
        <div className={layout.logoDiv}>
        <img src={githubLogo} alt="logo" className={layout.appLogo} />
          <h2 className={layout.appLogoText}>Analazer</h2>
        </div>
        <div className={layout.navbarListsDiv}>
          <li className={layout.navbarList}>
            <img src={homeIcon} alt='img' className={layout.navbarListImg} />
            <Link to="/" className={layout.navbarList}>Home</Link>
          </li>
          <img src={folowersIcon} alt='img' className={layout.navbarListImg} />
          <a href='https://github.com/michado2019'><li className={layout.navbarList}>Followers <span className={layout.navbarFetchedData}>{data.followers}</span></li></a>
          <img src={followingIcon} alt='img' className={layout.navbarListImg} />
          <a href='https://github.com/michado2019'><li className={layout.navbarList}>Following <span className={layout.navbarFetchedData}>{data.following}</span></li></a>
          <img src={repoIcon} alt='img' className={layout.navbarListImg} />
          <a href='https://github.com/michado2019'><li className={layout.navbarList}>Public-repo <span className={layout.navbarFetchedData}>{data.repos}</span></li></a>
        </div>
      </ul>
    </div>
  );
};
