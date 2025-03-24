export type OrderData = {
  id: number;
  date: number;
  address: string[];
  items: Array<{
    id: number;
    name: string;
    image: string;
    details: Array<Record<string, string | number>>;
  }>;
};
