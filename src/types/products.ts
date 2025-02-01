export interface Product {
  isNew: any;
  discountPercentage: any;
     productImage(productImage: any): unknown;
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