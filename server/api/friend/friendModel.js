import mongoose from 'mongoose';

const FriendSchema = new mongoose.Schema({
    email: { type: String, required: true },
    occupation: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    file: { type: String, required: true },
    status: { type: Boolean, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    portfolioId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio' }]
});

export default mongoose.model('Friend', FriendSchema);
