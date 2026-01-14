export type MainTab = "received" | "sent" | "blocked"
export type ProfileStatus = "pending" | "accepted" | "rejected"

export interface ProfileData {
  id: string;
  name: string;
  age: number;
  height: string;
  bloodGroup: string;
  city: string;
  religion: string;
  maritalStatus: string;
  about: string;
  image: string;
  mainTab: MainTab;
  status: ProfileStatus;
}

export interface FilteredProfiles {
  pending: ProfileData[]
  accepted: ProfileData[]
  rejected: ProfileData[]
}