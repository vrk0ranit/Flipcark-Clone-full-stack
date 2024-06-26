
import Product from '../model/product.schema.js'

export const getProducts = async (request,response) => {
  try {
   const products = await Product.find({})

   response.status(200).json(products)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getProductByID = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findOne({ 'id': id })

    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }

    response.status(200).json(product);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}
