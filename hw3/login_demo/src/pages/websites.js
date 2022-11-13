import * as React from "react";
import SearchAppBar from "../components/websites/appbar.js";
import ListItemLink from "../components/websites/react-breadcrumbs.js";
export default function WebsitePage() {
  return (
    <div>
      <SearchAppBar></SearchAppBar>
      <ListItemLink></ListItemLink>
    </div>
  );
}
