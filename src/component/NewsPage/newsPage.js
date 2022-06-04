import React from "react";
import "./newsPage.css";

import news1 from "../Images/news1.png";
import news2 from "../Images/news2.png";
import news3 from "../Images/news3.png";
import news4 from "../Images/news4.png";
import topStories from "../Images/topStories.png";

import { Link } from "react-router-dom";

const NewsPage = () => {
  return (
    <>
      <div className="container">
        <img src={require("../Images/news.png")} alt="news" />
        <h1 className="top-left-news">News Feed</h1>
        <div className="top-left-text">
          Lorem ipsum dolor sit amet. Non pariatur praesentium ut beatae galisum
          fugiat qui debitis sint in internos nihil aut enim reiciendis est
          minus pariatur. Ea dolores autem a praesentium numquam est iusto
          illum.
        </div>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", padding: "70px" }}
      >
        <div>
          <h1 class="latest-news">Latest News</h1>
          <div class="header-body">
            <div class="column">
              <Link to="/NewsArticle">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg"
                  alt="sample88"
                />
              </Link>

              <h2 class="column-text">Schools are being built in africa</h2>
            </div>
          </div>
          <div class="header-body">
            <div class="column">
              <Link to="/NewsArticle">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg"
                  alt="sample88"
                />
              </Link>

              <h2 class="column-text">Schools are being built in africa</h2>
            </div>
          </div>
          <div class="header-body">
            <div class="column">
              <Link to="/NewsArticle">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg"
                  alt="sample88"
                />
              </Link>

              <h2 class="column-text">Schools are being built in africa</h2>
            </div>
          </div>
          <div class="header-body">
            <div class="column">
              <Link to="/NewsArticle">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg"
                  alt="sample88"
                />
              </Link>

              <h2 class="column-text">Schools are being built in africa</h2>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flexStart",
            }}
          >
            <h1
              class="Weekly-news"
              style={{ padding: "20px", fontSize: "45px" }}
            >
              Weekly News
            </h1>
            <div>
              <div
                className="landingField51Div"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Link to="">
                  <img
                    className="NewsImg"
                    style={{
                      padding: "5px",
                      width: "322px",
                      height: "300px ",
                    }}
                    src={news1}
                    alt=""
                  />
                  
                </Link>
                <Link to="">
                  <img
                    className="NewsImg"
                    style={{
                      padding: "5px",
                      width: "644px",
                      height: "300px ",
                    }}
                    src={news2}
                    alt=""
                  />
                </Link>
              </div>

              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    maxWidth: "90%",
                    width: "322px",
                    height: "300px ",
                  }}
                  src={news3}
                  alt=""
                />
              </Link>
              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    maxWidth: "90%",
                    width: "322px",
                    height: "300px ",
                  }}
                  src={news4}
                  alt=""
                />
              </Link>
              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    maxWidth: "90%",
                    width: "322px",
                    height: "300px ",
                  }}
                  src={news4}
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <h1
                class="top-stories"
                style={{ padding: "10px", fontSize: "45px" }}
              >
                Top Stories
              </h1>
            </div>
            <div
              className="top-stories"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flexStart",
                padding: "20px",
              }}
            >
              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    height: "100px",
                    width: "150px",
                  }}
                  src={topStories}
                  alt=""
                />

                <div class="top-story-text">
                  <p> Lorem ipsum dolor sit amet. Ea distinctio consequatur ut
                      minus officiis</p>
                </div>
              </Link>
              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    height: "100px",
                    width: "150px",
                  }}
                  src={topStories}
                  alt=""
                />

                <div class="top-story-text">
                  <p> Lorem ipsum dolor sit amet. Ea distinctio consequatur ut
                      minus officiis</p>
                </div>
              </Link>
              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    height: "100px",
                    width: "150px",
                  }}
                  src={topStories}
                  alt=""
                />

                <div class="top-story-text">
                  <p> Lorem ipsum dolor sit amet. Ea distinctio consequatur ut
                      minus officiis</p>
                </div>
              </Link>
              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    height: "100px",
                    width: "150px",
                  }}
                  src={topStories}
                  alt=""
                />

                <div class="top-story-text">
                  <p> Lorem ipsum dolor sit amet. Ea distinctio consequatur ut
                      minus officiis</p>
                </div>
              </Link>
              <Link to="">
                <img
                  className="NewsImg"
                  style={{
                    padding: "5px",
                    height: "100px",
                    width: "150px",
                  }}
                  src={topStories}
                  alt=""
                />

                <div class="top-story-text">
                  <p> Lorem ipsum dolor sit amet. Ea distinctio consequatur ut
                      minus officiis</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
