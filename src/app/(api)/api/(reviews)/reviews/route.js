
import { getReviews } from "@/lib/data.service";
import { NextResponse } from "next/server"

// Get All Reviews.
export async function GET(request) {

    const { searchParams } = new URL(request.url)
    const limit = searchParams.get('limit');
    let reviews = await getReviews();
    
    if(limit) reviews = reviews.slice(0, limit);

    return NextResponse.json(reviews);

}
