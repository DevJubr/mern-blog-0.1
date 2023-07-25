import React from "react";
import PageHeader from "../../components/PageHeader";
import AdTable from "../../components/AdTable";

const AllUsers = () => {
  return (
    <div className="SubAdmin">
      <PageHeader name={"all users"} />

      <AdTable user={true} />
    </div>
  );
};

export default AllUsers;
