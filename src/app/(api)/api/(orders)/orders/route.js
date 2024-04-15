import { getOrders } from '@/lib/data.service';
import { NextResponse } from 'next/server';

// export async function GET(request) {

//     let orders = await getOrders();
//     return NextResponse.json(orders);

// }

export async function GET(request) {
	let orders = await getOrders();

	const serializableOrders = JSON.parse(JSON.stringify(orders));
	return NextResponse.json(serializableOrders);
}
