import { NavLink } from "react-router";

const UserRow = (props) => {
  return (
    <>
      {props.userData &&
        props.userData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
              <td>{data.number}</td>
              <td>{data.role}</td>
              <td className="table-btns">
                <NavLink to={`/admin/users/edit/${data.id}`}>
                  <button className="edit-btn">EDIT</button>
                </NavLink>
                <button
                  className="del-btn"
                  onClick={() => props.handleDelete(data.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          );
        })}
    </>
  );
};

export default UserRow;
