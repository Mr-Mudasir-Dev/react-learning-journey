function UserApi({data}) {
  return (
    <>
      <tr>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.email}</td>
      </tr>
    </>
  );
}

export default UserApi;
