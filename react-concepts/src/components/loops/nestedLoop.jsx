import Show from "./show";

function CollegeData(){
const collegeData = [
  {
    name: "ABC College",
    location: "New York",
    students: [
      { name: "Alice", age: 20 },
      { name: "Bob", age: 22 },
    ]
  },
  {
    name: "XYZ University",
    location: "California",
    students: [
      { name: "Charlie", age: 21 },
      { name: "David", age: 23 },
    ]
  }
];

  return (
    <>
      <h2>College Data</h2>
      <ul>
        {collegeData.map((college, index) => (
          <li key={index}>
          <Show college={college} />
        </li>
      ))}
    </ul>
      
      
    </>
  )
}

export default CollegeData;
