import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { Product } from "../server/models/Product.Model";

// GET all products
const getAllProducts: () => Promise<Product[]> = async () => {
    return (await axios.get(`/api/products`)).data;
}

const useGetAllProducts = () => useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts
});

export { useGetAllProducts }
