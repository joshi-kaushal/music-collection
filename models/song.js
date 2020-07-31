	const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Declaring schema
const SongSchema = new Schema ( {

	song_name: { type: String, required: true, maxlength: 100 },
	language: { type: String, required: true, maxlength: 20},
	composer_name: { type: String, required: true, maxlength: 100 },
	lyricist_name: { type: String, required: true, maxlength: 100 },
	singer_names: [{ type: String, required: true, maxlength: 100 }],
	album_name: { type: String, required: true, maxlength: 100 },
	genre_name: { type: String, required: true, maxlength: 100 },
})

// Virtual property to return absolute url
SongSchema
	.virtual('url')
	.get(function() {
		return 'catalog/song/' + this._id
	})


module.exports = mongoose.model('Song', SongSchema)


	// composer_name: { type: Schema.Types.ObjectId, ref: 'Composer'},
	// lyricist_name: { type: Schema.Types.ObjectId, ref: 'Lyricist'},
	// singer_names: [{ type: Schema.Types.ObjectId, ref: 'Singers'}],
	// album_name: { type: Schema.Types.ObjectId, ref: 'Album'},
	// genre_name: { type: Schema.Types.ObjectId, ref: 'Genr