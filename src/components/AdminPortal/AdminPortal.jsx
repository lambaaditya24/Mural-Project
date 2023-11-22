import { useState } from "react";
import MenuAppBar from "../Navbar/Navbar";
import SideNav from "./SideNav/SideNav";
import SocialEnterprisePage from "./SocialEnterprise/SocialEnterprise";
import UserManagement from "./UserManagement/UserManagement";
import LearningModule from "./LearningModule/LearningModule";
import AddJournalModule from "./AddJournalModule/AddJournalModule";

const AdminPortal = () => {
  const [pageToBeLoaded, setPage] = useState("");

  const childToParent = (value) => {
    setPage(value);
  };

  let page;

  if (pageToBeLoaded == "" || pageToBeLoaded == "socialEnterprise") {
    page = <SocialEnterprisePage style={{ innerWidth: "300px" }} />;
  } else if (pageToBeLoaded == "UserManagement") {
    page = <UserManagement />;
  } else if (pageToBeLoaded == "LearningModule") {
    page = <LearningModule />;
  }
  else if (pageToBeLoaded == "journal") {
    page = <AddJournalModule />;
  } 
  else {
    page = <SocialEnterprisePage style={{ innerWidth: "300px" }} />;

  }
  return (
    <div id="root">
      <div className="container">
        <MenuAppBar />
        {/* Transferring data from child to parent, on clicking of sidenav showing the appropriate component */}
        <SideNav childToParent={childToParent} />
        {page}
        
      </div>
    </div>
  );
};

export default AdminPortal;
