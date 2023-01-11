import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import TodoCard from "./components/TodoCard";
import Navbar from "./components/Navbar";
// ABIs
import TodoList from "./abis/TodoList.json";

// Config
import config from "./config.json";

const App = () => {
  const [accounts, setAccounts] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [todoList, setTodoList] = useState(null);
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const handleClick = async () => {
    const todo = await todoList
      .connect(signer)
      .createTodo(
        `Todo ${parseInt(count.toString()) + 1}`,
        "first todo element!",
        1673033853,
        5
      );
    await todo.wait();

    const todoCount = await todoList.getTodosCount();
    setCount(todoCount);

    const todos = await todoList.getTodos();
    setList(todos);
  };

  const changeTitle = async () => {
    const signer = await provider.getSigner();
    const todo = await todoList.connect(signer).updateTitle(5, "Todo 6");
    await todo.wait();

    const todos = await todoList.getTodos();
    setList(todos);
  };

  const loadBlockchain = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    setProvider(provider);

    // console.log(provider);

    let accounts = await provider.send("eth_requestAccounts", []);
    setAccounts(accounts);
    setAccount(accounts[0]);

    console.log(accounts);

    const signer = await provider.getSigner();
    setSigner(signer);

    const network = await provider.getNetwork();
    const todoList = new ethers.Contract(
      config[network.chainId].todoList.address,
      TodoList,
      provider
    );
    setTodoList(todoList);

    const todoCount = await todoList.connect(accounts[0]).getTodosCount();
    setCount(todoCount);

    const todos = await todoList.connect(accounts[0]).getTodos();
    setList(todos);

    // provider.on("accountsChanged", async (accounts) => {
    //   setAccount(accounts[0]);
    //   console.log(accounts[0]);

    //   const signer = await provider.getSigner();
    //   setSigner(signer);
    // });
  };

  useEffect(() => {
    loadBlockchain();

    if (provider !== null)
      provider.on("accountsChanged", async (accounts) => {
        setAccount(accounts[0]);
        console.log(accounts[0]);

        const signer = await provider.getSigner();
        setSigner(signer);
      });

    return () => {};
  }, []);

  return (
    <div>
      <Navbar account={account} />
      <p> {count.toString()} </p>

      {list?.map(
        (
          {
            title,
            description,
            createdDate,
            timestamp,
            priority,
            status,
            lastUpdate,
          },
          idx
        ) => (
          <TodoCard
            key={idx}
            title={title}
            description={description}
            timestamp={timestamp}
            createdDate={createdDate}
            status={status}
            priority={priority}
            lastUpdate={lastUpdate}
          />
        )
      )}
      <button onClick={handleClick}> add Todo </button>
      <button onClick={changeTitle}> change title of todo 4 </button>
    </div>
  );
};

export default App;
