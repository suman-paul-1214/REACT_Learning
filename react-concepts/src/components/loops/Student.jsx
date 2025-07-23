const Student =({students})=> {
  return (
    <div>
      <h4>Students:</h4>
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                {student.name} - Age: {student.age}
              </li>
            ))}
          </ul>
    </div>
  );
}
export default Student;