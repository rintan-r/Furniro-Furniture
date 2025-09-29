// DetailProduct.jsx
import DetailProductClient from './DetailProductClient';
import { getProductDetail } from '@/src/lib/api/getProductDetail';

export default async function DetailProduct({ id }) {
  const serialized = await getProductDetail(id);
  return <DetailProductClient serialized={serialized} />;
}
