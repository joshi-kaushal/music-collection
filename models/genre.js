const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenreSchema = new Schema ({
	_id: mongoose.Schema.Types.ObjectId,

	genre_name: { type: String, required: true, maxlength: 50}
})

GenreSchema
	.virtual('url')
	.get(function() {
		return '/genre' + this._id
	})

module.exports = mongoose.model('Genre', GenreSchema)