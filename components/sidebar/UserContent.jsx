const UserContent = (props) => {
  return (
    <>
      <div className="content-user">
        <h4>{props.title}</h4>
        <input
          type="text"
          disabled="disabled"
          placeholder={"www.sonstwas.io" + props.placeholder}
        />
        <br />
        <button className="copy">Copy</button>
        <button className="etherscan">To Etherscan</button>
      </div>
      <style jsx>{`
      .content-user {
        background: rgba(16, 1, 62, 1);
        width: 90%;
        padding: 10px 10px;
        margin: 20px auto;
        border-radius: 20px;
        text-align: center;
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
      `}</style>
    </>
  );
};

export default UserContent;
