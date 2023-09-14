import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectFormData } from "../Redux/Slice";
import Header from "../Component/Header";

const Sform = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.formData.formData);
  const handleButtonClick = (id) => {
    const selectedData = formData.find((data) => data.id === id);
    if (selectedData) {
      dispatch(selectFormData(selectedData));
    }
  };

  return (
    <div>
      <Header pageTitle="Stored Data Form" />
      <h2 className="Sform-data">Stored Form Data</h2>
      {formData.length !== 0 ? (
        <ol className="Sform-data-list">
          {formData.map((data) => (
            <li key={data.id}>
              {data.Fname} {data.Lname}
              <Link to="/DetailPage">
                <button
                  className="Sform-btn"
                  onClick={() => handleButtonClick(data.id)}
                >
                  {"===>"}
                </button>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className="data-msg">No Form Data Found.</p>
      )}
    </div>
  );
};

export default Sform;
