import InerfaceCart from "../cartApi/InerfaceCart";

interface IbuyProduct {
  title: string;
  brand: string;
  size: string;
  imageUrl: string;
  count: number;
  id: string;
  parentId: number;
}

export default interface InterfacepurchasedProducts {
  products: InerfaceCart[] | IbuyProduct;
  totalPrice: number;
  name: string;
  phone: string;
  email?: string;
  massage?: string;
  deliveryAddress?: string;
  promotionalСode?: string;
}
