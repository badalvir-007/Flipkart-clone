import { products } from "./contants/data.js";
import Product from "./model/product-schema.js";


const DefaultData = async () => {
  try {
    
    await  Product.insertMany(products);

    console.log('data  imported succefully');
  } catch (error) {
    console.log('error while inserting the default  data', error.message);
  }
}

export default DefaultData;
