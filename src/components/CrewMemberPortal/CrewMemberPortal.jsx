import { useState } from "react";
import MenuAppBar from "../Navbar/Navbar";
import SideNav from "./SideNav/SideNav";
import ProfileModule from "./Profile/profile";
import GoalsModule from "./GoalsModule/GoalsModule";
import AcademicModule from "./Academic/AcademicModule";
import AssesmentModule from "./AssesmentModule/AssesmentModule";

const CrewMemberPortal = () => {
  const [pageToBeLoaded, setPage] = useState("");

  const childToParent = (value) => {
    setPage(value);
  };

  let page;

  if (pageToBeLoaded == "" || pageToBeLoaded == "profile") {
    page = <ProfileModule style={{ innerWidth: "300px" }} />;

  }else if(pageToBeLoaded == "gaModule"){
    page = <GoalsModule />
  }else if(pageToBeLoaded == "academicAchievments"){
    page = <AcademicModule />
  }else if(pageToBeLoaded == "assesment"){
    page = <AssesmentModule />
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

export default CrewMemberPortal;
