module.exports = (mongoose) => {
    const { Schema } = mongoose;
    const { String, ObjectId, Number } = Schema.Types;

    const shoeSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imageURL: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        seller: {
            type: String,
            required: true
        },
        buyers: [
            {
                type: ObjectId,
                ref: 'User'
            }
        ],
    });

    return mongoose.model('Shoe', shoeSchema);
}