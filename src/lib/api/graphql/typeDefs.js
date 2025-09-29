import { baseTypeDef } from "./baseTypeDef.js";
import { productTypeDef } from "./schemas/product.js";
import { productDetailTypeDef } from "./schemas/productDetail.js";

export const typeDefs = `
  ${baseTypeDef}
  ${productTypeDef}
  ${productDetailTypeDef}
`;
