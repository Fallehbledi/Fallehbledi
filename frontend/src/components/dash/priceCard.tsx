const priceCard = () => {
  return (

    <div className="max-w-sm mx-auto bg-white shadow-md rounded-3xl p-8">
    <div className="flex items-center text-xl font-semibold border-b pb-2 space-x-3">
      <img className="h-10 w-10" src="http://sotumag.com.tn/test_sotumag/site/htdocs/upload/produit/prod3.gif" alt="" />
      <div className="text-3xl font-bold mt-2">
        Tomates
    </div>
    </div>
    <div className="text-3xl font-bold mt-2">
        0.800 TND
    </div>
    <div className="text-red-600 text-lg mt-1">
        -0.050 -2.60%
    </div>
    <div className="text-gray-500 text-sm mt-4">
        Last Updated: Aug 5, 2024 4:57 p.m. EDT
    </div>
</div>
  
)
}

export default priceCard