import { debounce } from "lodash-es";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function usePosts() {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const posts = useState<Post[]>("posts", () => []);
  const page = ref(1);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const hasMore = ref(true);

  const fetchPosts = debounce(async () => {
    if (isLoading.value || !hasMore.value) return;

    isLoading.value = true;
    error.value = null;

    try {
      const newPosts = await $fetch<Post[]>(
        `${apiUrl}/posts?_page=${page.value}&_limit=10`
      );

      if (newPosts.length < 10) {
        hasMore.value = false;
      }

      posts.value.push(...newPosts);
      page.value++;
    } catch (e) {
      error.value = "Не вдалося завантажити пости";
    } finally {
      isLoading.value = false;
    }
  }, 500);

  return { posts, page, isLoading, error, hasMore, fetchPosts };
}
