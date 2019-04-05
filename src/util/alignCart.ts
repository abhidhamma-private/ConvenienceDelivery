const alignCart = cart => {
  // 1.카트의 product에 cnt를 준다.

  // tslint:disable-next-line
  let addCntCart = cart.map(product => {
    const cnt = 0;
    product = { ...product, cnt };
    return product;
  });
  console.log('addCntCart');
  console.log(addCntCart);

  // 2.중복되는 id의 product가 있으면 그 product를 삭제하고
  // 첫번째 product의 cnt를 증가시킨다.
  // 그러면 product가 다 사라지고 하나만 남을것이다.

  // tslint:disable-next-line
  let sortCart = addCntCart.filter((product, addCntCartIndex, oldcart) => {
    console.log('addCntCartIndex');
    console.log(addCntCartIndex);

    return (
      addCntCartIndex ===
      oldcart.findIndex((sameproduct, sameIndex) => {
        // tslint:disable-next-line
        console.log('sameIndex');
        console.log(sameIndex);

        return sameproduct.productId === product.productId;
      })
    );
  });

  // 3.이것을 모든 중복되는 product에 반복한다.

  // tslint:disable-next-line
  let oldCart = addCntCart;
  // tslint:disable-next-line
  oldCart.map(product => {
    // tslint:disable-next-line
    for (let i = 0; i < sortCart.length; i++) {
      if (sortCart[i].productId === product.productId) {
        sortCart[i].cnt += 1;
      }
    }
  });

  return sortCart;
};
export default alignCart;
