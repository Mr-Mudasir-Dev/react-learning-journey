const Arrayobj = ({ edu }) => {
  return (
    <>
      <li className="list-group-item">
        <p>
          <strong>Semester:</strong> {edu.semester}
        </p>
        <p>English: {edu.english}</p>
        <p>Urdu: {edu.urdu}</p>
        <p>Math: {edu.math}</p>
      </li>
    </>
  );
};

export default Arrayobj;
