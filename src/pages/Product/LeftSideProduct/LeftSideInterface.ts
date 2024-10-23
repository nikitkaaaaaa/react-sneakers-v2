export default interface LeftSideInterface {
  title: string | undefined;
  id: string | undefined;
  price: number | undefined;
  imageUrl: string[] | undefined;
  currentImage: string;
  currentInfoProduct: string | JSX.Element;
  setCurrentInfoProduct: React.Dispatch<
    React.SetStateAction<string | JSX.Element>
  >;
  setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
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
