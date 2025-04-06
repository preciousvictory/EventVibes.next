export const featuredMedia = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Tech Conference Keynote',
    likes: 124,
    comments: 23,
    eventId: '1',
    eventName: 'DevCon 2023',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Networking Session',
    likes: 88,
    comments: 12,
    eventId: '2',
    eventName: 'Blockchain Summit',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Panel Discussion',
    likes: 56,
    comments: 8,
    eventId: '1',
    eventName: 'DevCon 2023',
  },
];

export type PhotoView = {
  id: string;
  creator: string;
  name: string;
  image: string;
  time_takes: Date;
  Location: string;
  total_likes: number;
  tags?: string[];
  category?: string;
}

// AI Search Data
export const aiPhotos: PhotoView[] = [
  // Speaking Events
  {
    id: "1",
    creator: "Ashley",
    name: "Ashley's Keynote",
    image: "ashleySpeaking.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 156,
    tags: ["speaking", "keynote", "ashley"],
    category: "speaking"
  },
  {
    id: "2",
    creator: "gospel",
    name: "Gospel's Tech Talk",
    image: "gospelspeaking.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 142,
    tags: ["speaking", "tech", "gospel"],
    category: "speaking"
  },
  {
    id: "3",
    creator: "Wills",
    name: "Wills Workshop",
    image: "willsspeaking.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 134,
    tags: ["speaking", "workshop", "wills"],
    category: "speaking"
  },
  {
    id: "4",
    creator: "Femi",
    name: "Femi's Presentation",
    image: "femispeaking.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 128,
    tags: ["speaking", "presentation", "femi"],
    category: "speaking"
  },
  // Networking Events
  {
    id: "5",
    creator: "Team",
    name: "Joshua Networking",
    image: "networkingJosh.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 98,
    tags: ["networking", "portrait", "joshua"],
    category: "networking"
  },
  {
    id: "6",
    creator: "Team",
    name: "Group Discussion",
    image: "networkingone.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 87,
    tags: ["networking", "group", "discussion"],
    category: "networking"
  },
  {
    id: "7",
    creator: "Team",
    name: "Team Building",
    image: "network3.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 92,
    tags: ["networking", "team", "collaboration"],
    category: "networking"
  },
  // Karaoke Events
  {
    id: "8",
    creator: "Victory",
    name: "Victory's Performance",
    image: "karokeVictory.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 176,
    tags: ["karaoke", "singing", "victory"],
    category: "karaoke"
  },
  {
    id: "9",
    creator: "Team",
    name: "Karaoke Night",
    image: "karokenigga.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 145,
    tags: ["karaoke", "singing", "group"],
    category: "karaoke"
  },
  {
    id: "10",
    creator: "Team",
    name: "Music Session",
    image: "karokegirl.jpg",
    time_takes: new Date(),
    Location: "Lagos, Nigeria",
    total_likes: 134,
    tags: ["karaoke", "singing", "performance"],
    category: "karaoke"
  }
];

export type ImageView = {
  event_profile: string,
  event_banner: string,
  event_POAP: string,
}

export type EventView = {
  id: string,
  creator: string,
  time: Date,
  location: string,
  name: string,
  description: string,
  eventImages: ImageView,
  total_Images: number,
  total_likes: number
}

export type categoriesProps = {
  title: string,
  events: EventView[]
}

export const trendingEvents: EventView[] = [
  {
    id: '1',
    creator: "Sui X Semicolon",
    time: new Date('2025-03-24'),
    location: 'Yaba, Lagos',
    name: "Sui Lagos Hacker House",
    description: 'Sui Hacker House featured workshops, mentorship and coaching sessions, hacking activities, and networking opportunities to encourage innovation and collaboration.',
    eventImages: {
      event_profile: 'SuiPreview.jpg',
      event_banner: 'suiBanner.jpg',
      event_POAP: 'images/image4.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
  {
    id: '2',
    creator: "Sui On Campus",
    time: new Date('2024-04-23'),
    location: 'San Francisco, CA',
    name: "FlutterBytes",
    description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
    eventImages: {
      event_profile: 'images/image4.jpeg',
      event_banner: 'images/banner.jpeg',
      event_POAP: 'images/image4.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
]

export const categories: categoriesProps[] = [
  {
    title: "Entertainments",
    events: [
      {
        id: '1',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '2',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '3',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '4',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image1.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image1.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '5',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
    ]
  },
  {
    title: "Conferences",
    events: [
      {
        id: '1',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '2',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "FlutterBytes",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '3',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Sui Hackathon",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '4',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image1.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image1.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '5',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '6',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image3.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image3.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
    ]
  },
  {
    title: "Sports & Fitness",
    events: [
      {
        id: '1',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '2',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "FlutterBytes",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '3',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Sui Hackathon",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '4',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image1.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image1.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '5',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '6',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image3.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image3.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
    ]
  },
]


export const photos: PhotoView[] = [
  {
    id: "1",
    creator: "Precious Victory",
    name: "Image 1",
    image: "karokeVictory.jpg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'San Francisco, CA',
    total_likes: 49
  },
  {
    id: "2",
    creator: "Umar Faruq",
    name: "Image 2",
    image: "femispeaking.jpg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'San Francisco, CA',
    total_likes: 49
  },
  {
    id: "3",
    creator: "Joshua Obimba",
    name: "Karoke",
    image: "karokeburna.jpg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'San Francisco, CA',
    total_likes: 49
  },
  {
    id: "4",
    creator: "Gospel",
    name: "Gospel Speaking",
    image: "gospelspeaking.jpg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'Lagos, Nigeria',
    total_likes: 49
  },
  {
    id: "5",
    creator: "Ashley",
    name: "Ashley Keynote",
    image: "ashleySpeaking.jpg",
    time_takes: new Date('25th April, 2024'),
    Location: 'Lagos, Nigeria',
    total_likes: 87
  },
  {
    id: "6",
    creator: "Kim",
    name: "Tech Panel",
    image: "kimspeaking.jpg",
    time_takes: new Date('26th April, 2024'),
    Location: 'Lagos, Nigeria',
    total_likes: 62
  },
  {
    id: "7",
    creator: "Ashley",
    name: "Second Talk",
    image: "ashleyspeaking2.jpg",
    time_takes: new Date('27th April, 2024'),
    Location: 'Lagos, Nigeria',
    total_likes: 73
  },
  {
    id: "8",
    creator: "Joshua",
    name: "Networking Session",
    image: "JoshuaNetwork.jpg",
    time_takes: new Date('28th April, 2024'),
    Location: 'Lagos, Nigeria',
    total_likes: 56
  },
  {
    id: "9",
    creator: "Team",
    name: "Group Performance",
    image: "karokenigga.jpg",
    time_takes: new Date('29th April, 2024'),
    Location: 'Lagos, Nigeria',
    total_likes: 92
  },
  {
    id: "10",
    creator: "Team",
    name: "Solo Performance",
    image: "karokenigga2.jpg",
    time_takes: new Date('30th April, 2024'),
    Location: 'Lagos, Nigeria',
    total_likes: 78
  },
  {
    id: "11",
    creator: "Sarah",
    name: "Karaoke Night",
    image: "karokegirl.jpg",
    time_takes: new Date('1st May, 2024'),
    Location: 'Abuja, Nigeria',
    total_likes: 85
  },
  {
    id: "12",
    creator: "Team",
    name: "Networking One",
    image: "networkingone.jpg",
    time_takes: new Date('2nd May, 2024'),
    Location: 'Abuja, Nigeria',
    total_likes: 67
  },
  {
    id: "13",
    creator: "Grace",
    name: "Portrait Session",
    image: "potrait1.jpg",
    time_takes: new Date('3rd May, 2024'),
    Location: 'Abuja, Nigeria',
    total_likes: 59
  },
  {
    id: "14",
    creator: "David",
    name: "Portrait Two",
    image: "potrait2.jpg",
    time_takes: new Date('4th May, 2024'),
    Location: 'Abuja, Nigeria',
    total_likes: 71
  }
]