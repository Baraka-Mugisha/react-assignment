import { Task } from "../types/common";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Footer Design",
    description: "Landing Page UI",
    status: "To do",
    timeline: {
      start: "2024-10-01",
      end: "2024-10-07",
    },
    users: [
      {
        id: 1,
        name: "User One",
        avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        isOnline: true,
      },
      {
        id: 2,
        name: "User Two",
        avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        isOnline: true,
      },
    ],
    comments: [
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
      {
        id: 1,
        user: {
          id: 1,
          name: "User One",
          avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          isOnline: true,
        },
        time: "2024-10-01T10:00:00",
        content: "This task should be done by end of the week.",
      },
    ],
    createdAt: "2024-10-01T09:00:00",
    updatedAt: "2024-10-02T14:00:00",
  },
  {
    id: 2,
    title: "Header Design",
    description: "Landing Page UI",
    status: "Completed",
    timeline: {
      start: "2024-09-20",
      end: "2024-09-25",
    },
    users: [
      {
        id: 1,
        name: "User One",
        avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        isOnline: true,
      },
    ],
    comments: [],
    createdAt: "2024-09-18T11:00:00",
    updatedAt: "2024-09-26T16:00:00",
  },
  {
    id: 3,
    title: "New Landing Project",
    description: "Landing Page UI",
    status: "In Progress",
    timeline: {
      start: "2024-10-05",
      end: "2024-10-20",
    },
    users: [
      {
        id: 2,
        name: "User Two",
        avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        isOnline: true,
      },
      {
        id: 3,
        name: "User Three",
        avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        isOnline: false,
      },
    ],
    comments: [
      {
        id: 1,
        user: {
          id: 3,
          name: "User Three",
          avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
          isOnline: false,
        },
        time: "2024-10-06T13:30:00",
        content: "Is the design finalized?",
      },
    ],
    coverImageUrl:
      "https://res.cloudinary.com/dboqnapgi/image/upload/v1724152362/productUpload/Tome%20Donjhb_ImageUrls_1724152357938_huza.PNG.png",
    createdAt: "2024-10-05T10:00:00",
  },
  {
    id: 4,
    title: "Website Redesign",
    description: "Revamp the entire website layout",
    status: "In Progress",
    timeline: {
      start: "2024-10-10",
      end: "2024-11-01",
    },
    users: [
      {
        id: 1,
        name: "User One",
        avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        isOnline: true,
      },
      {
        id: 3,
        name: "User Three",
        avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        isOnline: false,
      },
    ],
    comments: [],
    createdAt: "2024-10-10T08:00:00",
  },

  {
    id: 5,
    title: "New Landing Project",
    description: "Landing Page UI",
    status: "In Progress",
    timeline: {
      start: "2024-10-05",
      end: "2024-10-20",
    },
    users: [
      {
        id: 2,
        name: "User Two",
        avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        isOnline: true,
      },
      {
        id: 3,
        name: "User Three",
        avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        isOnline: false,
      },
    ],
    comments: [
      {
        id: 1,
        user: {
          id: 3,
          name: "User Three",
          avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
          isOnline: false,
        },
        time: "2024-10-06T13:30:00",
        content: "Is the design finalized?",
      },
    ],
    coverImageUrl:
      "https://res.cloudinary.com/dboqnapgi/image/upload/v1724152362/productUpload/Tome%20Donjhb_ImageUrls_1724152357938_huza.PNG.png",
    createdAt: "2024-10-05T10:00:00",
  },
  {
    id: 6,
    title: "New Landing Project",
    description: "Landing Page UI",
    status: "In Progress",
    timeline: {
      start: "2024-10-05",
      end: "2024-10-20",
    },
    users: [
      {
        id: 2,
        name: "User Two",
        avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        isOnline: true,
      },
      {
        id: 3,
        name: "User Three",
        avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        isOnline: false,
      },
    ],
    comments: [
      {
        id: 1,
        user: {
          id: 3,
          name: "User Three",
          avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
          isOnline: false,
        },
        time: "2024-10-06T13:30:00",
        content: "Is the design finalized?",
      },
    ],
    coverImageUrl:
      "https://res.cloudinary.com/dboqnapgi/image/upload/v1724152362/productUpload/Tome%20Donjhb_ImageUrls_1724152357938_huza.PNG.png",
    createdAt: "2024-10-05T10:00:00",
  },
  {
    id: 7,
    title: "Newest Design",
    description: "Revamp the entire website layout",
    status: "In Progress",
    timeline: {
      start: "2024-10-10",
      end: "2024-11-01",
    },
    users: [
      {
        id: 1,
        name: "User One",
        avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        isOnline: true,
      },
      {
        id: 3,
        name: "User Three",
        avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        isOnline: false,
      },
    ],
    comments: [],
    createdAt: "2024-10-10T08:00:00",
  },
];
