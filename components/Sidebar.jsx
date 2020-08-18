const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <h1>Hello from sidebar</h1>
      <p>
        {props.userIds}
        <br />
        <br />
        {props.partnersCount}
        <br />
        <br />
        Your referal Link: www.sonstwas.io/{props.userIds}
      </p>

      <style jsx>{`
        .sidebar {
          height: 100%;
          background: rgba(28, 22, 85, 1);
          border-radius: 20px;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
