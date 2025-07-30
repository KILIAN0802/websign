const { strict } = require('assert');
const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete =require('mongoose-delete'); 


const InformationSchema = new Schema({
    name:{type: String, required: true,},
    email: {type: String, required: true,},
    phone: {type: String, MaxLength: 12, required: true,},
    address: {type: String, required: true,},
    mission: {type: String},
    dateofbirth: {type: String, required: true,},
    gender: {type: String, required: true,},
    slug: {type: String, slug: 'name', unique: true},
}
, {
    timestamps: true,
}
);
// Add plugins
mongoose.plugin(slug);
InformationSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods:'all',
});

module.exports = mongoose.model('Information', InformationSchema, 'information')