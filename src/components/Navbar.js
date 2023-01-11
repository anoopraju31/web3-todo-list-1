import React from "react";

const Navbar = ({ account, setAccount, provider }) => {
  // const connectHandler = async () => {
  //   // const accounts = await window.ethereum.request({
  //   //   method: "eth_requestAccounts",
  //   // });
  //   const accounts = provider.send("eth_requestAccounts", []);
  //   setAccount(accounts[0]);
  // };

  // console.log(account);
  return (
    <div>
      {/* {account ? (
        <button type="button">
          {account.slice(0, 6) + "..." + account.slice(38, 42)}
        </button>
      ) : (
        <button type="button" onClick={connectHandler}>
          connect
        </button>
      )} */}
      <button type="button">
        {account &&
          account.toString().slice(0, 6) + "..." + account.slice(38, 42)}
      </button>
    </div>
  );
};

export default Navbar;
