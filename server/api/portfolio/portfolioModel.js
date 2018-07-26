import mongoose from 'mongoose';

const FilesSchema = new mongoose.Schema({
    path: { type: String, required: true },
    price: { type: String, required: true },
    createdAt: { type: Date, required: true }
});
const PortfolioSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    portfolioName: { type: String, required: true },
    files: [FilesSchema]
});

export default mongoose.model('Portfolio', PortfolioSchema);
