import { PostItem } from "../types/post";

export function searchItem(items: PostItem[], query: string): PostItem[] {
  const regex = new RegExp(`(${query})`, "gi");
  let filtred = items.filter((item) => {
    return regex.test(item.body) || regex.test(item.title);
  });
  return filtred;
}
