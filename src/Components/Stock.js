const Stock = (stockStatus) => {
  console.log(stockStatus)

  
  return (
    <div>
        {stockStatus.stockStatus > 1 && <div className="stock stockGreen"></div>}
        {stockStatus.stockStatus === 1 && <div className="stock stockYellow"></div>}
        {stockStatus.stockStatus === 0 && <div className="stock stockRed"></div>}
  {/* <div className="stock {`${stockStatus.stockStatus}`}">{stockStatus.stockStatus}</div> */}
    </div>
  )
};

export default Stock;
