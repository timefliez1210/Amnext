const SidebarContent = (props) => {
  return (
    <>
      <div className="content-goals">
        <h4>{props.title}</h4>
        <p>{props.balance_usd}</p>
        <p className="light-blue">{props.balance_eth}</p>
      </div>
      <style jsx>{`
        .content-goals {
          background: rgba(16, 1, 62, 1);
          width: 90%;
          margin: 15px 0;
          text-align: left;
          margin: 20px auto;
          border-radius: 20px;
        }
        .light-blue {
          width: 100%;
          background: lightblue;
          border-radius: 0 0 20px 20px;
        }
      `}</style>
    </>
  );
};

export default SidebarContent;
