import { Item, visitUrl } from "kolmafia";

export function pricegunValue(item: Item): number {
  const pricegunData = visitUrl(`https://pricegun.loathers.net/api/${item.id}`);
  const data = JSON.parse(pricegunData) as { value: number };
  if (!data || !data.value || data.value <= 0) return 0;
  return data.value;
}
