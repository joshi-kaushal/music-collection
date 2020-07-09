const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AlbumSchema = new Schema ({
	_id: mongoose.Schema.Types.ObjectId,
	album_name: { type: String, required: true, maxlength: 50 },
	release_year: { type: Number },
	composer_name: {type: Schema.Types.ObjectId, ref: 'Composer', required: true},
})

AlbumSchema
	.virtual('url')
	.get(function() {
		return '/album' + this._id
	})


module.exports = mongoose.model('Album', AlbumSchema)