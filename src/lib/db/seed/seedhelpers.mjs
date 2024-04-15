import affilateModel from '../models/affilate.model.mjs';
import faqModel from '../models/faq.model.mjs';
import orderModel from '../models/order.model.mjs';
import productModel from '../models/product.model.mjs';
import reviewModel from '../models/review.model.mjs';
import subscriberModel from '../models/subscriber.model.mjs';
import userModel from '../models/user.model.mjs';


/*

    Simple user check to see if db has been created.

*/
export const dbExists = async () => {

    try {
        let users = await userModel.find({'name': 'admin'});
        return users[0]
    } catch (error) {
        throw(error)
    }

}

/*

    Create new User

*/
export const seedDefaultUser = async (user) => {

    try {
        let newUser = userModel.create(user);
        return newUser
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Product

*/
export const seedDefaultProduct = async (product) => {

    try {
        
        let newProduct = productModel.create(product);
        return newProduct
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Review

*/
export const seedDefaultReview = async (review) => {

    try {
        
        let newReview = reviewModel.create(review);
        return newReview
    } catch (error) {
        throw(error)
    }

}


/*

    Create new Review

*/
export const seedDefaultAffiliate = async (affiliate) => {

    try {
        
        let newAffiliate = affilateModel.create(affiliate);
        return newAffiliate
    } catch (error) {
        throw(error)
    }

}


/*

    Create new FAQ

*/
export const seedDefaultFAQ = async (faq) => {

    try {
        
        let newFaq = faqModel.create(faq);
        return newFaq
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Subscriber

*/
export const seedDefaultSubscriber = async (subscriber) => {

    try {
        
        let newSubscriber = subscriberModel.create(subscriber);
        return newSubscriber
    } catch (error) {
        throw(error)
    }

}

/*

    Create new Order

*/
export const seedDefaultOrder = async (order) => {

    try {
        
        let newOrder = orderModel.create(order);
        return newOrder;
    } catch (error) {
        throw(error)
    }

}