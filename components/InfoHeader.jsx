import ItemHolder from "./infoheader/ItemHolder";

const InfoHeader = (props) => {
  return (
    <div className="info-margin">
      <ItemHolder
        pic="/assets/img/user_icon.png"
        title="All Participants"
        amount={props.totalUsers}
      />
      <ItemHolder
        pic="/assets/img/last_24.jpg"
        title="Joined in 24 hours"
        amount={props.totalUsers}
      />
      <ItemHolder
        pic="/assets/img/ethereum.jpg"
        title="Participant MATIC"
        amount={props.totalUsers * 300}
      />
      <ItemHolder
        pic="/assets/img/euro.jpg"
        title="Participant USD"
        amount={props.totalUsers * 300 * 130}
      />
      <style jsx>{`
        .info-margin {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 50px;
          margin: auto auto;
          margin-top: 10vh;
        }
      `}</style>
    </div>
  );
};

export default InfoHeader;
