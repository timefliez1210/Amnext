const CircleBlue = (props) => {
  if (props.exist === true) {
    return (
      <>
        <div className="circle"></div>
        <style jsx>{`
      .circle {
        height: 30px;
              width: 30px;
              border-radius: 50%;
              border: 1.5px solid #1ea6ff;
              background: #1ea6ff;
              margin: auto auto;
      `}</style>
      </>
    );
  } else {
    return (
      <div className="circle-empty">
        <style jsx>{`
          .circle-empty {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1.5px solid #1ea6ff;
            background: none;
            margin: auto auto;
          }
        `}</style>
      </div>
    );
  }
};

export default CircleBlue;

// #fd8576
