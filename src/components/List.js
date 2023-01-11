// import { useEffect, useState } from "react";
// import TodoCard from "./TodoCard";

// const List = ({ account, todoList }) => {
//   const [list, setList] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const loadData = async () => {
//       if (account != null) {
//         const todoCount = await todoList.getTodosCount();
//         setCount(todoCount);

//         let todos = [];
//         for (let i = 0; i < count; i++) {
//           let todo = await todoList.getTodo(i);
//           todos.push(todo);
//         }

//         setList(todos);
//       }
//     };

//     loadData();
//   }, [account, todoList]);
//   return (
//     <div>
//       {list?.map(
//         (
//           {
//             title,
//             description,
//             createdDate,
//             timestamp,
//             priority,
//             status,
//             lastUpdate,
//           },
//           idx
//         ) => (
//           <TodoCard
//             key={idx}
//             title={title}
//             description={description}
//             timestamp={timestamp}
//             createdDate={createdDate}
//             status={status}
//             priority={priority}
//             lastUpdate={lastUpdate}
//           />
//         )
//       )}
//     </div>
//   );
// };

// export default List;
