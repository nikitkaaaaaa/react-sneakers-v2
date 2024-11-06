export default interface InterfaceRigthSideProduct {
  price: number | undefined;
  brand: string | undefined;
  title: string | undefined;
  category: string | undefined;
  imageUrl: string | undefined;
  parentId: string | undefined;
  id: string | undefined;
  currentInfoProduct: string | JSX.Element;
  setCurrentInfoProduct: React.Dispatch<
    React.SetStateAction<string | JSX.Element>
  >;
  infoProduct: (
    | {
        title: string;
        value: JSX.Element;
      }
    | {
        title: string;
        value: string;
      }
  )[];
}
