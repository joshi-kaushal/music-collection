const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const ComposerSchema = new Schema ({
	_id: mongoose.Schema.Types.ObjectId,

	composer_name: { type: String, required: true, maxlength: 50 },
	composer_surname: { type: String, required: true, maxlength: 50 },
	composer_dob: { type: Date},
	composer_dod: { type: Date}
})

ComposerSchema
	.virtual('composer_fullname')
	.get(function() {
		let fullname = ''
		if(this.composer_name && this.composer_surname) {
			fullname = `${this.composer_name} ${this.composer_surname}`
		}
		if(!this.composer_name || !this.composer_surname) {
			fullname = ''
		}
		
		return fullname
	})

ComposerSchema
	.virtual('lifespan')
	.get(function() {
		return (this.composer_dod.getYear() -  this.composer_dob.getYear()).toString()
	})

ComposerSchema
	.virtual('url')
	.get(function() {
		return '/composers' + this._id
	})

module.exports = mongoose.model('Composer', ComposerSchema)