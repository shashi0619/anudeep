export const mockCategories = [
  {
    _id: "cat-1",
    name: "Web Development",
    slug: { current: "web-development" },
    banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    description: "All about modern web development techniques.",
  },
  {
    _id: "cat-2",
    name: "React & Next.js",
    slug: { current: "react-nextjs" },
    banner: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    description: "Deep dives into React and Next.js ecosystems.",
  },
  {
    _id: "cat-3",
    name: "Design Systems",
    slug: { current: "design-systems" },
    banner: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
    description: "Creating beautiful and consistent UIs.",
  },
  {
    _id: "cat-4",
    name: "World History",
    slug: { current: "world-history" },
    banner: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=60",
    description: "Explore the fascinating events and figures of the past.",
  },
  {
    _id: "cat-5",
    name: "Ancient Civilizations",
    slug: { current: "ancient-civilizations" },
    banner: "https://images.unsplash.com/photo-1539650116574-8efeb43e2b00?w=800&auto=format&fit=crop&q=60",
    description: "Unraveling the architectural marvels and the mysteries of ancient times.",
  },
  {
    _id: "cat-6",
    name: "Modern History",
    slug: { current: "modern-history" },
    banner: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
    description: "Events that shaped the modern world.",
  },
];

export const mockPosts = [
  {
    _id: "post-1",
    title: "Building modern applications with Next.js",
    slug: { current: "building-modern-apps-nextjs" },
    _createdAt: "2023-10-01T12:00:00Z",
    description: "Learn how to build scalable and performant applications using the latest Next.js features.",
    views: 1250,
    mainImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[0],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'This is a mock post body showcasing how Next.js changes the way we build apps.' }]
      }
    ]
  },

  {
    _id: "post-2",
    title: "Why Shadcn UI is the new standard",
    slug: { current: "why-shadcn-ui-new-standard" },
    _createdAt: "2023-10-05T12:00:00Z",
    description: "Explore the benefits of using headless UI components combined with Tailwind CSS.",
    views: 980,
    mainImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[2],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'Shadcn UI provides beautifully designed components that you can copy and paste into your apps.' }]
      }
    ]
  },
  {
    _id: "post-3",
    title: "Understanding React Server Components",
    slug: { current: "understanding-react-server-components" },
    _createdAt: "2023-10-10T12:00:00Z",
    description: "A deep dive into how Server Components work in React 18 and Next.js 13+ App Router.",
    views: 2100,
    mainImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[1],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'React Server Components allow you to run React components on the server...' }]
      }
    ]
  },
  {
    _id: "post-4",
    title: "The Fall of the Roman Empire: A New Perspective",
    slug: { current: "fall-of-roman-empire" },
    _createdAt: "2023-10-15T12:00:00Z",
    description: "Discover the real reasons behind the collapse of one of history's greatest empires.",
    views: 8400,
    mainImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[3],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'The Roman Empire did not fall in a day. It was a gradual process influenced by many factors...' }]
      }
    ]
  },
  {
    _id: "post-5",
    title: "Secrets of Ancient Egyptian Pyramids",
    slug: { current: "secrets-ancient-egypt-pyramids" },
    _createdAt: "2023-10-18T12:00:00Z",
    description: "Unraveling the architectural marvels and the mysteries they hold.",
    views: 6200,
    mainImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2b00?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[4],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'For centuries, the Great Pyramids have stood as a testament to the ingenuity of the ancient Egyptians...' }]
      }
    ]
  },
  {
    _id: "post-6",
    title: "The Industrial Revolution and Its Impact",
    slug: { current: "industrial-revolution-impact" },
    _createdAt: "2023-10-20T12:00:00Z",
    description: "How the shift to mechanized manufacturing changed the world forever.",
    views: 5100,
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60",
    category: mockCategories[5],
    body: [
      {
        _type: 'block',
        children: [{ _type: 'span', text: 'The Industrial Revolution marked a major turning point in history; almost every aspect of daily life was influenced in some way...' }]
      }
    ]
  }
];

export const mockComments = [
  {
    _id: "comment-1",
    post: { _ref: "post-1" },
    _createdAt: "2023-10-02T12:00:00Z",
    name: "Alice",
    comment: "Great article on Next.js!"
  },
  {
    _id: "comment-2",
    post: { _ref: "post-2" },
    _createdAt: "2023-10-06T12:00:00Z",
    name: "Bob",
    comment: "I love Shadcn UI, it gives so much control."
  }
];

export const mockArticleOfTheDay = {
  _id: "aotd-1",
  post: mockPosts[1],
  description: "Our top pick for today highlights the power of Shadcn UI in modern web development."
};
