import SidebarContent from "./SidebarContent";
import Divider from "./Divider";
import UserContent from "./UserContent";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      ID: {props.userIds}
      <br />
      <br />
      {props.partnersCount}
      <br />
      <br />
      <div className="earnings">$4,000,000</div>
      <SidebarContent
        title="Balance"
        balance_usd="200000usd"
        balance_eth="232222eth"
      />
      <div className="oneMillion"></div>
      <Divider />
      <SidebarContent
        title="Hallo"
        balance_usd="1239 ETH"
        balance_eth="1239 ETH"
      />
      <SidebarContent
        title="Hallo"
        balance_usd="1239 ETH"
        balance_eth="1239 ETH"
      />
      <Divider />
      <UserContent title="Affiliate Link" placeholder={props.userIds} />
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
          width: 80%;
          margin: 10px auto;
          background: red;

          border: none;
          color: white;
          border-radius: 10px;
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
