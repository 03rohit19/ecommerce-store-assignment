import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import "./products.scss";

interface filteredProduct {
  id: number;
  image: string;
  title: string;
  rating: { rate: number; count: number };
  price: number;
}

export interface ProductsProps {
  filteredProducts: filteredProduct[] | [];
}

const Products = ({ filteredProducts }: ProductsProps) => (
  <div className="products-container">
    {filteredProducts.map(({ id, image, title, rating, price }) => (
      <ProductCard
        key={id}
        img={image}
        title={title}
        star={rating.rate}
        reviews={rating.count}
        prevPrice={price}
        newPrice={price}
      />
    ))}
  </div>
);

export default Products;
