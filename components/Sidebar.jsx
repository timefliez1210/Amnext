const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="holder">
        <p>
          ID: {props.userIds}
          <br />
          <br />
          {props.partnersCount}
          <br />
          <br />
          <button className="earnings">$4,000,000</button>
        </p>
        <div className="content-goals"></div>
        <div classname="oneMillion"></div>
      </div>
      <div className="divider"></div>
      <div className="holder">
        <div className="content-goals"></div>
        <div className="content-goals"></div>
      </div>
      <div className="divider"></div>
      <div className="holder">
        <div className="content-user">
          <h4>Affiliate Link</h4>
          <input
            type="text"
            disabled="disabled"
            placeholder={"www.sonstwas.io" + props.userIds}
          />
          <br />
          <button className="copy">Copy</button>
          <button className="etherscan">To Etherscan</button>
        </div>
        <div className="content-user">
          <h4>Your Ethereum Wallet</h4>
          <input type="text" disabled="disabled" placeholder={props.account} />
          <br />
          <button className="copy">Copy</button>
          <button className="etherscan">To Etherscan</button>
        </div>
        <div className="content-user">
          <h4>Smart Contract Address</h4>
          <input type="text" disabled="disabled" placeholder={props.address} />
          <br />
          <button className="copy">Copy</button>
          <button className="etherscan">To Etherscan</button>
        </div>
      </div>
      <style jsx>{`
        .sidebar {
          height: 100%;
          background: rgba(28, 22, 85, 1);
          border-radius: 20px;
          padding: 10px;
        }
        .holder {
          text-align: center;
          width: 90%;
          margin: 0 auto;
        }
        .divider {
          width: 90%;
          margin: 10px auto;
          background: grey;
          height: 1px;
        }
        
        h4 {
          margin: 0;
        }
        .content-user {
          background: rgba(16, 1, 62, 1);
          padding: 10px 10px;
          margin: 20px auto;
          border-radius: 20px;
        }
        input {
          width: auto;
          margin: 10px auto;
          text-align: center;
          padding: 5px 10px;
          overflow: auto;
          border-radius: 10px;
        }
        input::placeholder {
          color: white;
        }
        input::diabled {
          rgba(170, 170, 170, 0.6);
        }
        button {
          margin: 10px 15px;
          border: none;
          color: white;
          border-radius: 10px;
          padding: 10px 20px;
        }
        .copy {
          background: rgb(57, 196, 224);
          background: linear-gradient(
            223deg,
            rgba(57, 196, 224, 1) 22%,
            rgba(0, 10, 179, 1) 69%
          );
        }
        .etherscan {
          background: rgba(170, 170, 170, 0.4);
        }
        .earnings {
          width: 80%;
          margin: 10px auto;
          background: red;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
