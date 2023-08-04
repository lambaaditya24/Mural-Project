import { useState } from "react";
import MenuAppBar from "../Navbar/Navbar";
import SideNav from "./SideNav/SideNav";
import ProfileModule from "./Profile/profile";

const CrewMemberPortal = () => {
  const [pageToBeLoaded, setPage] = useState("");

  const childToParent = (value) => {
    setPage(value);
  };

  let page;

  if (pageToBeLoaded == "" || pageToBeLoaded == "sjModule") {
    page = <ProfileModule style={{ innerWidth: "300px" }} />;

  }
//   } else if (pageToBeLoaded == "sjModule") {
//     page = <UserManagement />;
//   } else if (pageToBeLoaded == "LearningModule") {
//     page = <LearningModule />;
//   } else {
//     page = <SocialEnterprisePage style={{ innerWidth: "300px" }} />;

//   }
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

export default CrewMemberPortal;
