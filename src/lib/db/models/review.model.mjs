import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const reviewSchema = new Schema({
  text: { type: String, default: null },
  name: { type: String, default: null },
  imagePath: { type: String, default: '/testamonials/testamonial_placeholder.jpg' },
  created : { type : Date, default: new Date() }
});

export default mongoose.models.review || mongoose.model('review', reviewSchema);