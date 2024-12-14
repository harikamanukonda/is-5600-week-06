import React from "react";
import { Link } from "react-router-dom";

// const Card = (props) => {
  const Card = ({ description, alt_description, id, user = {}, urls = {}, likes }) => {
    const style = {
      backgroundImage: `url(${urls.small || ''})`, // Handle missing URLs
    };

    return (
      <div className="fl w-50 w-25-m w-20-l pa2">
        <Link to={`/product/${id}`} className="db link dim tc">
          <div style={style} alt="" className="w-100 db outline black-10 h4 cover"></div>
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="ml0 black truncate w-100">{description ?? alt_description}</dd>
            <dt className="clip">Artist</dt>
            <dd className="ml0 gray truncate w-100">
              {user.first_name || "Unknown"} {user.last_name || "Artist"}
            </dd>
            <dt className="clip">Likes</dt>
            <dd className="ml0 gray truncate w-100">{likes || 0} Likes</dd>
          </dl>
        </Link>
      </div>
    );
  };

export default Card;