#! /usr/bin/env node

console.log('This script populated some test data into the database')


// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
const async = require('async')
const Album = require('./models/album')
const Composer = require('./models/composer')
const Genre = require('./models/genre')
const Lyricist = require('./models/lyricist')
const Singers = require('./models/singers')
const Song = require('./models/song')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let songs = []
let albums = []

function songCreate(song_name, language, composer_name, lyricist_name, singer_names, album_name, genre_name, cb) {
	songDetail = {
		song_name: song_name,
		language: language
	}
	if(composer_name) {
		songDetail.composer_name = composer_name
	}
	if(lyricist_name) {
		songDetail.lyricist_name = lyricist_name
	}
	if(singer_names) {
		songDetail.singer_names = singer_names
	}
	if(album_name) {
		songDetail.album_name = album_name
	}
	if(singer_names) {
		songDetail.genre_name = genre_name
	}

	let song = new Song(songDetail)

	song.save(function(err) {
		if(err) {
			cb(err, null)
			return
		}
		console.log('New song: ' + song)
		songs.push(song)
		cb(null, song)
	})
}

function albumCreate(album_name, release_year, composer_name) {
	albumDetail = {
		album_name: album_name
	}
	if(release_year){
		albumDetail.release_year = release_year
	}
	if (composer_name) {
		albumDetail.composer_name = composer_name
	}

	let album = new Album(albumDetail)

	album.save(function(err) {
		if(err) {
			cb(err, null)
			return
		}
		console.log('New album: ' + album)
		album.push(album)
		cb(null, album)
	})
}


function fillSongs(cb) {
	async.series([
		function(callback) {
			songCreate('Rehna tu', 'Hindi', 'AR Rahman', 'Prasoon Joshi', ['AR Rahman', 'Benny Dayal', 'Tanvi'], 'Delhi-6', 'Romantic')
		},
		function(callback) {
			songCreate('Dil Se Re', 'Hindi', 'AR Rahman', 'Mehboob', ['AR Rahman'], 'Dil Se', 'Romantic')
		},
		function(callback) {
			songCreate('The Magic Flute', 'Instrumental', 'Mozart', 'Mozart', ['Mozart'], 'Magic Flute', 'ABC')
		},
	], cb)
}

function fillAlbums(cb) {
	async.series([
		function(callback) {
			albumCreate('Rehna Tu', 2009, 'AR Rahman')
		},
		function(callback) {
			albumCreate('Dil Se', 1998, 'AR Rahman')
		}
	], cb)
}

async.series([
	fillSongs, 
	fillAlbums
],
function(err, ressults) {
	if(err) { console.log('FINAL ERR: ' +err) }
	else { console.log('CURRENT INFO: \nSongs:' + songs + '\nAlbums:' +albums) }

	mongoose.connection.close()
})