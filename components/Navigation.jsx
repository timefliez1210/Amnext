import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard">
            <a title="">Main</a>
          </Link>
        </li>
        <li>
          <Link href="/office">
            <a title="">Office</a>
          </Link>
        </li>
        {/* <li>
          <Link href="">
            <a title="">Partners</a>
          </Link>
        </li> */}
        <li>
          <Link href="/statistics">
            <a title="">Statistics</a>
          </Link>
        </li>
        {/* <li>
          <Link href="">
            <a title="">Goal</a>
          </Link>
        </li> */}
        <li>
          <Link href="/instructions">
            <a title="">Instructions</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          background: rgba(28, 22, 85, 1);
          height: auto;
          width: 100%;
          position: fixed;
          top: 0px;
          padding: 5px 0;
          z-index: 999;
          font-size: 20px;
          color: grex;
        }

        nav ul {
          background: rgba(28, 22, 85, 1);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-margin-before: 0;
          margin-block-start: 0;
          -webkit-margin-after: 0;
          margin-block-end: 0;
          -webkit-padding-start: 0;
          padding-inline-start: 0;
          height: 100%;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          width: 90%;
          margin: 0 auto;
        }

        nav figure {
          display: none;
          cursor: pointer;
        }

        nav ul li {
          list-style-type: none;
          padding: 10px 20px;
        }

        nav ul li a {
          color: #6a668f;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
