export interface Order {
  id?: number | null;
  userId: number | null;
  productsId: number[];
}