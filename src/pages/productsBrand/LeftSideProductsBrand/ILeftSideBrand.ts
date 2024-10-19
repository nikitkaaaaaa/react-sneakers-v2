export default interface ILeftSideBrand {
  selectedGender: string[];
  setSelectedGender: (gender: string[]) => void;
  selectedSeason: string[];
  setSelectedSeason: (season: string[]) => void;
  priceFrom: string;
  setPriceFrom: (price: string) => void;
  priceTo: string;
  setPriceTo: (price: string) => void;
  onChoiseCategory: (value: string) => void;
}
