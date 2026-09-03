const ProductCard = ({item}:any) => {
    console.log(item);
    
  return (
    <div className="border p-2 rounded-sm">
        <h2 className="font-bold">Name : {item.name}</h2>
        <p className="font-medium">UserName : {item.username}</p>
        <p className="">Address : {item.address.street}</p>
        <p>Email : {item.email}</p>
        <p>Website : {item.website}</p>

    </div>
  )
}

export default ProductCard