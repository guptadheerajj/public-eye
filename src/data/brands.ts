export interface Brand {
  id: string
  name: string
  logo: string
  description: string
  categories: {
    positive: number
    negative: number
    neutral: number
  }
  totalReviews: number
  sentiment: {
    positive: number
    negative: number
    neutral: number
  }
  recentReviews: {
    id: string
    text: string
    sentiment: "positive" | "negative" | "neutral"
    date: string
  }[]
}

export const brands: Brand[] = [
  {
    id: "apple",
    name: "Apple",
    logo: "/brands/apple.svg",
    description: "Global technology company known for iPhone, Mac, iPad, and other consumer electronics.",
    categories: {
      positive: 65,
      negative: 20,
      neutral: 15,
    },
    totalReviews: 15000,
    sentiment: {
      positive: 65,
      negative: 20,
      neutral: 15,
    },
    recentReviews: [
      {
        id: "1",
        text: "The iPhone 15 Pro Max is absolutely amazing! The camera quality is exceptional.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "MacBook Air M2 is a game-changer. Battery life is incredible.",
        sentiment: "positive",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "/brands/samsung.svg",
    description: "South Korean multinational conglomerate known for smartphones, TVs, and home appliances.",
    categories: {
      positive: 60,
      negative: 25,
      neutral: 15,
    },
    totalReviews: 12000,
    sentiment: {
      positive: 60,
      negative: 25,
      neutral: 15,
    },
    recentReviews: [
      {
        id: "1",
        text: "Galaxy S24 Ultra is a great phone with amazing features.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "The QLED TV picture quality is stunning.",
        sentiment: "positive",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "sony",
    name: "Sony",
    logo: "/brands/sony.svg",
    description: "Japanese multinational conglomerate known for electronics, gaming, and entertainment.",
    categories: {
      positive: 55,
      negative: 30,
      neutral: 15,
    },
    totalReviews: 8000,
    sentiment: {
      positive: 55,
      negative: 30,
      neutral: 15,
    },
    recentReviews: [
      {
        id: "1",
        text: "PS5 gaming experience is incredible!",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "WH-1000XM5 headphones have amazing noise cancellation.",
        sentiment: "positive",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "lg",
    name: "LG",
    logo: "/brands/lg.svg",
    description: "South Korean multinational conglomerate known for electronics and home appliances.",
    categories: {
      positive: 50,
      negative: 35,
      neutral: 15,
    },
    totalReviews: 7000,
    sentiment: {
      positive: 50,
      negative: 35,
      neutral: 15,
    },
    recentReviews: [
      {
        id: "1",
        text: "LG OLED TV has the best picture quality.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "The washing machine is quite noisy.",
        sentiment: "negative",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "dell",
    name: "Dell",
    logo: "/brands/dell.svg",
    description: "American technology company known for personal computers and enterprise solutions.",
    categories: {
      positive: 45,
      negative: 40,
      neutral: 15,
    },
    totalReviews: 6000,
    sentiment: {
      positive: 45,
      negative: 40,
      neutral: 15,
    },
    recentReviews: [
      {
        id: "1",
        text: "XPS 13 is a great laptop for professionals.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "Customer service needs improvement.",
        sentiment: "negative",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "hp",
    name: "HP",
    logo: "/brands/hp.svg",
    description: "American multinational information technology company known for personal computers and printers.",
    categories: {
      positive: 40,
      negative: 45,
      neutral: 15,
    },
    totalReviews: 5500,
    sentiment: {
      positive: 40,
      negative: 45,
      neutral: 15,
    },
    recentReviews: [
      {
        id: "1",
        text: "Printer setup was easy.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "Laptop battery life is disappointing.",
        sentiment: "negative",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "lenovo",
    name: "Lenovo",
    logo: "/brands/lenovo.svg",
    description: "Chinese multinational technology company known for personal computers and mobile devices.",
    categories: {
      positive: 35,
      negative: 50,
      neutral: 15,
    },
    totalReviews: 5000,
    sentiment: {
      positive: 35,
      negative: 50,
      neutral: 15,
    },
    recentReviews: [
      {
        id: "1",
        text: "ThinkPad is durable and reliable.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "Poor build quality on budget laptops.",
        sentiment: "negative",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "asus",
    name: "Asus",
    logo: "/brands/asus.svg",
    description: "Taiwanese multinational computer and phone hardware and electronics company.",
    categories: {
      positive: 45,
      negative: 35,
      neutral: 20,
    },
    totalReviews: 4500,
    sentiment: {
      positive: 45,
      negative: 35,
      neutral: 20,
    },
    recentReviews: [
      {
        id: "1",
        text: "ROG gaming laptops are powerful.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "Some models have heating issues.",
        sentiment: "negative",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
    logo: "/brands/xiaomi.svg",
    description: "Chinese electronics company known for smartphones and smart home products.",
    categories: {
      positive: 50,
      negative: 30,
      neutral: 20,
    },
    totalReviews: 4000,
    sentiment: {
      positive: 50,
      negative: 30,
      neutral: 20,
    },
    recentReviews: [
      {
        id: "1",
        text: "Great value for money smartphones.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "MIUI needs optimization.",
        sentiment: "negative",
        date: "2024-03-14",
      },
    ],
  },
  {
    id: "oneplus",
    name: "OnePlus",
    logo: "/brands/oneplus.svg",
    description: "Chinese smartphone manufacturer known for flagship killer phones.",
    categories: {
      positive: 55,
      negative: 25,
      neutral: 20,
    },
    totalReviews: 3500,
    sentiment: {
      positive: 55,
      negative: 25,
      neutral: 20,
    },
    recentReviews: [
      {
        id: "1",
        text: "OnePlus 12 is a great flagship phone.",
        sentiment: "positive",
        date: "2024-03-15",
      },
      {
        id: "2",
        text: "Software updates could be faster.",
        sentiment: "negative",
        date: "2024-03-14",
      },
    ],
  },
] 