module.exports = function main(inputs) {
    // write your code here...
    /**
     * 我们考虑出租车计价问题，出租车的运价是每公里0.8元，
     * 八公里起会加收50%的每公里运价，起步价是两公里以内6块，
     * 停车等待时加收每分钟0.25元，最后计价的时候司机会四舍五入只收整块钱。
     * {distance:1,parkTime:5}
     */
    const startPrice = 6
    const startDistance = 2
    const priceOfKM = 0.8
    const farDistance = 8
    const parkprice = 0.25
    let price;
    if(inputs['distance'] <=startDistance ){
        price = startPrice
    }else if(inputs['distance'] <= farDistance ){
        price = startPrice + (inputs['distance']-startDistance) * priceOfKM;
    }else{
        price = startPrice + (farDistance-startDistance) *  priceOfKM + (inputs['distance']-farDistance)*priceOfKM*1.5
    }
    price += inputs['parkTime'] * parkprice
    price = Math.round(price);
    return price;
};
