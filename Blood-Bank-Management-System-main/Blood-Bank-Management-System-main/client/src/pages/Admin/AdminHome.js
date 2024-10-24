import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome  <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank System </h3>
          <hr />
          <p>
            Blood Bank is a place where blood bag that is collected from blood donation
            events is stored in one place.The term "blood bank" refers to a division 
            of a hospital laboratory where the storage of blood product occurs and 
            where proper testing is performed to reduce the risk of transfusion related events.
            The process of managing the blood bag that is received from the blood donation
            events needs a proper and systematic managment. The blood bag must be handled 
            with care and treated thoroughly as it is related to someone's life.
            The development of wed-based Blood Bank And Donation Management System
            (BBDMS) is Proposed to provide a management functional to the blood bank 
            in order to handle the Blood bag and to make entries of the individuals 
            who wants to donate blood and who are need.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;