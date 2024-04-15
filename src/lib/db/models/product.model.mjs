import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const productSchema = new Schema({
  title: { type: String, default: null },
  image: { type: String, default: '/products/no-product.jpg' },
  price: { type: Number, default: null },
  priceBefore: { type: Number, default: null },
  time: { type: String, default: null },
  serves: { type: Number, default: null },
  explore: { type: Boolean, default: true },
  created : { type : Date, default: new Date() }
});

export default mongoose.models.product || mongoose.model('product', productSchema);