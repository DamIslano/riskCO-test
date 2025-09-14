import { debounce } from "lodash-es";

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface PostDetail {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function usePost(id: number) {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const post = ref<PostDetail | null>(null);
  const comments = ref<Comment[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchPost = debounce(async () => {
    if (isLoading.value) return;

    isLoading.value = true;
    error.value = null;

    try {
      const data = await $fetch<PostDetail>(`${apiUrl}/posts/${id}`);
      post.value = data;

      const comm = await $fetch<Comment[]>(`${apiUrl}/comments?postId=${id}`);
      comments.value = comm;
    } catch (e) {
      error.value = "Не вдалося завантажити пост";
    } finally {
      isLoading.value = false;
    }
  }, 500);

  return { post, comments, isLoading, error, fetchPost };
}
