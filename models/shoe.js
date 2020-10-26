module.exports = (mongoose) => {
    const { Schema } = mongoose;
    const { String, ObjectId } = Schema.Types;

    const shoeSchema = new Schema({

    });

    return mongoose.model('Shoe', shoeSchema);
}