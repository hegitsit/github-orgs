import React, { useEffect, useState, useContext } from "react";
import OrgCard from "./companyCards";
import GitHubContext from '../github/githubContext';
import { debounce } from "lodash";


const Companies = () => {
  const githubContext = useContext(GitHubContext);
  const { organizations } = githubContext;
  const [group, getNextOrg] = useState(10);

  useEffect(() => {
    githubContext.getAllOrgs(group);
  }, []);

  window.onscroll = debounce(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      getNextOrg(group + 10);
      githubContext.getAllOrgs(group);
    }
  }, 100);

  return (
    <div>
      <ul>
        {organizations.map((org) => (
          <OrgCard companyInfo={org} />
        ))}
      </ul>
    </div>
  )
}
export default Companies;

