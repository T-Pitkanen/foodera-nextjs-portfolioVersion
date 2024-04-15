import { getAffiliates } from "@/lib/data.service";
import { NextResponse } from "next/server";
export const revalidate = 0;
export const runtime = 'nodejs';
// Get All.
export async function GET() {

    let affiliates = await getAffiliates();
    
    return NextResponse.json(affiliates);

}

