import X4Matrix from "./X4matrix";

const X4MatrixHolder = () => {
  return (
    <>
      <div className="upper-holder">
        <div className="top-part">
          <h1>Hallo von x4</h1>
        </div>
        <div className="bottom-part">
          <X4Matrix />
        </div>
        <p>Hallo ich bin der Lückenfüller. Text für die Icones</p>
      </div>
      <style jsx>{`
        .upper-holder {
          text-align: center;
        }
        .top-part {
          width: 100%;
          background: rgba(28, 22, 85, 1);
          border-radius: 20px 20px 0 0;
          padding: 10px;
        }
        .bottom-part {
          width: 100%;
          background: rgba(28, 22, 85, 1);
          border-radius: 0 0 20px 20px;
          padding: 10px;
          border-top: 2px solid black;
        }
      `}</style>
    </>
  );
};
export default X4MatrixHolder;
