import { UserRole } from "@/lib/auth-utils";
import { IAdmin } from "./admin.interface";
import { ITraveler } from "./traveler.interface";

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  needPasswordChange: boolean;
  status: "ACTIVE" | "BLOCKED" | "DELETED";
  admin?: IAdmin;
  traveler?: ITraveler;
  createdAt: string;
  updatedAt: string;
}
