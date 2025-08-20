import { NavLink } from "react-router";
import UserRow from "../../components/backend/UserRow";
import { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../services/backend/userData";

const Users = () => {
  const [users, setUser] = useState([]);

  // Page Indexing
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = users.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(users.length / recordsPerPage);
  const totalNumbers = [...Array(nPages + 1).keys()].slice(1);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUser(response);
    });
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        getAllUsers().then((response) => {
          setUser(response);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <div className="table-container">
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
              <UserRow userData={records} handleDelete={handleDelete} />
            </tbody>
          </table>

          <div className="table-number-section">
            <ul className="table-number-list">
              <li className="table-option">
                <a onClick={previousPage}>Prev</a>
              </li>
              {totalNumbers.map((num, index) => {
                return (
                  <li
                    className={`table-numbers ${
                      currentPage === num ? "active" : ""
                    }`}
                    key={index}
                  >
                    <a onClick={() => changeCurrentPage(num)}>{num}</a>
                  </li>
                );
              })}
              <li className="table-option">
                <a onClick={nextPage}>Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
