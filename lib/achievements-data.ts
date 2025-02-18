export type Achievement = {
  conference: string
  year: number
  awards: {
    delegate: string
    award: string
    committee: string
  }[]
}

export const achievements: Achievement[] = [
  {
    conference: "YLGC",
    year: 2024,
    awards: [
      { delegate: "Sanjay AR", award: "Verbal Mention", committee: "UNSC" },
      { delegate: "Aravind S", award: "Verbal Mention", committee: "UNSC" },
      { delegate: "Shruti S", award: "Honourable Mention", committee: "UNGA" },
      { delegate: "Navanith S", award: "Verbal Mention", committee: "UNGA" },
    ],
  },
  {
    conference: "Amrita-MUN",
    year: 2024,
    awards: [
      { delegate: "Khushi Kapil", award: "High Commendation", committee: "AIPPM" },
      { delegate: "Thilagan Iniyavan", award: "Special Mention", committee: "IPC" },
      { delegate: "RD Tarun", award: "Verbal Mention", committee: "UNCTAD" },
      { delegate: "Ishitha Praveen", award: "Verbal Mention", committee: "UNHCR" },
      { delegate: "Sanjay AR", award: "Special Mention", committee: "UNSC" },
      { delegate: "Navanith S", award: "Special Mention", committee: "UNSC" },
      { delegate: "Pranav Arcot", award: "Honourable Mention", committee: "UNSC" },
      { delegate: "Vinaayak K", award: "Honourable Mention", committee: "UNSC" },
    ],
  },
  {
    conference: "SSN-SNUC MUN",
    year: 2024,
    awards: [
      { delegate: "Sanjay AR", award: "Honourable Mention", committee: "NITI Aayog" },
      { delegate: "Vinaayak K", award: "Special Mention", committee: "Plenary Committee" },
      { delegate: "Thilagan Iniyavan", award: "Special Mention", committee: "IPC" },
    ],
  },
  {
    conference: "KCT-MUN",
    year: 2024,
    awards: [
      { delegate: "Sankara Narayanan M", award: "High Commendation", committee: "AIPPM" },
      { delegate: "Navanith S", award: "Special Mention", committee: "AIPPM" },
      { delegate: "Aravind S", award: "Verbal Mention", committee: "AIPPM" },
      { delegate: "Pranav K", award: "Verbal Mention", committee: "AIPPM" },
      { delegate: "Vinaayak K", award: "Best Delegate", committee: "HCC" },
      { delegate: "Ramsreyas J", award: "High Commendation", committee: "HCC" },
      { delegate: "R Venkatesh", award: "Special Mention", committee: "HCC" },
      { delegate: "Aakash Sriram", award: "Honourable Mention", committee: "HCC" },
      { delegate: "Anton Rejoe", award: "Verbal Mention", committee: "HCC" },
      { delegate: "Thilagan Iniyavan", award: "Best Photographer", committee: "IPP" },
      { delegate: "Kavinesh P", award: "Verbal Mention", committee: "UNEP" },
      { delegate: "RG Shanmugam", award: "High Commendation", committee: "UNHRC" },
      { delegate: "Aswath Siddarth R", award: "Special Mention", committee: "UNHRC" },
      { delegate: "Nethi Kushala Kumar", award: "Honourable Mention", committee: "UNHRC" },
      { delegate: "Adithya Anish Nair", award: "Best Delegation", committee: "UNSC" },
      { delegate: "Arman Mahapatra", award: "Best Delegation", committee: "UNSC" },
      { delegate: "Vimal Harihar", award: "Special Mention", committee: "UNSC" },
      { delegate: "RD Tarun", award: "Special Mention", committee: "UNSC" },
      { delegate: "Rohit Sundar V", award: "Verbal Mention", committee: "UNSC" },
      { delegate: "KCK Sanjai", award: "Verbal Mention", committee: "UNSC" },
    ],
  },
  {
    conference: "NUALS-MUN",
    year: 2025,
    awards: [
      { delegate: "Aakash Sriram", award: "Best Delegate", committee: "DISEC" },
      { delegate: "Adithya Anish Nair", award: "Verbal Mention", committee: "DISEC" },
    ],
  },
  {
    conference: "VIT-Vellore",
    year: 2024,
    awards: [
      { delegate: "Sanjay AR", award: "Honourable Mention", committee: "UNSC" },
      { delegate: "Navanith Sampath Kumar", award: "Special Mention", committee: "AIPPM" },
    ],
  },
  {
    conference: "SRM-MUN",
    year: 2024,
    awards: [
      { delegate: "Sanjay AR", award: "Special Mention", committee: "Lok Sabha" },
      { delegate: "Navanith Sampath Kumar", award: "Verbal Mention", committee: "Lok Sabha" },
    ],
  },
]

