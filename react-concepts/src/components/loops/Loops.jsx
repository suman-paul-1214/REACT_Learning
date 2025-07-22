import User from "./user";

function Loops(){
  const UserData= [
    {name: "Rudra", age: 20, city: "Jamtara"},
    {name: "Amit", age: 22, city: "Dhanbad"},
    {name: "Sita", age: 19, city: "Jamtara"},
    {name: "Gita", age: 21, city: "Dhanbad"},
    {name: "Raju", age: 23, city: "Jamtara"}
  ];
  return (
    <div>
      <h1>Loops in JSX with map function</h1>
      <ul>
        {UserData.map((user, index) => (
          <li key={index}>
            {user.name} is {user.age} years old and lives in {user.city}.
          </li>
        ))}
      </ul>

      <h2>Reuse Components In Loop</h2>
      {
        UserData.map((user)=>(
          <div key={user.age}>
            <User data={user} />
          </div>
        ))
      }
      

    </div>
  );
}

export default Loops;