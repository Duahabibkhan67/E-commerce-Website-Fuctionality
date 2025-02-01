import { defineQuery } from "next-sanity";

// Query to get all products
export const allProducts = defineQuery(`
  *[_type == "product"]{
    _id,
    title,
    description,
    price,
    tags,
    discountPercentage,
    isNew,
    "imageUrl": image.asset->url
  }
`);

// Query to get the first 4 products
export const fourProducts = defineQuery(`
  *[_type == "product"][0..3]{
    _id,
    title,
    description,
    price,
    tags,
    discountPercentage,
    isNew,
    "imageUrl": image.asset->url
  }
`);