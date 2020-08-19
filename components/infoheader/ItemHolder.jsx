const ItemHolder = (props) => {
  return (
    <>
      <div className="holder">
        <div></div>
        <div>
          <h3>{props.title}</h3>
          <h3>{props.amount}</h3>
        </div>
      </div>
      <style jsx>{`
        .holder {
          background: rgba(28, 22, 85, 1);
          border-radius: 20px;
          padding: 10px;
          display: flex;
        }
      `}</style>
    </>
  );
};

export default ItemHolder;
