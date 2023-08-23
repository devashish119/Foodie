import cartItemModel from "./shoppingCartModel";

export default interface shoppingCartModel {
  id?: number;
  userId?: string;
  cartItems?: cartItemModel [];
  cartTotal?: number;
  stripePaymentIntentId?: any;
  clientSecret?: any;
  quantity?: number;
}