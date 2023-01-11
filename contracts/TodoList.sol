// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TodoList {
    struct todo {
        string title;
        string description;
        uint createdDate;
        uint timestamp;
        uint8 priority;
        bool status;
        uint lastUpdate;
        bool isPresent;
    }

    event newTodoCreated(address owner, string title);

    mapping(address => todo[]) todos;

    modifier validId(uint _id) {
        require(
            todos[msg.sender][_id].isPresent == true,
            "No todos are there for this address!"
        );
        _;
    }

    // function to create a todo
    function createTodo(
        string memory _title,
        string memory _description,
        uint _timestamp,
        uint8 _priority
    ) public {
        todo memory newTodo;

        newTodo.title = _title;
        newTodo.description = _description;
        newTodo.createdDate = block.timestamp;
        newTodo.timestamp = _timestamp;
        newTodo.priority = _priority;
        newTodo.lastUpdate = block.timestamp;
        newTodo.isPresent = true;

        todos[msg.sender].push(newTodo);

        emit newTodoCreated(msg.sender, _title);
    }

    // function to count number of todos of sender
    function getTodosCount() public view returns (uint) {
        return todos[msg.sender].length;
    }

    // function to send single todo based on id
    function getTodo(uint _id) public view validId(_id) returns (todo memory) {
        return todos[msg.sender][_id];
    }

    // function to return all the todos of a sender
    function getTodos() public view returns (todo[] memory) {
        return todos[msg.sender];
    }

    // function to change the title of a todo
    function updateTitle(uint _id, string memory _title) public validId(_id) {
        todos[msg.sender][_id].title = _title;
        todos[msg.sender][_id].lastUpdate = block.timestamp;
    }

    // function to change the description of a todo
    function updateDescription(
        uint _id,
        string memory _description
    ) public validId(_id) {
        todos[msg.sender][_id].description = _description;
        todos[msg.sender][_id].lastUpdate = block.timestamp;
    }

    // function to change the deathline/timestamp of a todo
    function updateTimestamp(uint _id, uint _timestamp) public validId(_id) {
        todos[msg.sender][_id].timestamp = _timestamp;
        todos[msg.sender][_id].lastUpdate = block.timestamp;
    }

    // function to change the priority value of a todo
    function updatePriority(uint _id, uint8 _priority) public validId(_id) {
        todos[msg.sender][_id].priority = _priority;
        todos[msg.sender][_id].lastUpdate = block.timestamp;
    }

    // function to change the status of a todo (if completed then true else false)
    function updateStatus(uint _id) public validId(_id) {
        todos[msg.sender][_id].status = !todos[msg.sender][_id].status;
        todos[msg.sender][_id].lastUpdate = block.timestamp;
    }
}
