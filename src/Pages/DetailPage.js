import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";

const DetailPage = () => {
  const selectedData = useSelector((state) => state.formData.selectedData);
  // console.log(selectedData, "detail data");

  return (
    <>
      <Header pageTitle="Detail Page" />
      <div className="detail-page">
        <h2>Detail Page</h2>
        <ol>
          {selectedData ? (
            <div className="detail-item">
              <p className="list-item">
                <b>First Name:</b> {selectedData.Fname}
              </p>
              <p className="list-item">
                <b>Middle Name:</b> {selectedData.Mname}
              </p>
              <p className="list-item">
                <b>Last Name:</b> {selectedData.Lname}
              </p>
              <p className="list-item">
                <b>Date :</b> {selectedData.date}
              </p>
              <p className="list-item">
                <b>Gender:</b> {selectedData.gender}
              </p>
              <p className="list-item">
                <b>Mobile No:</b> {selectedData.Mono}
              </p>
              <p className="list-item">
                <b>Email Id:</b> {selectedData.Eid}
              </p>
              <p className="list-item">
                <b>Address:</b> {selectedData.Add}
              </p>
              <p className="list-item">
                <b>City:</b> {selectedData.city}
              </p>
              <p className="list-item">
                <b>State:</b> {selectedData.state}
              </p>
              <p className="list-item">
                <b>Pin Code: </b> {selectedData.pin}
              </p>
            </div>
          ) : (
            <p style={{ color: "red", paddingBottom: "5px" }}>
              Item not found.
            </p>
          )}
          <Link to="/" className="btn-direct-home">
            <button type="button" className="btn">
              Go To Home
            </button>
          </Link>
          <Link to="/Sform" className="btn-direct-list">
            <button className="btn">Registered User</button>
          </Link>
        </ol>
      </div>
    </>
  );
};

export default DetailPage;
