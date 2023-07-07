import React from "react";
import { Link } from "react-router-dom";

const Articel = () => {
  return (
    <article>
      <div className="article__img__sec">
        <div className="article__ing__con">
          <img
            src="https://unsplash.com/photos/mpwF3Mv2UaU/download?ixid=M3wxMjA3fDF8MXxhbGx8Nnx8fHx8fDJ8fDE2ODg1NDgwODB8&force=true&w=640"
            alt="post"
          />
          <span className="article__img__tag">programing</span>
        </div>
      </div>

      <div className="article__textContent">
        <header className="article__dead">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
          <div className="head_body">
            <h4>HM Nayem</h4>
            <small>2 jun 1999</small>
          </div>
        </header>
        <div className="article__body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            nisi pariatur, ratione, iusto ullam debitis natus aperiam ex eum
            exercitationem minima sint ipsam totam veniam ad amet, illo.
          </p>
          <button>
            <Link to={"posts/ditail/:slug"}>read more</Link>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Articel;
