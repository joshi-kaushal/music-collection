const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LyricistSchema = new Schema ({
	_id: mongoose.Schema.Types.ObjectId,

	lyricist_name: { type: String, required: true, maxlength: 50 },
	lyricist_surname: { type: String, required: true, maxlength: 50 },
	lyricist_dob: { type: Date},
	lyricist_dod: { type: Date}
})

LyricistSchema
	.virtual('lyricist_fullname')
	.get(function() {
		let fullname = ''
		if(this.lyricist_name && this.lyricist_surname) {
			fullname = `${this.lyricist_name} ${this.lyricist_surname}`
		}
		if(!this.lyricist_name || !this.lyricist_surname) {
			fullname = ''
		}
		
		return fullname
	})

LyricistSchema
	.virtual('lifespan')
	.get(function() {
		return (this.lyricist_dod.getYear() -  this.lyricist_dob.getYear()).toString()
	})

LyricistSchema
	.virtual('url')
	.get(function() {
		return '/lyricists' + this._id
	})

module.exports = mongoose.model('Lyricist', LyricistSchema)