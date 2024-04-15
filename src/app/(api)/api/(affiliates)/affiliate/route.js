import { getAffiliate, createAffiliate, updateAffiliate, deleteAffiliate} from "@/lib/data.service";
import { deleteFile, fileHandler } from "@/lib/files/fileHandler";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const runtime = 'nodejs';


// Create new Affiliate.
export async function POST(request) {

    const data = await request.formData();
    const array = new Uint32Array(1);
    const postfix = crypto.getRandomValues(array)[0];

    const file = data.get('file');
    const title = data.get('title');
    const folder = "affiliates";
    const fileName = `affiliate_${postfix}`;	

    if(!file || !title)
    {
        return NextResponse.json({'ok': false, 'message': 'Missing file or title'});
    }
    
   

    let extension = file ? file.type.split('/')[1] : null;
    //TODO: Add validation for file type
    extension = extension === 'jpeg' ? 'jpg' : extension;
    let result = await fileHandler({file, folder, fileName});
    
    

    const newAffiliate = {
        title: title,
        imagePath: `/${folder}/${fileName}.${extension}`
    }
  
    let affiliate = await createAffiliate(newAffiliate);

    return NextResponse.json({'ok': true, 'message': 'Affiliate created'});

    
}

// Update Affiliate.
export async function PUT(request) {

    const data = await request.formData();
    const array = new Uint32Array(1);
    const postfix = crypto.getRandomValues(array)[0];

    const id = data.get('id');
    const file = data.get('file');
    const title = data.get('title');
    const folder = "affiliates";
    const extension = file ? file.type.split('/')[1] : null;
    const fileName = `affiliate_${postfix}`;	

    // Henter det nuværende review.
    let aff = await getAffiliate(id);
    let oldImagePath = aff.imagePath;
    // Opretter et nyt review objekt.
    const newAffiliate = {
        _id: id,
        title: title || aff.title,
        imagePath: file ? `/${folder}/${fileName}.${extension}` : oldImagePath
    }
    
    // Opdaterer review.
    let review = await updateAffiliate(newAffiliate);

    // Hvis der er en fil, så opdaterer vi den, og derefter sletter vi den gamle.
    if(file)
    {
        let result = await fileHandler({file, folder, fileName});
        await deleteFile(oldImagePath);
        
    }
    
    return NextResponse.json({'ok': true, 'message': 'Affiliate updated'});

}

// Update Review.
export async function DELETE(request) {

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
  
    const deletedAffiliate = await deleteAffiliate(id);
    let deleteImage = await deleteFile(deletedAffiliate.imagePath);
    
    return NextResponse.json({'ok': true, 'message': `Review deleted and image deleted for: ${deletedAffiliate.title}`});

}