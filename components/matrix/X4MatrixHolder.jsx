import X4Matrix from "./X4matrix";

const X4MatrixHolder = (props) => {
  const elements = [];
  for (let i = 1; i < 13; i++) {
    elements.push({
      id: i,
      key: i,
      cost: (props.cost / 2) * i,
    });
  }
  return (
    <>
      <div className="upper-holder">
        <div className="top-part">
          <h1>Forsage x4</h1>
        </div>
        <div className="bottom-part">
          {elements.map((matrix, index) => (
            <X4Matrix id={matrix.id} key={matrix.key} cost={matrix.cost} />
          ))}
        </div>
        <p>Hallo ich bin der Lückenfüller. Text für die Icones</p>
      </div>
      <style jsx>{`
        .upper-holder {
          margin-bottom: 20px;
          text-align: left;
        }
        .top-part {
          width: 100%;
          background: rgba(28, 22, 85, 1);
          border-radius: 20px 20px 0 0;
          padding: 10px 20px;
        }
        .bottom-part {
          width: 100%;
          background: rgba(28, 22, 85, 1);
          border-radius: 0 0 20px 20px;
          padding: 10px 10px;
          border-top: 2px solid black;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 30px;
        }
      `}</style>
    </>
  );
};
export default X4MatrixHolder;
