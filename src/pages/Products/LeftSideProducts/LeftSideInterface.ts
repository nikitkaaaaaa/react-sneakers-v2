export default interface LeftSideInterface {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedGender: string[];
  setSelectedGender: (gender: string[]) => void;
  selectedSeason: string[];
  setSelectedSeason: (season: string[]) => void;
  priceFrom: string;
  setPriceFrom: (price: string) => void;
  priceTo: string;
  setPriceTo: (price: string) => void;
  onChoiseCategory: (value: string) => void;
  isBrandPage: string | undefined;
}
