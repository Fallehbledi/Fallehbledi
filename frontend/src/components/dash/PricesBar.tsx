

const PricesBar = () => {
  return (
    <div className="bg-white  rounded-lg p-4 flex items-center justify-center space-x-4">
    <div className="font-semibold text-gray-700">
        MARKET PRICES
    </div>
    <div className="border-l h-6 border-gray-300 "></div>
    <div className="flex items-center space-x-4">
    <span className="text-[#058f1a] font-semibold">K 16.2%</span>
        <span className="text-[#058f1a] font-semibold">TSN 2.1%</span>
        <span className="text-[#058f1a] font-semibold">CRWD 1.9%</span>
        <span className="text-red-500 font-semibold">CZR -6.9%</span>
        <span className="text-red-500 font-semibold">WBA -6.6%</span>
        <span className="text-red-500 font-semibold">ETSY -6.6%</span>
        <span className="text-red-500 font-semibold">INTC -6.4%</span>
    </div>
</div>

  )
}

export default PricesBar