export interface ITraveler {
  id?: string;
  email: string;
  name: string;
  profilePhoto?: string | null;
  contactNumber: string;
  address: string;
  gender: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}
