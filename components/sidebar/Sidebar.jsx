import SidebarContent from "./SidebarContent";
import Divider from "./Divider";
import UserContent from "./UserContent";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div>
          <p>
            <img src="/assets/img/user_simple.jpg" height="40px" /> {""} {""}
            ID: {props.userIds}
          </p>
          <br />
          <br />
          <img src="/assets/img/partners.jpg" width="60px" />
          {props.partnersCount}
          <br />
          <br />
        </div>
        <img src="/assets/img/cube.jpg" width="100%" />
      </div>
      <div className="earnings">
        <b>$4,000,000</b>
      </div>

      <SidebarContent
        title="Balance"
        balance_usd="200000usd"
        balance_eth="232222eth"
      />
      <div className="oneMillion"></div>
      <Divider />
      <SidebarContent
        title="Forsage"
        matrix="x3"
        balance_usd="1239 USD"
        balance_eth="1239 ETH"
      />
      <SidebarContent
        title="Forsage"
        matrix="x4"
        balance_usd="1239 USD"
        balance_eth="1239 ETH"
      />
      <Divider />
      <UserContent
        title="Affiliate Link"
        placeholder={"www.sonstwas.io/" + props.userIds}
      />
      <UserContent title="Your Ethereum Wallet" placeholder={props.account} />
      <UserContent title="Smart Contract Address" placeholder={props.address} />
      <style jsx>{`
        .sidebar {
          height: 100%;
          background: rgba(28, 22, 85, 1);
          border-radius: 20px;
          padding: 10px;
        }
        .earnings {
          width: 90%;
          margin: 10px auto;
          background: rgb(252, 132, 118);
          background: linear-gradient(
            223deg,
            rgba(252, 132, 118, 1) 22%,
            rgba(252, 94, 125, 1) 73%
          );
          border: none;
          color: white;
          border-radius: 10px;
          padding: 15px 20px;
          text-align: center;
          font-size: 1.3em;
        }
        .profile {
          width: 90%;
          margin: auto auto;
          display: grid;
          grid-template-columns: 150px auto;
        }
        .profile p {
          font-size: 25px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
