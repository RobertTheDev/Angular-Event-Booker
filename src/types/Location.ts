interface Location {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  address: string;
  town: string;
  region: string;
  country: string;
}

export default Location;
