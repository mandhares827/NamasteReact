const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ul key={item._id}>
          <li>{item.name}</li>
          <li>Category: {item.isVeg ? "Veg" : "Non-Veg"}</li>
          <li>Description: {item.description}</li>
          <li>Price: {item.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ItemList;
