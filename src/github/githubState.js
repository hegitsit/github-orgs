import React, { useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext.js";
import { GET_COMPANY, GET_ORGANIZATIONS } from "../types";

const GithubState = (props) => {
  const initialState = {
    company: {},
    organizations: []
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Get All Organizations
  const getAllOrgs = async (group) => {
    const orgs = await fetch(`https://api.github.com/organizations?per_page=${group}`);
    const data = await orgs.json();
    dispatch({ type: GET_ORGANIZATIONS, payload: data })
  }

  // Get Single Company
  const getCompany = async (login) => {
    const company = await fetch(`https://api.github.com/orgs/${login}`);
    const companyData = await company.json();
    dispatch({ type: GET_COMPANY, payload: companyData });
  };

  return (
    <GithubContext.Provider
      value={{
        organizations: state.organizations,
        company: state.company,
        getAllOrgs,
        getCompany
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
