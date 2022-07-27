import { PostItem } from "../types/post";

export function SortItems(items: PostItem[], field: string): PostItem[] {
  if (field) {
    console.log(field);
    const property = field as keyof PostItem;

    items.sort((a, b) => {
      if (typeof a[property] === "string") {
        return (b[property] as string).localeCompare(a[property] as string);
      } else {
        return (a[property] as number) - (b[property] as number);
      }
    });
    items = items.reverse();
  }

  return items;
}
