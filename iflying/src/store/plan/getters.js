export default {
    goodsCount(state){
        //商品的总数量和总价
        let goodsNum = 0,goodsPrice = 0;

        state.goodsList.map((item)=>{
            if(item.goodsFlag){
                goodsNum ++;
                goodsPrice += item.goodsPrice;
            }
        })

        return {
            goodsNum,
            goodsPrice
        }

    }
}