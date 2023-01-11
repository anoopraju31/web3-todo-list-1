const { ethers } = require("hardhat");

const main = async () => {
  const TodoList = await ethers.getContractFactory("TodoList");
  const todoList = await TodoList.deploy();
  await todoList.deployed();
  const [account1, account2] = await ethers.getSigners();
  console.log(account1.address);

  console.log("TodoList deployed at address: ", todoList.address);

  const todo1 = await todoList.createTodo(
    "Todo 1",
    "first todo element!",
    1673033853,
    5
  );
  await todo1.wait();

  const todo2 = await todoList.createTodo(
    "Todo 2",
    "Second todo element!",
    1673033853,
    5
  );
  await todo2.wait();

  const todo3 = await todoList
    .connect(account2)
    .createTodo("Todo 3", "Third todo element!", 1673033853, 5);
  await todo3.wait();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
