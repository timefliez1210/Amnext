import React, { Component } from "react";

const AccountContext = React.createContext();

// export const AccountProvider = AccountContext.Provider;
// export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends Component {
  // context state
  state = {
    account: "",
  };

  //Method to update
  setAccount = (account) => {
    this.setState((prevState) => ({ account }));
  };

  render() {
    const { children } = this.props;
    const { account } = this.state;
    const { setAccount } = this;

    return (
      <AccountContext.Provider
        value={{
          account,
          setAccount,
        }}
      >
        {children}
      </AccountContext.Provider>
    );
  }
}

export { AccountProvider };

export default AccountContext;
