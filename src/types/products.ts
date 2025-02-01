export interface Product {
  isNew?:string;
  discountPercentage?: string;
     productImage(productImage: string): unknown;
 _id: string;
 title : string;
 _type : "product";
 image? : {
  asset :{
   _ref : string;
   _type : "image";
  }
 };
 price : number;
 description? : string;
slug :{
 _type :"slug"
 current : string,
 
};
inventory : number;
}