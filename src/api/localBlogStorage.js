/**
 * Local Blog Storage — localStorage-based blog post CRUD
 * No external backend required.
 * 
 * Posts are stored as JSON in localStorage under the key "hf_blog_posts".
 */

const STORAGE_KEY = "hf_blog_posts";

function getPosts() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function sortPosts(posts, sortField) {
  if (!sortField) return posts;

  const desc = sortField.startsWith("-");
  const field = desc ? sortField.slice(1) : sortField;

  return [...posts].sort((a, b) => {
    const aVal = a[field] ?? "";
    const bVal = b[field] ?? "";

    if (aVal < bVal) return desc ? 1 : -1;
    if (aVal > bVal) return desc ? -1 : 1;
    return 0;
  });
}

export const localBlogStorage = {
  /**
   * List all posts, optionally sorted and limited
   */
  async list(sort, limit) {
    let posts = getPosts();
    if (sort) posts = sortPosts(posts, sort);
    if (limit) posts = posts.slice(0, limit);
    return posts;
  },

  /**
   * Filter posts by field values, then sort and limit
   */
  async filter(filters = {}, sort, limit) {
    let posts = getPosts();

    // Apply filters
    posts = posts.filter(post =>
      Object.entries(filters).every(([key, value]) => post[key] === value)
    );

    if (sort) posts = sortPosts(posts, sort);
    if (limit) posts = posts.slice(0, limit);
    return posts;
  },

  /**
   * Create a new post
   */
  async create(data) {
    const posts = getPosts();
    const now = new Date().toISOString();
    const newPost = {
      ...data,
      id: generateId(),
      created_date: now,
      updated_date: now,
      views: 0
    };
    posts.push(newPost);
    savePosts(posts);
    return newPost;
  },

  /**
   * Update an existing post by ID
   */
  async update(id, data) {
    const posts = getPosts();
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) throw new Error(`Post not found: ${id}`);

    posts[index] = {
      ...posts[index],
      ...data,
      updated_date: new Date().toISOString()
    };
    savePosts(posts);
    return posts[index];
  },

  /**
   * Delete a post by ID
   */
  async delete(id) {
    const posts = getPosts();
    const filtered = posts.filter(p => p.id !== id);
    savePosts(filtered);
  },

  /**
   * Convert an image file to a base64 data URL (replaces cloud upload)
   */
  async uploadFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve({ file_url: reader.result });
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
};
