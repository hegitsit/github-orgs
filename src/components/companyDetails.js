import React, { useEffect, Fragment, useContext } from 'react';
import GitHubContext from '../github/githubContext';

export const OrgDetails = ({ match }) => {
  const githubContext = useContext(GitHubContext);
  const { company, getCompany } = githubContext;

  useEffect(() => {
    getCompany(match.params.org);
  }, []);

  const { avatar_url, is_verified, login, name, followers, following, description, public_repos, html_url } = company;
  console.log(`company`, company)
  return (
    <div>
      <div>
        <img src={avatar_url} alt={avatar_url} style={{ width: '150px' }} />
        <h1>{name ? name : login}</h1>
        {is_verified && (
          <Fragment>
            <h3>Verfied</h3>
            <p>{is_verified}</p>
          </Fragment>
        )}
        <a href={html_url} className='btn btn-dark my-1'>
          Visit Github Profile</a>
        {description && (
          <Fragment>
            <h3>Verfied</h3>
            <p>{description}</p>
          </Fragment>
        )}
        <Fragment>
          <h3>following: {following}</h3>
          <h3>followers: {followers}</h3>
        </Fragment>
      </div>
    </div>
  )
}

export default OrgDetails;
