const FoodItemList = () => {
  return (
    <div>
      <h1>Food Items</h1>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pizza</td>
            <td>300</td>
            <td>Best Seller</td>
            <td>Image</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Pizza</td>
            <td>300</td>
            <td>Best Seller</td>
            <td>Image</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Pizza</td>
            <td>300</td>
            <td>Best Seller</td>
            <td>Image</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
