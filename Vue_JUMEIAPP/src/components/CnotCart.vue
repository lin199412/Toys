<template>
    <div class="page bg-empty">
        <div class="cart-no-goods">
            <div class="oops"></div>
            <div class="empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
            <div class="go-stroll">去逛逛</div>
        </div>
    </div>
</template>
<style scoped>
.page.bg-empty {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 625px;
}
.cart-no-goods {
  -ms-flex: 1;
  flex: 1;
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
.cart-no-goods .oops {
  width: 86px;
  height: 82px;
  background: url(https://f5.jmstatic.com/static_cart_mobile/images/no-card-oops.png)
    no-repeat;
  background-size: 100% 100%;
}
.cart-no-goods .empty-cart {
  font-size: 14px;
  line-height: 15px;
  color: #333;
  margin-top: 16px;
  padding: 0 12px;
  text-align: center;
}
.cart-no-goods .go-stroll {
  width: 125px;
  height: 36px;
  border-radius: 1.25rem;
  color: #fff;
  background: #fe4070;
  line-height: 36px;
  text-align: center;
  margin-top: 23px;
  font-size: 14px;
}
</style>
