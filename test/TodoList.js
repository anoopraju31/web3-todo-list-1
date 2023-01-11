const { expect } = require("chai");
const hre = require("hardhat");

const getTasks = (id) => {
  let t = new Date("Sat Dec 30 2023 20:28:32 GMT+0530");
  let n = new Date();

  return [`task-${id}`, `describing task-${id}`, t.getTime(), 5, n.getTime()];
};
describe("Todo List", () => {
  let account1, account2, todoList, TodoList;

  before("Deploying contract", async () => {
    [account1, account2] = await hre.ethers.getSigners();
    TodoList = await hre.ethers.getContractFactory("TodoList");
    todoList = await TodoList.deploy();
    await todoList.deployed();

    console.log(todoList);

    // console.log('account: ', account1.address == todoList.signer.address)
  });

  describe("First Todo", () => {
    it("Should add a todo", async () => {
      const [task, description, timeline, priority] = getTasks(1);
      const firstTodo = await todoList
        .connect(account1)
        .createTodo(task, description, timeline, priority);
      await firstTodo.wait();
    });

    it("should count the todos", async () => {
      const todoCount = await todoList.getTodosCount();
      expect(todoCount).to.equal(1);
    });

    it("Should get the todo", async () => {
      const [task, description, timeline, priority, presentTime] = getTasks(1);
      const todo = await todoList.getTodo(0);

      expect(todo.title).to.equal(task);
      expect(todo.description).to.equal(description);
      expect(todo.timestamp).to.equal(timeline);
      expect(todo.priority).to.equal(priority);
      expect(todo.lastUpdate).to.be.lessThan(presentTime);
      expect(todo.createdDate).to.be.lessThan(presentTime);
    });

    it("Should update the title", async () => {
      const updatedTitle = "updated task 1";
      const todoBeforeUpdate = await todoList.getTodo(0);

      await todoList.updateTitle(0, updatedTitle);

      const todoAfterUpdate = await todoList.getTodo(0);

      expect(todoAfterUpdate.title).to.equal(updatedTitle);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update the description", async () => {
      const updatedDescription = "updated task 1 description";
      const todoBeforeUpdate = await todoList.getTodo(0);

      await todoList.updateDescription(0, updatedDescription);

      const todoAfterUpdate = await todoList.getTodo(0);

      expect(todoAfterUpdate.description).to.equal(updatedDescription);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update timestamp", async () => {
      const todoBeforeUpdate = await todoList.getTodo(0);
      const t = new Date("Fri Dec 29 2023 20:28:32 GMT+0530");

      await todoList.updateTimestamp(0, t.getTime());

      const todoAfterUpdate = await todoList.getTodo(0);

      expect(todoAfterUpdate.timestamp).to.equal(t.getTime());
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update priority", async () => {
      const todoBeforeUpdate = await todoList.getTodo(0);

      await todoList.updatePriority(0, 1);

      const todoAfterUpdate = await todoList.getTodo(0);

      expect(todoAfterUpdate.priority).to.equal(1);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update the status", async () => {
      const todoBeforeUpdate = await todoList.getTodo(0);

      await todoList.updateStatus(0);

      const todoAfterUpdate = await todoList.getTodo(0);

      expect(todoAfterUpdate.status).to.equal(true);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });
  });

  describe("Second Todo", () => {
    it("Should add a todo", async () => {
      const [task, description, timeline, priority] = getTasks(2);
      const firstTodo = await todoList
        .connect(account1)
        .createTodo(task, description, timeline, priority);
      await firstTodo.wait();
    });

    it("should count the todos", async () => {
      const todoCount = await todoList.getTodosCount();
      expect(todoCount).to.equal(2);
    });

    it("Should get the todo", async () => {
      const [task, description, timeline, priority, presentTime] = getTasks(2);
      const todo = await todoList.getTodo(1);

      expect(todo.title).to.equal(task);
      expect(todo.description).to.equal(description);
      expect(todo.timestamp).to.equal(timeline);
      expect(todo.priority).to.equal(priority);
      expect(todo.lastUpdate).to.be.lessThan(presentTime);
      expect(todo.createdDate).to.be.lessThan(presentTime);
    });

    it("Should update the title", async () => {
      const updatedTitle = "updated task 2";
      const todoBeforeUpdate = await todoList.getTodo(1);

      await todoList.updateTitle(1, updatedTitle);

      const todoAfterUpdate = await todoList.getTodo(1);

      expect(todoAfterUpdate.title).to.equal(updatedTitle);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update the description", async () => {
      const updatedDescription = "updated task 1 description";
      const todoBeforeUpdate = await todoList.getTodo(1);

      await todoList.updateDescription(1, updatedDescription);

      const todoAfterUpdate = await todoList.getTodo(1);

      expect(todoAfterUpdate.description).to.equal(updatedDescription);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update timestamp", async () => {
      const todoBeforeUpdate = await todoList.getTodo(1);
      const t = new Date("Fri Dec 29 2023 20:28:32 GMT+0530");

      await todoList.updateTimestamp(1, t.getTime());

      const todoAfterUpdate = await todoList.getTodo(1);

      expect(todoAfterUpdate.timestamp).to.equal(t.getTime());
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update priority", async () => {
      const todoBeforeUpdate = await todoList.getTodo(1);

      await todoList.updatePriority(1, 1);

      const todoAfterUpdate = await todoList.getTodo(1);

      expect(todoAfterUpdate.priority).to.equal(1);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });

    it("Should update the status", async () => {
      const todoBeforeUpdate = await todoList.getTodo(1);

      await todoList.updateStatus(1);

      const todoAfterUpdate = await todoList.getTodo(1);

      expect(todoAfterUpdate.status).to.equal(true);
      expect(todoAfterUpdate.lastUpdate).to.be.greaterThan(
        todoBeforeUpdate.lastUpdate
      );
    });
  });

  describe("All todos", () => {
    it("Should show all todos", async () => {
      const todos = await todoList.getTodos();

      console.log(todos.length);

      for (let i = 0; i < todos.length; i++) {
        console.log(`Task ${i + 1}`);
        console.log("   title       : ", todos[i].title);
        console.log("   description : ", todos[i].description);
        console.log(
          "   createdDate : ",
          new Date(Number(todos[i].createdDate) * 1000).toLocaleString()
        );
        console.log(
          "   timestamp   : ",
          new Date(Number(todos[i].timestamp)).toLocaleString()
        );
        console.log("   status      : ", todos[i].status);
        console.log("   priority    : ", todos[i].priority);
        console.log(
          "   lastUpdate  : ",
          new Date(Number(todos[i].lastUpdate) * 1000).toLocaleString()
        );
        console.log("");
      }
    });
  });

  describe("New account", () => {
    it("Should be reverted", async () => {
      expect(await todoList.connect(account2).getTodos()).to.be.revertedWith(
        "No todos are there for this address"
      );
    });
  });
});
