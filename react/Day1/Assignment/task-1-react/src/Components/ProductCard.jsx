

const ProductCard = () => {
  return (
    <div className=" flex justify-center  bg-gradient-to-r from-red-500 to-white p-7">
        
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-center w-70 h-fit rounded-4xl space-y-4">
            <h1 className=" font-bold">Product Details</h1>
            <p className="mt-2"><span>Product Name :</span> IPhone</p>
            <p><span>price :</span> 80000</p>
            <p><span>Category :</span> Electronics</p>
            <p><span>Discription :</span> IPhone 17 pro max</p>
        </div>
        
    </div>
  )
}

export default ProductCard