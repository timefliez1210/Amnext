const UserContent = (props) => {
  return (
    <>
      <div className="content-user">
        <h4>{props.title}</h4>
        <input
          type="text"
          disabled="disabled"
          placeholder={props.placeholder}
        />
        <br />
        <button className="copy">Copy</button>
        <button className="etherscan">To Etherscan</button>
      </div>
      <style jsx>{`
        h4 {
          margin-top: 5px;
        }
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
          background: #271950;
          border: none;
        }
        input::placeholder {
          color: white;
        }
        input::disabled {
          background: #271950;
        }
        button {
          margin: 10px 15px;
          border: none;
          color: white;
          border-radius: 10px;
          padding: 10px 25px;
        }
        .copy {
          background: rgb(31, 168, 255);
          background: linear-gradient(
            223deg,
            rgba(31, 168, 255, 1) 22%,
            rgba(19, 108, 255, 1) 47%
          );
        }
        .etherscan {
          background: #271950;
        }
      `}</style>
    </>
  );
};

export default UserContent;

// #27db92
