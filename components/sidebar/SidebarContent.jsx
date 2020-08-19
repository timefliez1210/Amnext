const SidebarContent = (props) => {
  return (
    <>
      <div className="content-goals">
        <h4>
          {props.title} {props.matrix}
        </h4>

        <p>{props.balance_usd}</p>

        <p className="light-blue">{props.balance_eth}</p>
      </div>
      <style jsx>{`
        p {
          padding: 0 20px;
        }
        .content-goals {
          background: #10013e;
          width: 90%;
          margin: 15px 0;
          text-align: left;
          margin: 20px auto;
          border-radius: 20px;
          padding-top: 5px;
        }
        .light-blue {
          width: 100%;
          background: #1262ff;
          border-radius: 0 0 20px 20px;
          padding: 20px 20px;
        }
        h4 {
          padding: 0 20px;
          font-size: 1.3em;
        }
      `}</style>
    </>
  );
};

export default SidebarContent;
