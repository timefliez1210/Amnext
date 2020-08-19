import ItemHolder from "./infoheader/ItemHolder";

const InfoHeader = () => {
  return (
    <div className="info-margin">
      <ItemHolder title="All Participants" amount="600000" />
      <ItemHolder title="Joined in 24 hours" amount="600000" />
      <ItemHolder title="Participant MATIC" amount="600000" />
      <ItemHolder title="Participant USD" amount="600000" />
      <style jsx>{`
        .info-margin {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 50px;

          margin: auto auto;
          margin-top: 5vh;
        }
      `}</style>
    </div>
  );
};

export default InfoHeader;
