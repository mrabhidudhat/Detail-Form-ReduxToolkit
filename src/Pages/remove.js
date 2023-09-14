
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
      ):(
        <p>No stored form data found.</p>
      )  }
    </div>
  );

export default Sform;
