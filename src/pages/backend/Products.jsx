import { NavLink } from "react-router";
import { toast } from "react-toastify";

const Products = () => {
  return (
    <>
      <div class="table-container">
        <div className="table-headding">
          <h2>PRODUCT TABLE</h2>
          <NavLink to={`/admin/products/add`}>
            <button>ADD</button>
          </NavLink>
        </div>
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>TYPE</th>
                <th>STOCK</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="#" />
                </td>
                <td>Asian Paints</td>
                <td>Paint</td>
                <td>26</td>
                <td>Rs. 1620</td>
                <td className="table-btns">
                  <NavLink to={`/admin/products/edit`}>
                    <button className="edit-btn">EDIT</button>
                  </NavLink>
                  <button
                    className="del-btn"
                    onClick={() => {
                      toast.error("Deleted");
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
