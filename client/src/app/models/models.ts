import { BaseRecord } from "./baseRecord";

export interface TableRecord extends BaseRecord {
  number: number;
  available: boolean;
  maxPersons: number;
}

export interface MenuCategoryRecord extends BaseRecord {
  name: string,
}

export interface MenuItemRecord extends BaseRecord {
  name: string,
  description: string,
  price: number,
  CategoryId: string,

}
