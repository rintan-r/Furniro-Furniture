import { productResolvers } from "./schemas/product.js";
import { productDetailResolvers } from "./schemas/productDetail.js";

export const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...productDetailResolvers.Query,
  },
  Product: {
    ...productResolvers.Product,
  },
};
