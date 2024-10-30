export const members = [
  {
    id: 1,
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

interface User {
  id: number;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
}

export const users: User[] = [
  {
    id: 1,
    name: "User 1",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    isOnline: true,
  },
  {
    id: 2,
    name: "User 2",
    avatarUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    isOnline: true,
  },
  {
    id: 3,
    name: "User 3",
    avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    isOnline: false,
  },
];
