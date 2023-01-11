// function App() {
//   const [provider, setProvider] = useState(null);
//   const [account, setAccount] = useState(null);
//   const [todoList, setTodoList] = useState(null);
//   const [list, setList] = useState([]);
//   const [count, setCount] = useState(0);

//   const loadBlockchainData = async () => {
//     const providerData = new ethers.providers.Web3Provider(window.ethereum);
//     setProvider(providerData);

//     const network = await providerData.getNetwork();
//     const todoListContract = new ethers.Contract(
//       config[network.chainId].todoList.address,
//       TodoList,
//       provider
//     );
//     setTodoList(todoListContract);

//     // console.log(todoListContract);

//     const todoCount = await todoListContract.getTodosCount();
//     setCount(todoCount);

//     let todos = [];
//     for (let i = 0; i < count; i++) {
//       let todo = await todoListContract.getTodo(i);
//       todos.push(todo);
//     }

//     setList(todos);

//     window.ethereum.on("accountsChanged", async () => {
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       const account = ethers.utils.getAddress(accounts[0]);
//       setAccount(account);
//     });
//   };

//   useEffect(() => {
//     loadBlockchainData();
//   }, []);

//   return (
//     <div>
//       <div className="cards__section">
//         <Navbar account={account} setAccount={setAccount} />
//         <h3>Welcome to Millow {list.length} </h3>

//         {/* {list?.map(
//           (
//             {
//               title,
//               description,
//               timestamp,
//               createdTime,
//               status,
//               priority,
//               lastUpdate,
//             },
//             idx
//           ) => (
//             <TodoCard
//               key={idx}
//               title={title}
//               description={description}
//               timestamp={timestamp}
//               createdTime={createdTime}
//               status={status}
//               priority={priority}
//               lastUpdate={lastUpdate}
//             />
//           )
//         )} */}
//       </div>
//     </div>
//   );
// }
