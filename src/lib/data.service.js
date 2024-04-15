'use server';
/* 


    GET PRODUCTS


*/

import dbConnect from "./db/dbConnect.mjs";
import affilateModel from "./db/models/affilate.model.mjs";
import basketModel from "./db/models/basket.model.mjs";
import faqModel from "./db/models/faq.model.mjs";
import orderModel from "./db/models/order.model.mjs";
import productModel from "./db/models/product.model.mjs";
import reviewModel from "./db/models/review.model.mjs";
import subscriberModel from "./db/models/subscriber.model.mjs";


/* 

    Products

*/
export const getProducts = async () => {
    
    try {

        await dbConnect();
        let result = await productModel.find({});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const getProductsByRange = async (range) => {
    
    try {

        await dbConnect();

        range = range.split(',');


        let result = await productModel.find({ '_id': { $in: range } });

        return result

    } catch (error) {

        console.log(error)

    }

};
/* 

    Product

*/


export const getProduct = async (id) => {
        
        try {
    
            await dbConnect();
            
            let result = await productModel.findById({_id: id});
    
            return result
    
        } catch (error) {
    
            console.log(error)
    
        }
    
}

export const createProduct= async (product) => {
    
    try {

        await dbConnect();
        let result = await productModel.create(product);
        console.log('result', result);
        
        return result

    } catch (error) {

        console.log(error)

    }

};

export const updateProduct = async (product) => {
    
    try {

        await dbConnect();
        let result = await productModel.findByIdAndUpdate(product._id, product);
        console.log('result', result);
        return result

    } catch (error) {

        console.log(error)

    }

};

export const deleteProduct = async (id) => {

    try {

        await dbConnect();
        let result = await productModel.findByIdAndDelete(id);
        return result;
        
    } catch (error) {

        console.log(error)

    } 
};

/* 

    Reviews

*/

export const getReviews = async () => {
    
        try {
    
            await dbConnect();
            
            let result = await reviewModel.find({});
    
            return result
    
        } catch (error) {
    
            console.log(error)
    
        }
}
/* 

    Review

*/
export const createReview = async (review) => {
    
    try {

        await dbConnect();
        let result = await reviewModel.create(review);

        return result

    } catch (error) {

        console.log(error)

    }

};

export const updateReview = async (review) => {
    
    try {

        await dbConnect();
        let result = await reviewModel.findByIdAndUpdate(review._id, review);

        return result

    } catch (error) {

        console.log(error)

    }

};

export const deleteReview = async (id) => {

    try {

        await dbConnect();
        let result = await reviewModel.findByIdAndDelete(id);
        return result;
        
    } catch (error) {

        console.log(error)

    } 
};

export const getReview = async (id) => {
    
    try {

        await dbConnect();
        
        let result = await reviewModel.findById({_id: id});

        return result

    } catch (error) {

        console.log(error)

    }
}

/* 

    Affiliates

*/

export const getAffiliates = async () => {
    
    try {
        
        await dbConnect();
        let result = await affilateModel.find({});
        return result

    } catch (error) {

        console.log(error)

    }

};  

/* 

    Affiliate

*/

// Get Affiliate by ID.
export const getAffiliate = async (id) => {
    
    try {
        
        await dbConnect();
        let result = await affilateModel.findById({_id: id});
        // console.log('FETCH DATA', result)
        return result

    } catch (error) {

        console.log(error)

    }

};  

// Create new Affiliate.
export const createAffiliate = async (affiliate) => {
        
        try {
    
            await dbConnect();
            let result = await affilateModel.create(affiliate);
      
            return result
    
        } catch (error) {
    
            console.log(error)
    
        }
};

// Create new Affiliate.
export const updateAffiliate = async (affiliate) => {
        
        try {
    
            await dbConnect();
            let result = await affilateModel.findByIdAndUpdate(affiliate._id, affiliate);
      
            return result
    
        } catch (error) {
    
            console.log(error)
    
        }
};

// Delete Affiliate.
export const deleteAffiliate = async (id) => {

    try {

        await dbConnect();
        let result = await affilateModel.findByIdAndDelete(id);

        return result;
        
    } catch (error) {

        console.log(error)

    } 
};

/* 

    Promos

*/

export const getPromos = async () => {
    
    try {
        
        await dbConnect();
        let result = [
            {
                _id: 1,
                image: '/promos/promo_01.png',
                body: `<h4>We pride ourselves on making real food from the best ingredients.</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>`,
                checkList: []
            },
            {
                _id: 2,
                image: '/promos/promo_02.png',
                body: `<h4>We pride ourselves on making real food from the best ingredients.</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>`,
                checkList: ['Etiam sed dolor ac diam volutpat.', 'Erat volutpat aliquet imperdiet.', 'Purus a odio finibus bibendum.']
            }
        ];
        
        return result

    } catch (error) {

        console.log(error)

    }

};

/* 

    Faqs

*/

export const getFaqs = async () => {
    
    try {
        
        await dbConnect();
        let result = await faqModel.find({});
        
        return result


    } catch (error) {

        console.log(error)

    }

};

/* 

    Faq

*/

export const getFAQ = async (id) => {
    
    try {
        
        await dbConnect();
        let result = await faqModel.findById({_id: id});
        
        return result

    } catch (error) {

        console.log(error)

    }
};

export const createFAQ = async (faq) => {
    
    try {

        await dbConnect();
        let result = await faqModel.create(faq);

        return result

    } catch (error) {

        console.log(error)

    }

};

export const updateFAQ = async (faq) => {
    
    try {

        await dbConnect();
        let result = await faqModel.findByIdAndUpdate(faq.id, faq);
        return result

    } catch (error) {

        console.log(error)

    }

};

// Delete FAQ.
export const deleteFAQ = async (id) => {

    try {

        await dbConnect();
        let result = await faqModel.findByIdAndDelete(id);

        return result;
        
    } catch (error) {

        console.log(error)

    } 
};

/*

    SUBSCRIBERS

*/

export const getSubscribers = async () => {
    
    try {

        await dbConnect();
        return await subscriberModel.find({});

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberByEmail = async (email) => {
    
    try {

        await dbConnect();
        let result = await subscriberModel.find({'email': email});

        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const getSubscriberById = async (id) => {
    

    try {

        await dbConnect();
        let result = await subscriberModel.find({'_id': id});
        return result.length === 0 ? {'message' : 'no such user found'} : result[0];

    } catch (error) {

        console.log(error)

    }

};

export const postSubscriber = async (subscriber) => {
    

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.create(subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const deleteSubscriber = async (id) => {
    
    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndDelete({_id: id}).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const putSubscriber = async (subscriber) => {

    try {

        await dbConnect();

        let result = {};
        await subscriberModel.findByIdAndUpdate({_id: subscriber.id}, subscriber).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

/*

    Create Basket

*/

export const createBasket = async (basket) => {
    
    try {

        await dbConnect();
        let result = await basketModel.create(basket);

        return result

    } catch (error) {

        console.log(error)

    }

};


export const getBasketByEmail = async (email) => {
    
    try {

        await dbConnect();
        let result = await basketModel.findOne({"email": email});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const updateBasket = async (basket) => {

    try {

        await dbConnect();
        let result = await basketModel.findOneAndUpdate({email: basket.email}, basket);
        return result

    } catch (error) {

        console.log(error)

    }

};


export const deleteBasket = async (email) => {
    
    try {

        await dbConnect();

        let result = {};
        await basketModel.findOneAndDelete({email: email}).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

/* 

    ORDERS

*/

export const getOrders = async () => {
    
    try {

        await dbConnect();
        let result = await orderModel.find({});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const getOrderById = async (id) => {
    
    try {

        await dbConnect();
        let result = await orderModel.find({_id: id});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const getOrderByEmail = async (email) => {
    
    try {

        await dbConnect();
        let result = await orderModel.find({email: email});

        return result

    } catch (error) {

        console.log(error)

    }

};

export const postOrder = async (order) => {
    
    try {

        await dbConnect();

        let result = {};
        result = await orderModel.create(order);

        return result;
     

    } catch (error) {

        console.log(error)

    }

};

export const putOrder = async (order) => {
    

    try {

        await dbConnect();

        let result = {};
        await orderModel.findByIdAndUpdate({_id: order.id}, order).then((data) => {   
            result = data;
        }).catch((error) => {
            result = false;
        });

        return result;

    } catch (error) {

        console.log(error)

    }

};

export const deleteOrderById = async (id) => {
    
    try {

        await dbConnect();

        let result = {};
        result = await orderModel.findByIdAndDelete({_id: id});

        return result;
     

    } catch (error) {

        console.log(error)

    }

};
