import React from 'react'

import { Link } from "react-router-dom";
import "../App.css";

const OrgCard = ({ companyInfo }) => {
  const { login, avatar_url, description, url } = companyInfo;

  return (
    <li className="CardContainer">
      <div>
        <img src={avatar_url} className="Avatar" alt={url} />
        <h1>{login}</h1>
        <p>{description ? description : "No Description Was Added"}</p>
      </div>
      <Link to={`/orgs/${login}`} className="">More</Link>
    </li>
  );
};

export default OrgCard;
