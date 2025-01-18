export const initialUsers = [
  {
    id: "user-17151618",
    name: "Erfan",
    role: "Fron-End Developer",
    email: "erfan@gmail.com",
    password: "12345678",
  },
  {
    id: "user-17151619",
    name: "Hamid",
    role: "Back-End Developer",
    email: "Hamid82@gmail.com",
    password: "12345679",
  },
  {
    id: "user-17151620",
    name: "AliReza",
    role: "UI Designer",
    email: "AliReza@gmail.com",
    password: "12345680",
  },
];

export const initialProjects = [
  {
    id: "prj-1",
    name: "E-commerce Website Flower",
    description:
      "Developing a full-stack e-commerce platform for an online flower shop.",
    team: ["user-17151618", "user-17151619", "user-17151620"],
    createdAt: 1722158043050,
  },
  {
    id: "prj-2",
    name: "Task Manager",
    description: "Launching a web application named Task Manager.",
    team: ["user-17151618", "user-17151620"],
    createdAt: 1730128843050,
  },
];

export const initialTasks = [
  {
    id: "task-1",
    name: "Create homepage",
    description: "",
    status: 2,
    type: 1,
    priority: 5,
    project: "prj-1",
    assignee: "user-17151618",
    deadline: 1739215000000,
    estimatedTime: 1737215220193,
    createdAt: 1730128843050,
  },
  {
    id: "task-2",
    name: "Design website layout",
    description:
      "Create wireframes and mockups for the homepage, product pages, and checkout page.",
    status: 2,
    type: 3,
    priority: 1,
    project: "prj-1",
    assignee: "user-17151620",
    reviewer: "user-17151618",
    deadline: 1745215000000,
    createdAt: 1737128843050,
  },
  {
    id: "task-3",
    name: "Develop project page",
    description:
      "Implement the project page using React. Include CRUD features.",
    status: 1,
    type: 1,
    priority: 4,
    project: "prj-2",
    assignee: "user-17151618",
    deadline: 1735515000000,
    estimatedTime: 1735005001258,
    createdAt: 1730515000000,
  },
  {
    id: "task-4",
    name: "Build backend API for products",
    description:
      "Develop RESTful APIs to handle product data retrieval, including sorting, filtering, and pagination.",
    status: 3,
    type: 3,
    priority: 3,
    project: "prj-1",
    assignee: "user-17151619",
    reviewer: "user-17151618",
    deadline: 1739515000000,
    createdAt: 1733128843050,
  },
  {
    id: "task-5",
    name: "Integrate payment gateway",
    description:
      "Set up and integrate a payment gateway (e.g., Stripe) for the checkout process. Ensure secure payment handling.",
    status: 2,
    type: 1,
    priority: 2,
    project: "prj-1",
    assignee: "user-17151619",
    deadline: 1739000099002,
    estimatedTime: 1738000082002,
    createdAt: 1737128000050,
  },
  {
    id: "task-6",
    name: "Fix incorrect price calculation on checkout",
    description:
      "Resolve an issue where the total price in the checkout cart does not reflect the correct amount after applying discounts.",
    status: 1,
    type: 2,
    priority: 5,
    project: "prj-1",
    assignee: "user-17151619",
    deadline: 1739218000000,
    bugSecurityLevel: 2,
    createdAt: 1735128000050,
  },
];
