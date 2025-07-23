import Student from './Student';

function Show({ college }) {
  return (
    <div style={{ backgroundColor: "grey", padding: '10px', margin: '10px', borderRadius: '25px' }}>
      <h3>{college.name}</h3>
      <p>Location: {college.location}</p>
      <Student students={college.students} />
    </div>
  );
}

export default Show;
