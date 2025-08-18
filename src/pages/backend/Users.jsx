import { NavLink } from "react-router";

const Users = () => {
  return (
    <>
      <div class="table-container">
        <div className="table-headding">
          <h2>USER TABLE</h2>
          <NavLink to={`/users/add`}>
            <button>ADD</button>
          </NavLink>
        </div>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>CONTACT</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Saliv Maharjan</td>
                <td>salivmrj@gmail.com</td>
                <td>Kirtipur-8, Kathmandu</td>
                <td>+977 9866445340</td>
                <td>Admin</td>
                <td className="table-btns">
                  <NavLink to={`/users/edit`}>
                    <button className="edit-btn">EDIT</button>
                  </NavLink>
                  <button className="del-btn">DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
