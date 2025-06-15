export interface Post {
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
  category: string; 
  date: string; 
  readingTime: string; 
}

export interface PostListItem {
  id: number;
  title: string;
  excerpt: string;
  imageUrl?: string;
  category: string;
  date: string;
  readingTime: string;
}

// --- Mock Data ---
const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: 'Innovative Tools in Livestock Farming',
    body: 'Farmers are now using smart tools to monitor livestock health, optimize feeding schedules, and track movement patterns, leading to healthier animals and increased productivity. This is the detailed content for the first blog post about innovative tools in livestock farming. It covers innovations in AI, IoT, and sustainable farming practices. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: '/images/blog/agritech-robot-farming.jpg',
    category: 'Livestock',
    date: 'Mar 21',
    readingTime: '7 min read',
  },
  {
    id: 2,
    title: 'AgriTech is the Future of Food Production',
    body: 'AgriTech solutions are revolutionizing the way we grow food, making it more efficient, sustainable, and resilient to climate change. From vertical farms to drone-based crop monitoring, technology is transforming the agricultural landscape. Dive deep into how smart farming technologies are revolutionizing agriculture globally. From precision irrigation to automated harvesting, learn how data-driven decisions are improving yields and efficiency. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    imageUrl: '/images/blog/fresh-vegetables-market.jpg',
    category: 'AgricTech',
    date: 'Mar 21',
    readingTime: '5 min read',
  },
  {
    id: 3,
    title: 'How Climate Change Affects Crop Yield',
    body: 'Climate change is altering the landscape of farming across the globe, bringing unpredictable weather patterns and new challenges for crop cultivation. Understanding these impacts is crucial for adapting agricultural practices and ensuring food security. Explore sustainable farming practices that are crucial for the future of our planet. This post covers organic farming, permaculture, and reducing environmental impact in modern agriculture. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    imageUrl: '/images/blog/sunset-weather.jpg',
    category: 'Climate',
    date: 'Mar 21',
    readingTime: '6 min read',
  },
  {
    id: 4,
    title: 'Introducing Auto-Reports: Your Farm Diary Just Got Smarter',
    body: 'A look at the latest innovations from Famtech in 2024, including new software features and hardware integrations. We are committed to empowering farmers with the best tools. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    imageUrl: '/images/blog/Innovation.jpg',
    category: 'Innovation',
    date: 'Mar 21',
    readingTime: '4 min read',
  },
  {
    id: 5,
    title: 'Top 5 Precision Agriculture Trends Transforming 2025',
    body: 'Discover the top 5 trends shaping precision agriculture in 2025, from advanced AI analytics to hyper-localized weather predictions. These innovations are set to boost efficiency and sustainability. Explore sustainable farming practices that are crucial for the future of our planet. This post covers organic farming, permaculture, and reducing environmental impact in modern agriculture. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    imageUrl: '/images/blog/agritech-robot-farming.jpg', 
    category: 'AgricTech',
    date: 'Mar 21',
    readingTime: '8 min read',
  },
  {
    id: 6,
    title: 'Early Detection of Cattle Diseases with Smart Sensors',
    body: 'Learn about the latest advancements in smart sensor technology that enable early detection of cattle diseases, minimizing losses and improving animal welfare. Dive deep into how smart farming technologies are revolutionizing agriculture globally. From precision irrigation to automated harvesting, learn how data-driven decisions are improving yields and efficiency. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    imageUrl: '/images/blog/livestock.jpg',
    category: 'Livestock',
    date: 'Mar 21',
    readingTime: '5 min read',
  },
  {
    id: 7,
    title: 'Water-Saving Techniques with IoT-Powered Irrigation',
    body: 'Discover how IoT-powered irrigation systems are helping farmers conserve water, reduce waste, and optimize crop hydration for maximum yield. Explore sustainable farming practices that are crucial for the future of our planet. This post covers organic farming, permaculture, and reducing environmental impact in modern agriculture. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    imageUrl: '/images/blog/Grazing.jpg',
    category: 'Climate',
    date: 'Mar 21',
    readingTime: '6 min read',
  },
];

const MOCK_TRENDING_POSTS: PostListItem[] = [
  {
    id: 5, 
    title: 'Top 5 Precision Agriculture Trends Transforming 2025',
    excerpt: MOCK_POSTS.find(p => p.id === 5)?.body.substring(0, 100) + '...' || '',
    imageUrl: MOCK_POSTS.find(p => p.id === 5)?.imageUrl,
    category: 'AgricTech',
    date: 'Mar 21',
    readingTime: '8 min read',
  },
  {
    id: 1, 
    title: 'Innovative Tools in Livestock Farming',
    excerpt: MOCK_POSTS.find(p => p.id === 1)?.body.substring(0, 100) + '...' || '',
    imageUrl: MOCK_POSTS.find(p => p.id === 1)?.imageUrl,
    category: 'Livestock',
    date: 'Mar 21',
    readingTime: '7 min read',
  },
  {
    id: 4,
    title: 'Introducing Auto-Reports: Your Farm Diary Just Got Smarter',
    excerpt: MOCK_POSTS.find(p => p.id === 4)?.body.substring(0, 100) + '...' || '',
    imageUrl: MOCK_POSTS.find(p => p.id === 4)?.imageUrl,
    category: 'Innovation',
    date: 'Mar 21',
    readingTime: '4 min read',
  },
  {
    id: 6,
    title: 'Early Detection of Cattle Diseases with Smart Sensors',
    excerpt: MOCK_POSTS.find(p => p.id === 6)?.body.substring(0, 100) + '...' || '',
    imageUrl: MOCK_POSTS.find(p => p.id === 6)?.imageUrl,
    category: 'Livestock',
    date: 'Mar 21',
    readingTime: '5 min read',
  },
  {
    id: 7,
    title: 'Water-Saving Techniques with IoT-Powered Irrigation',
    excerpt: MOCK_POSTS.find(p => p.id === 7)?.body.substring(0, 100) + '...' || '',
    imageUrl: MOCK_POSTS.find(p => p.id === 7)?.imageUrl,
    category: 'Climate',
    date: 'Mar 21',
    readingTime: '6 min read',
  },
];


export async function getAllPosts(): Promise<PostListItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts: PostListItem[] = MOCK_POSTS.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.body.substring(0, 150) + (post.body.length > 150 ? '...' : ''),
        imageUrl: post.imageUrl,
        category: post.category,
        date: post.date,
        readingTime: post.readingTime,
      }));
      resolve(posts);
    }, 800);
  });
}

export async function getPostById(id: string | number): Promise<Post | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const postId = Number(id);
      const post = MOCK_POSTS.find(p => p.id === postId);
      resolve(post || null);
    }, 800); // Simulate network delay
  });
}

export async function getTrendingPosts(): Promise<PostListItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_TRENDING_POSTS);
    }, 600); 
  });
}

export const BLOG_CATEGORIES = [
  'All', 'AgricTech', 'Climate', 'Livestock', 'Innovation', 'Crop Health'
];
