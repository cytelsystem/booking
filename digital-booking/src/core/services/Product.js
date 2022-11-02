import { getReq } from "./axios";

const PRODUCT_URL = 'http://localhost:8080/products';

export async function getProductById(id) {
    const url = `${PRODUCT_URL}/${id}`;
    return getReq(url);
}