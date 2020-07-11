const Song = require('../models/song')
const Album = require('../models/album')

const async = require('async')
const validator = require('express-validator');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.index = function(req, res) {
	async.parallel({
		song_count: function(callback) {
			Song.countDocuments({}, callback)
		},
		album_count: function(callback) {
			Album.countDocuments({}, callback)
		}
	}, function(err, results) {
		res.render('index', { title: 'Harmony', error: err, data: results })
	})
}

// DISPLAYING ALL SONGS
exports.display_songs = function(req, res) {
	//res.send('NOT IMPLEMENTED YET: DISPLAY ALL SONGS')
	Song.find({}, 'song album')
		.populate('album')
		.exec(function(err, song_list){
			if(err) { return next(err) }

			res.render('song_list', { title: 'All Songs', song_list: song_list} )
		})
}

// DISPLAY SONG CREATE FROM GET
exports.song_create_get = function(req, res) {
	//res.send('NOT IMPLEMENTED YET: SONG CREATE GET')
	res.render('song_form', {title: 'Add New Song'})
}

// HANDLE SONG CREATE FROM POST
exports.song_create_post = [

	//validation
	validator.body('song_name', 'Song Name required').trim().isLength({ min: 1 }),
	validator.body('composer_name', 'Composer\'s Name required').trim().isLength({ min: 1 }),
	validator.body('singers_name', 'Singers\' name required').trim().isLength({ min: 1 }),
	validator.body('lyricist_name', 'Lyricist\'s Name required').trim().isLength({ min: 1 }),
	validator.body('album_name', 'Album Name required').trim().isLength({ min: 1 }),
	validator.body('language', 'Language required').trim().isLength({ min: 1 }),

	// Sanitize fields
	sanitizeBody('*').escape(),

	// Processing request after validation and sanitization
	(req, res, next) => {

		// Extracting validation and sanitization erros
		const errors = validationResult(req)

		// Creating song object with escaped and trimemd data
		let song = new Song ({
			song_name: req.body.title,
			language: req.body.language,	
			album_name: req.body.album_name,
			singers_name: req.body.singers_name,
			composer_name: req.body.composer_name,
			lyricist_name: req.body.lyricist_name,
			genre_name: req.body.genre_name
		})

		if(!errors.isEmpty()) {
			// This means, there are errors. Render form again with sanitized values/error messages.

			res.render('song_form', {title: 'Add new Song', data: 'arey kuch nahi samja'})
			return
		}
		else {
			// Tihs means, form is valid, You can save the data.
			song.save(function(err) {
				if(err) {return next(err)}

				res.redirect(song.url)
			})
		}
	} 
];

// DISPLAY SONG DELETE FROM GET
exports.song_delete_get = function(req, res) {
	res.send('NOT IMPLEMENTED YET: SONG DELETE GET')
}

// HANDEL SONG DELETE FROM POST
exports.song_delete_post = function(req, res) {
	res.send('NOT IMPLEMENTED YET: SONG DELETE POST')
}

// DISPLAY SONG UPDATE FORM GET
exports.song_update_get = function(req, res) {
	res.send('NOT IMPLEMENTED YET: SONG UPDATE GET')
}

// HANDEL SONG UPDATE FROM POST
exports.song_update_post = function(req, res) {
	res.send('NOT IMPLEMENTED YET: SONG UPDATE POST')
}
