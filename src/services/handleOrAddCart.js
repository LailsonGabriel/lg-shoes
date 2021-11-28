export async function handleOrAddCart(shoe, cart, invetory, notify, dispatch, addCart, increase) {
  const shoeExistInCart = cart.filter((product) => shoe.id === product.id)[0];
  const inventoryShoe = invetory[0].find((product) => shoe.id === product.id);
  const newCart = cart.map((product) => {
    if(product.id === shoe.id) return {...product, quantity: product.quantity + 1}
    return product
  });
  if(shoeExistInCart?.quantity === inventoryShoe.quantity) return notify();
  if(shoeExistInCart) return dispatch(increase(newCart));
  dispatch(addCart({ ...shoe, quantity: 1 }));
};

export function DecreaseQuantity(shoe, cart, dispatch, action) {
  const showInCart = cart.find((current) => current.id === shoe.id);
  if(showInCart.quantity === 1) return;
  const newCart = cart.map((product) => {
    if(product.id === shoe.id) return {...product, quantity: product.quantity - 1}
    return product
  });
  dispatch(action(newCart));
}
