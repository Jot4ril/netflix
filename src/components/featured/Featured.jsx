import React from 'react';
import './featured.scss';
import model from 'C:/Users/Admin/Desktop/netflix/src/assets/model.jpg';
import matrix from 'C:/Users/Admin/Desktop/netflix/src/assets/matrix.jpg';
import { Play } from 'react-bootstrap-icons';

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={model} alt="" />
      <div className="info">
        <img width="25%" src={matrix} alt="" />
        <span className="desc">
          Pushing changes to GitHub - GitHub Docshttps://docs.github.com ›
          making-changes-in-a-branch Pushing changes to GitHub · Click Push
          origin to push your local changes to the remote repository. The Push
        </span>
        <div className="buttons">
          <button className="play">
            <Play />
            <span>Play</span>
          </button>
          <button className="more">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
