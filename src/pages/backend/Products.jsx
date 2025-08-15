const Products = () => {
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
                <th>TYPE</th>
                <th>STOCK</th>
                <th>PRICE</th>
                <th>ADDED DATE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Asian Paints</td>
                <td>Paint</td>
                <td>26</td>
                <td>Rs. 1620</td>
                <td>2025 - 08 - 15</td>
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

export default Products;
