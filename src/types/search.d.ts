interface SearchFilters {
  gender: string;
  religion: string;
  age: string;
  maritalStatus: string;
  city: string;
  country: string;
  birthPlace: string;
  height: string;
  monthlyIncome: string;
  bloodGroup: string;
  profession: string;
  education: string;
  hideAddedProfiles: boolean;
  hideBlockedProfiles: boolean;
}

interface SelectFieldConfig {
  id: string;
  label: string;
  key: keyof SearchFilters;
  options: string[];
}
