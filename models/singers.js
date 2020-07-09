const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SingerSchema = new Schema ({
	_id: mongoose.Schema.Types.ObjectId,

	singer_name: { type: String, required: true, maxlength: 50 },
	singer_surname: { type: String, required: true, maxlength: 50 },
	singer_dob: { type: Date},
	singer_dod: { type: Date}
})

SingerSchema
	.virtual('singer_fullname')
	.get(function() {
		let fullname = ''
		if(this.singer_name && this.singer_surname) {
			fullname = `${this.singer_name} ${this.singer_surname}`
		}
		if(!this.singer_name || !this.singer_surname) {
			fullname = ''
		}
		
		return fullname
	})

SingerSchema
	.virtual('lifespan')
	.get(function() {
		return (this.singer_dod.getYear() -  this.singer_dob.getYear()).toString()
	})

SingerSchema
	.virtual('url')
	.get(function() {
		return '/singers' + this._id
	})

module.exports = mongoose.model('Singer', SingerSchema)