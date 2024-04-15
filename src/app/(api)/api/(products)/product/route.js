
import { createProduct, getProduct, updateProduct, deleteProduct } from "@/lib/data.service";
import { deleteFile, fileHandler } from "@/lib/files/fileHandler";
import { NextResponse } from "next/server"

// Get Product.
export async function GET(request) {
    
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id');
    let product = await getProduct(id);
    
    return NextResponse.json(product);

}

// Create new Product.
export async function POST(request) {

    const data = await request.formData();
    const array = new Uint32Array(1);
    const postfix = crypto.getRandomValues(array)[0];

    const file = data.get('file');
    const time = data.get('time');
    const title = data.get('title');
    const price = data.get('price');
    const serves = data.get('serves');
    const priceBefore = data.get('priceBefore');
    const explore = data.get('explore');

    const folder = "products";
    const fileName = `product_${postfix}`;
    let extension = file ? file.type.split('/')[1] : null;

    //TODO: Add validation for file type
    extension = extension === 'jpeg' ? 'jpg' : extension; 

    const newProduct = {
        title: title,
        time: time,
        price: price,
        serves: serves,
        priceBefore: priceBefore,
        explore: explore,
        image: `/${folder}/${fileName}.${extension}`
    }
    
    let product = await createProduct(newProduct);
    let result = await fileHandler({file, folder, fileName});
    

    return NextResponse.json({'ok': true, 'message': 'Product created'});

    
}

// Update Product.
export async function PUT(request) {

    const data = await request.formData();
    const array = new Uint32Array(1);
    const postfix = crypto.getRandomValues(array)[0];

    const id = data.get('id');
    const file = data.get('file');
    const time = data.get('time');
    const title = data.get('title');
    const serves = data.get('serves');
    const price = data.get('price');
    const priceBefore = data.get('priceBefore');
    const explore = data.get('explore');
    
    const folder = "products";
    let extension = file ? file.type.split('/')[1] : null;

    //TODO: Add validation for file type
    extension = extension === 'jpeg' ? 'jpg' : extension;
    const fileName = `product_${postfix}`;

    // Henter det nuværende product.
    let pro = await getProduct(id);
 
    // Opretter et nyt review objekt.
    const newProduct = {
        _id: pro._id,
        title: title || pro.title,
        time: time || pro.time,
        price: price || pro.price,
        serves: serves || pro.serves,
        priceBefore: priceBefore || pro.priceBefore,
        explore: explore || pro.explore,
        image: file.name ? `/${folder}/${fileName}.${extension}` : pro.imagePath
    }


    // Opdaterer product.
    let updPro = await updateProduct(newProduct);

    console.log('TEST', file, file.name)
    // Hvis der er en fil, så opdaterer vi den.
    if(file.name)
    {
        let deleteImage = await deleteFile(pro.image);
        let result = await fileHandler({file, folder, fileName});
        
    }
    
    return NextResponse.json({'ok': true, 'message': 'Product updated'});

}

// Delete Review.
export async function DELETE(request) {

    const { searchParams } = new URL(request.url);

    const id = searchParams.get('id');
    const deletedProduct = await deleteProduct(id);

    let deleteImage = deleteFile(deletedProduct.image)
    
    return NextResponse.json({'ok': true, 'message': `Product deleted and image deleted for: ${deletedProduct.title}`});

}