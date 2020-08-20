const ItemHolder = (props) => {
  return (
    <div className="upper">
      <div className="holder">
        <img className="display" src={props.pic} />
        <div>
          <h3>{props.title}</h3>
          <h3>{props.amount}</h3>
        </div>
      </div>
      <style jsx>{`
        .upper {
          background: rgba(28, 22, 85, 1);
          border-radius: 20px;
        }
        .holder {
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 80px auto;
        }
        .display {
          margin-top: 20px;
          width: 60px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ItemHolder;
