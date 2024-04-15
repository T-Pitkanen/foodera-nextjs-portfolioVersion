import { exit } from 'process';
import dbConnect from '../dbConnect.mjs';
import { dbExists, seedDefaultProduct, seedDefaultReview, seedDefaultUser, seedDefaultAffiliate, seedDefaultOrder, seedDefaultFAQ, seedDefaultSubscriber } from './seedhelpers.mjs';
import bcrypt from 'bcryptjs';
import {  products, reviews, affiliates, faqs, createDummyOrderWithProductId, subscribers } from './seedfile.mjs';


/* 

    SEED

*/

// Database Connection
await dbConnect();
let exists = await dbExists();

if(exists === undefined)
{
    console.log('----------------------')
    console.log('Opretter Database')

    const user = await seedDefaultUser({
        "name" : "admin",
        "email" : "admin@mediacollege.dk",
        "hashedPassword" : await bcrypt.hash("admin", 10)
    })
    
    // Products
    let productsList = [];

    for (let i = 0; i < products.length; i++) {
        productsList = await seedDefaultProduct(products[i]);
    }
    console.log('Products seeded : ', products.length, productsList)

    let order = createDummyOrderWithProductId(productsList._id)
    let newOrder = await seedDefaultOrder(order);

    console.log('Order seeded : 1')

    // Reviews
    let reviewList = [];

    for (let i = 0; i < reviews.length; i++) {
        reviewList = await seedDefaultReview(reviews[i]);
    }

    console.log('Reviews seeded : ', reviews.length)
 
    // Reviews
    let affiliateList = [];

    for (let i = 0; i < affiliates.length; i++) {
        affiliateList = await seedDefaultAffiliate(affiliates[i]);
    }

    console.log('Affiliates seeded : ', affiliates.length)

    // Faqs
    let faqList = [];

    for (let i = 0; i < faqs.length; i++) {
        faqList = await seedDefaultFAQ(faqs[i]);
    }

    console.log('Faqs seeded', faqs.length)

    let subscriber = await seedDefaultSubscriber(subscribers[0]);
    console.log('Subscriber seeded', subscriber)

} else {



    console.log('----------------------')
    console.log('Database er allerede oprettet')
    console.log('Slet/drop databasen hvis du ønsker at køre seed scriptet igen.')
    console.log('----------------------')

}

exit();