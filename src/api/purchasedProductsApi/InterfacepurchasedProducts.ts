import InerfaceCart from "../cartApi/InerfaceCart";

export default interface InterfacepurchasedProducts {
  products: InerfaceCart[];
  totalPrice: number;
  name: string;
  phone: string;
  email: string;
  massage?: string;
  deliveryAddress?: string;
}
