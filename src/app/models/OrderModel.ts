import { ProductModel } from "./ProductModel";

export class OrderModel {
    id : number;
    address: string;
    placementDate: Date;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    orderStatusId: number;
    paymentMethodId: number;
    total: number;
    products: ProductModel[];
}