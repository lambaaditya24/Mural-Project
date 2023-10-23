import { useState } from "react";
import MenuAppBar from "../Navbar/Navbar";
import SideNav from "./SideNav/SideNav";
import WeeklyAssesment from "./WeeklyAssesment/WeeklyAssesment";
import MonthylAssesment from "./MonthlyAssesment/MonthlyAssesment";

const CrewChiefPortal = () => {
  const [pageToBeLoaded, setPage] = useState("");

  const childToParent = (value) => {
    setPage(value);
  };

  let page;

  if (pageToBeLoaded == "" || pageToBeLoaded == "weekly") {
    page = <WeeklyAssesment style={{ innerWidth: "300px" }} />;

  }else if(pageToBeLoaded == "monthly"){
    page = <MonthylAssesment style={{ innerWidth: "300px" }} />;

  };
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

export default CrewChiefPortal;
