import mongoose, { Schema } from 'mongoose';
mongoose.set('runValidators', true);

const affiliateSchema = new Schema({
  title: { type: String, default: "Partner in Food" },
  imagePath: { type: String, default: '/affiliates/affiliates_placholder.png' },
  created : { type : Date, default: new Date() }
});

export default mongoose.models.affiliate || mongoose.model('affiliate', affiliateSchema);