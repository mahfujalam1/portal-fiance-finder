const SEARCH_FIELD_CONFIGS: SelectFieldConfig[] = [
  {
    id: "gender",
    label: "Gender",
    key: "gender",
    options: ["Male", "Female"],
  },
  {
    id: "religion",
    label: "Religion",
    key: "religion",
    options: ["Islam", "Hindu", "Christian", "Buddhist", "Other"],
  },
  {
    id: "age",
    label: "Age",
    key: "age",
    options: ["18-25", "26-30", "31-35", "36-40", "41-45", "46+"],
  },
  {
    id: "marital-status",
    label: "Marital Status",
    key: "maritalStatus",
    options: ["Never Married", "Divorced", "Widowed", "Separated"],
  },
  {
    id: "city",
    label: "City",
    key: "city",
    options: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal"],
  },
  {
    id: "country",
    label: "Country",
    key: "country",
    options: [
      "Bangladesh",
      "India",
      "Pakistan",
      "USA",
      "UK",
      "Canada",
      "Australia",
    ],
  },
  {
    id: "birth-place",
    label: "Birth Place",
    key: "birthPlace",
    options: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal"],
  },
  {
    id: "height",
    label: "Height",
    key: "height",
    options: [
      "4'0\" - 4'11\"",
      "5'0\" - 5'5\"",
      "5'6\" - 5'11\"",
      "6'0\" - 6'5\"",
      "6'6\"+",
    ],
  },
  {
    id: "income",
    label: "Monthly Income",
    key: "monthlyIncome",
    options: ["Below 20k", "20k-40k", "40k-60k", "60k-80k", "80k-1L", "1L+"],
  },
  {
    id: "blood-group",
    label: "Blood Group",
    key: "bloodGroup",
    options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  {
    id: "profession",
    label: "Profession",
    key: "profession",
    options: [
      "Doctor",
      "Engineer",
      "Teacher",
      "Business",
      "Government Service",
      "Private Service",
      "Other",
    ],
  },
  {
    id: "education",
    label: "Education",
    key: "education",
    options: ["SSC", "HSC", "Bachelor", "Masters", "PhD"],
  },
];

// Basic fields (first 5)
export const BASIC_FIELDS = SEARCH_FIELD_CONFIGS?.slice(0, 5);
 // Extended fields (remaining)
export const EXTENDED_FIELDS = SEARCH_FIELD_CONFIGS?.slice(5);
