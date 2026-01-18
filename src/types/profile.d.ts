export type MainTab = "received" | "sent" | "blocked";
export type ProfileStatus = "pending" | "accepted" | "rejected";

export interface ProfileData {
  /* ===== Meta / Status Info ===== */
  id: string;
  profileId: string;
  mainTab: MainTab;
  status: ProfileStatus;

  /* ===== Images ===== */
  coverImage: string;
  profileImage: string; 
  images: string[];

  /* ===== Basic Info ===== */
  name: string;
  about: string;
  email:string;
  mobileNumber:string;
  basicInfo: {
    age: number;
    religion: string;
    gender: string;
  };

  /* ===== More Personal Info ===== */
  moreInfo: {
    height: string;
    weight: string;
    skinTone: string;
    bodyType: string;
    community: string;
    profileFor: string;
    maritalStatus: string;
  };

  /* ===== Family Info ===== */
  family: {
    fatherStatus: string;
    fatherOccupation: string;
    motherStatus: string;
    motherOccupation: string;
    siblings: string;
    sisters: string;
    affluence: string;
    livesIn: string;
  };

  /* ===== Education & Career ===== */
  education: {
    education: string;
    institute: string;
    profession: string;
    monthlyIncome: string;
    areaField: string;
    company: string;
  };

  /* ===== Address ===== */
  address: {
    homeDistrict: string;
    city: string;
    country: string;
    postalCode: string;
    location: string;
  };

  /* ===== Lifestyle ===== */
  lifestyle: {
    smoking: boolean;
    drinking: boolean;
    vegetarian: boolean;
    annoyane: boolean;
    badMood: boolean;
    recklessDriving: boolean;
    hobbies: string;
  };
}

/* ===== Status Based Grouping ===== */
export interface FilteredProfiles {
  pending: ProfileData[];
  accepted: ProfileData[];
  rejected: ProfileData[];
}
