// API Service - Servis katmanı örneği
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
  }

  // User Services
  async getUsers(): Promise<User[]> {
    return this.request<User[]>('/users');
  }

  async getUser(id: number): Promise<User> {
    return this.request<User>(`/users/${id}`);
  }

  async createUser(userData: Partial<User>): Promise<User> {
    return this.request<User>('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    return this.request<User>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(id: number): Promise<void> {
    return this.request<void>(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Post Services
  async getPosts(): Promise<Post[]> {
    return this.request<Post[]>('/posts');
  }

  async getPost(id: number): Promise<Post> {
    return this.request<Post>(`/posts/${id}`);
  }

  async getUserPosts(userId: number): Promise<Post[]> {
    return this.request<Post[]>(`/users/${userId}/posts`);
  }

  async createPost(postData: Partial<Post>): Promise<Post> {
    return this.request<Post>('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  async updatePost(id: number, postData: Partial<Post>): Promise<Post> {
    return this.request<Post>(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  }

  async deletePost(id: number): Promise<void> {
    return this.request<void>(`/posts/${id}`, {
      method: 'DELETE',
    });
  }

  // Comment Services
  async getComments(postId?: number): Promise<Comment[]> {
    const endpoint = postId ? `/posts/${postId}/comments` : '/comments';
    return this.request<Comment[]>(endpoint);
  }

  async createComment(commentData: Partial<Comment>): Promise<Comment> {
    return this.request<Comment>('/comments', {
      method: 'POST',
      body: JSON.stringify(commentData),
    });
  }

  // Todo Services
  async getTodos(userId?: number): Promise<Todo[]> {
    const endpoint = userId ? `/users/${userId}/todos` : '/todos';
    return this.request<Todo[]>(endpoint);
  }

  async createTodo(todoData: Partial<Todo>): Promise<Todo> {
    return this.request<Todo>('/todos', {
      method: 'POST',
      body: JSON.stringify(todoData),
    });
  }

  async updateTodo(id: number, todoData: Partial<Todo>): Promise<Todo> {
    return this.request<Todo>(`/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todoData),
    });
  }

  async deleteTodo(id: number): Promise<void> {
    return this.request<void>(`/todos/${id}`, {
      method: 'DELETE',
    });
  }

  // Dashboard Stats (Mock)
  async getDashboardStats() {
    const [users, posts, todos] = await Promise.all([
      this.getUsers(),
      this.getPosts(),
      this.getTodos()
    ]);

    return {
      totalUsers: users.length,
      totalPosts: posts.length,
      completedTodos: todos.filter(todo => todo.completed).length,
      pendingTodos: todos.filter(todo => !todo.completed).length,
      userGrowth: 12.5,
      postGrowth: 8.7,
      todoCompletionRate: (todos.filter(todo => todo.completed).length / todos.length) * 100
    };
  }
}

export const apiService = new ApiService();