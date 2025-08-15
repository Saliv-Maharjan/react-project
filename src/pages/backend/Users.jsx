const Users = () => {
  return (
    <>
      <div class="table-container">
        <div className="table-headding">
          <h2>USER TABLE</h2>
          <button>ADD</button>
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
                  <button className="edit-btn">EDIT</button>
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
