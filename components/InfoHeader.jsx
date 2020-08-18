const InfoHeader = () => {
  return (
    <div className="info-margin">
      <div className="holder">
        <div></div>
        <div>
          <h3>All Participants</h3>
          <h3>600,000</h3>
        </div>
      </div>
      <div className="holder">
        <div>
          <h3>Joined in 24 hours</h3>
          <h3>600,000</h3>
        </div>
      </div>
      <div className="holder">
        <div>
          {" "}
          <h3>Participant MATIC</h3>
          <h3>10000000 MATIC</h3>
        </div>
      </div>
      <div className="holder">
        <div>
          <h3>Participant USD</h3>
          <h3>1,000,000 USD</h3>
        </div>
      </div>
      <style jsx>{`
        .info-margin {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 50px;

          margin: auto auto;
          margin-top: 5vh;
        }
        .holder {
          background: rgba(28, 22, 85, 1);
          border-radius: 20px;
          padding: 10px;
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default InfoHeader;
