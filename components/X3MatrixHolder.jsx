import X3Matrix from "./X3matrix";

const X3MatrixHolder = () => {
  return (
    <>
      <div className="upper-holder">
        <div className="top-part">
          <h1>Hallo von x3</h1>
        </div>
        <div className="bottom-part">
          <X3Matrix />
        </div>
        <p>Hallo ich bin der Lückenfüller Text für die Icones</p>
      </div>
      <style jsx>{`
        .upper-holder {
          margin-bottom: 20px;
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
export default X3MatrixHolder;
