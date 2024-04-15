
import { createReview, deleteReview, getReview, updateReview } from "@/lib/data.service";
import { deleteFile, fileHandler } from "@/lib/files/fileHandler";
import { NextResponse } from "next/server"

// Get Review.
export async function GET(request) {
    
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id');
    let review = await getReview(id);
    
    return NextResponse.json(review);

}

// Create new Review.
export async function POST(request) {

    const data = await request.formData();

    const file = data.get('file');
    const name = data.get('name');
    const text = data.get('text');
    const folder = "reviews";
    const fileName = name.replaceAll(' ', '_');
    let extension = file ? file.type.split('/')[1] : null;

    //TODO: Add validation for file type
    extension = extension === 'jpeg' ? 'jpg' : extension;

    const newReview = {
        text: text,
        name: name,
        imagePath: `/${folder}/${fileName}.${extension}`
    }
    
    let review = await createReview(newReview);
    let result = await fileHandler({file, folder, fileName});
    

    return NextResponse.json({'ok': true, 'message': 'Review created'});

    
}

// Update Review.
export async function PUT(request) {

    const data = await request.formData();

    const id = data.get('id');
    const file = data.get('file');
    const name = data.get('name');
    const text = data.get('text');
    const folder = "reviews";
    let extension = file ? file.type.split('/')[1] : null;

    //TODO: Add validation for file type
    extension = extension === 'jpeg' ? 'jpg' : extension;
    const fileName = name ? name.replaceAll(' ', '_') : '';

    // Henter det nuværende review.
    let rev = await getReview(id);
 
    // Opretter et nyt review objekt.
    const newReview = {
        _id: id,
        text: text || rev.text,
        name: name || rev.name,
        imagePath: file ? `/${folder}/${fileName}.${extension}` : rev.imagePath
    }
    
    // Opdaterer review.
    let review = await updateReview(newReview);

    // Hvis der er en fil, så opdaterer vi den.
    if(file)
    {
        let deleteImage = await deleteFile(rev.imagePath)
        let result = await fileHandler({file, folder, fileName});
        
    }
    
    return NextResponse.json({'ok': true, 'message': 'Review updated'});

}

// Delete Review.
export async function DELETE(request) {

    const { searchParams } = new URL(request.url);

    const id = searchParams.get('id');
    const deletedReview = await deleteReview(id);

    let deleteImage = deleteFile(deletedReview.imagePath)
    
   

    return NextResponse.json({'ok': true, 'message': `Review deleted and image deleted for: ${deletedReview.name}`});

}