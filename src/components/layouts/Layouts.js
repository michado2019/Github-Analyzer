import { useContext, useState } from "react";
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
import useFetch from "../hooks/useFetch";

//Navbar
export const Navbar = () => {
  // Use context
  const data = useContext(DataContext);
  const { result } = data;
  return (
    <div className={layout.navbarWrapper}>
      {result ? (
        <ul className={layout.navbarListFlex}>
          <div className={layout.logoDiv}>
            <img src={githubLogo} alt="logo" className={layout.appLogo} />
            <h2 className={layout.appLogoText}>Analyzer</h2>
          </div>
          <div className={layout.navbarListsDiv}>
            <li className={layout.navbarList}>
              <img src={homeIcon} alt="img" className={layout.navbarListImg} />
              <Link to="/" className={layout.navbarList}>
                Home
              </Link>
            </li>
            <img
              src={folowersIcon}
              alt="img"
              className={layout.navbarListImg}
            />
            <a href="https://github.com/michado2019">
              <li className={layout.navbarList}>
                Followers{" "}
                <span className={layout.navbarFetchedData}>
                  {result?.followers}
                </span>
              </li>
            </a>
            <img
              src={followingIcon}
              alt="img"
              className={layout.navbarListImg}
            />
            <a href="https://github.com/michado2019">
              <li className={layout.navbarList}>
                Following{" "}
                <span className={layout.navbarFetchedData}>
                  {result?.following}
                </span>
              </li>
            </a>
            <img src={repoIcon} alt="img" className={layout.navbarListImg} />
            <a href="https://github.com/michado2019">
              <li className={layout.navbarList}>
                Public-repo{" "}
                <span className={layout.navbarFetchedData}>
                  {result?.public_repos}
                </span>
              </li>
            </a>
          </div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

// Sidebar
export const Sidebar = () => {
  // Use context
  const userData = useContext(DataContext);
  const { result } = userData;

  // States
  const [followers, setFollowers] = useState("");
  const [page, setPage] = useState(1);
  const [style, setStyle] = useState(false);

  const { data, loading, error } = useFetch(`${followers}`);

  if (loading)
    return (
      <div className={layout.fetchingConditions}>
        <div></div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className={layout.fetchingConditions}>
        <div></div>/ <h1>Error loading page</h1>
      </div>
    );
  const perPage = 1;
  const pages = Math.ceil(data?.length / perPage);
  const skip = page * perPage - perPage;
  function handleGetFollowers() {
    const url = result.followers_url;
    async function getFollowers() {
      const followersUrl = url;
      setFollowers(followersUrl);
    }
    getFollowers(url);
    setStyle(true);
  }
  
  // Change user
  const changeUser = () => {
    window.location.reload()
  }
  return (
    <div className={layout.sidebarWrapper}>
      {result ? (
        <div className={layout.sidebar}>
          <div>
            <div className={layout.sidebarContent}>
              <img
                src={result?.avatar_url}
                alt="img"
                className={layout.sidebarGrandUserImg}
              />
              <div className={layout.sidebarDivs}>
                <label className={layout.sidebarLabels}>Name: </label>
                <h2 className={layout.sidebarGrandUserName}>{result?.name}</h2>
              </div>
              <div className={layout.sidebarDivs}>
                <label className={layout.sidebarLabels}>Bio: </label>
                <p className={layout.sidebarLinks}>{result?.bio}</p>
              </div>
              <div className={layout.sidebarDivs}>
                <img
                  src={linkIcon}
                  alt="img"
                  className={layout.sidebarLinkIcon}
                />
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className={layout.sidebarLinks}
                >
                  {result?.html_url}
                </a>
              </div>
              <div className={layout.sidebarDivs}>
                <label className={layout.sidebarLabels}>Twitter: </label>
                <a
                  href="https://twitter.com/Mike_Adeshina"
                  target="_blank"
                  rel="noreferrer"
                  className={layout.sidebarLinks}
                >
                  {result?.twitter_username}
                </a>
              </div>
            </div>
            <CopyRight />
            <p className={layout.loveImgText}>
              Made with{" "}
              <img src={loveImg} alt="img" className={layout.loveImg} />
              by Adeshina Michael
            </p>
          </div>
          <div className={layout.followersFetcher}>
            <div className={layout.fetchDiv}>
              <button
                className={layout.fetchBtn}
                onClick={handleGetFollowers}
                style={{ display: style ? "none" : "block" }}
              >
                Fetch user's followers
              </button>
              <div
                className={layout.followersDetails}
                style={{ display: style ? "block" : "none" }}
              >
                <div className={layout.followersDetailsDiv}>
                  <h1 className={layout.fetchBtn} id={layout.fetchBtn}>
                    List of followers
                  </h1>
                  {data?.slice(skip, skip + perPage).map((each) => {
                    return (
                      <div key={each.id} className={layout.details}>
                        <div className={layout.allDetailsDiv}>
                          <div className={layout.detailsOne}>
                            <img
                              src={each.avatar_url}
                              alt="img"
                              className={layout.followersAvatar}
                            />
                            <div className={layout.moreDetails}>
                              <h1 className={layout.followersLogin}>
                                {each.login}
                              </h1>
                              <a href={each.html_url} className={layout.url}>{each.html_url}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {
                  <button
                    disabled={page <= 1}
                    onClick={() => setPage((prev) => prev - 1)}
                    className={layout.prevAndNextBtns}
                  >
                    prev
                  </button>
                }
                {
                  <button
                    disabled={page >= pages}
                    aria-disabled={page >= pages}
                    onClick={() => setPage((prev) => prev + 1)}
                    className={layout.prevAndNextBtns}
                  >
                    next
                  </button>
                }
              </div>
        <button id={layout.changeUser} onClick={changeUser}>Change user</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
      </div>
    </div>
  );
};
export const CopyRight = () => {
  return (
    <div className={layout.copyRight}>
      <p>© 2021 Michado2019. All rights reserved.</p>
    </div>
  );
};