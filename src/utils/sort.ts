import { PostItem } from "../types/post";

export function SortItems(
  items: PostItem[],
  field: string,
  order: boolean
): PostItem[] {
  if (field) {
    const property = field as keyof PostItem;

    items.sort((a, b) => {
      if (typeof a[property] === "string") {
        return (b[property] as string).localeCompare(a[property] as string);
      } else {
        return (b[property] as number) - (a[property] as number);
      }
    });
    items = items.reverse();
  }

  return order ? items : items.reverse();
}
