export interface ParkingSpace {
  _id: string;            // fra databasen
  id: string;             // kopi af _id – bruges af UI

  title?: string;         // resten er dine eksisterende felter
  name?: string;          // (vælg selv om du vil bruge title eller name)
  address?: string;
  description?: string;
  images?: string[];
  pricePerHour?: number;
  price?: number;         // databasen bruger price
  rating?: number;
  reviewCount?: number;
  availabilityText?: string;
  features?: string[];

  owner?: {
    id: string;
    name: string;
    rating: number;
  };

  reviews?: {
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}
