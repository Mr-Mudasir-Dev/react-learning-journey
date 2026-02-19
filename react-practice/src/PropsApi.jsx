function PropsApi({ Api }) {
  return (
    <>
      {Api.map((i) => (
        <tr key={i.id}>
          <th>{i.id}</th>
          <td>{i.name}</td>
          <td>{i.age}</td>
          <td>{i.email}</td>
        </tr>
      ))}
    </>
  );
}

export default PropsApi;
