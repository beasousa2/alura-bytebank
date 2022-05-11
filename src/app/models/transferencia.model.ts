export interface Transferencia {
  id?: number | string;
  value: number;
  destination: number | string;
  data?: Date;
}
