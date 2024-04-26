import Product from "../schema/productSchema.js";
import Cart from "../schema/cartSchema.js";
export async function productUpload(req,res)
{
    const product=new Product(req.body);
    try{

        const data=await product.save();
        res.status(200).send("Upload successfull");
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send("Upload unsuccessfull");
    }
}

export async function farmerProducts(req,res)
{
    
    const filter={user_id:req.body._id};
    try{
        const data=await Product.find(filter);
        console.log(data);
        res.status(200).json(data);
    }
    catch(error)
    {
        res.status(404).send("error");
    }
}

export async function allProducts(req,res)
{
    console.log("Getting all products");
    try{
        const data=await Product.find();
        console.log(data);
        res.status(200).json(data);
    }
    catch(error)
    {
        res.status(404).send("error");
    }
}

export async function displayCart(req,res)
{
    console.log(req.query);
    const filter={user_id:req.query.user_id};
    console.log("Getting all Cart products");
    try{
        const data=await Cart.find(filter);
        console.log(data);
        res.status(200).json(data);
    }
    catch(error)
    {
        res.status(404).send("error");
    }
}

export async function addToCart(req,res)
{
    const cart=new Cart(req.body);
    try{
        console.log("Updating cart")
        const data=await cart.save();
        res.status(200).send("Upload successfull");
        console.log("Items added to cart");
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send("Upload unsuccessfull");
    }
}

export async function deleteCart(req,res)
{
    
    try{
        const filter=await Cart.findByIdAndDelete({_id:req.body._id});
        if(!filter)
        {
            console.log("Item not found in cart");
            res.status(200).send("Delete unSuccessFull");
        }
        else
        {
            console.log("delete successfull");
            res.status(404).send("Delete Successfull");
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(400).send("Delete unsuccessfull");
    }
}

export async function allProductsSortLow(req,res)
{
    console.log("Getting all products");
    try{
        const data=await Product.find().sort({productprice:1});
        console.log(data);
        res.status(200).json(data);
    }
    catch(error)
    {
        res.status(404).send("error");
    }
}

export async function allProductsSortHigh(req,res)
{
    console.log("Getting all products");
    try{
        const data=await Product.find().sort({productprice:-1});
        console.log(data);
        res.status(200).json(data);
    }
    catch(error)
    {
        res.status(404).send("error");
    }
}

export async function allProductsSearch(req, res) {
    console.log("Getting all products");
    const data = req.query.search;
    console.log(data);
    try {
        const products = await Product.find({ productName: new RegExp(data, 'i') });
        console.log(products);
        res.status(200).json(products);
    } catch (error) {
        res.status(404).send("error");
    }
}
