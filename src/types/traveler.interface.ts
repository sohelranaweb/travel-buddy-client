// export interface ITraveler {
//   id?: string;
//   email: string;
//   name: string;
//   profilePhoto?: string | null;
//   contactNumber: string;
//   address: string;
//   gender: string;
//   isDeleted: boolean;
//   createdAt: string;
//   updatedAt: string;
// }

export interface ITraveler {
  id?: string;
  name: string;
  email: string;
  profilePhoto: string | null;
  contactNumber: string;
  gender?: "MALE" | "FEMALE" | null;
  bio?: string | null;
  travelInterests?: string[];
  visitedCountries?: string[];
  currentLocation?: string | null;
  address?: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
