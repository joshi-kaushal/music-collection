const express = require('express')
const router = express.Router()

// REQUIRE CONTROLLER MODULES
const album_controller = require('../controllers/albumController')
const composer_controller = require('../controllers/composerController')
const genre_controller = require('../controllers/genreController')
const lyricist_controller = require('../controllers/lyricistController')
const singers_controller = require('../controllers/singersController')
const song_controller = require('../controllers/songController')


// ALBUM ROUTES
// GET catalog home page
router.get('/', song_controller.index)

// GET - Create album
router.get('/album/create', album_controller.album_create_get)

// POST - Create album
router.post('/album/create', album_controller.album_create_post)

// GET - Delete album
router.get('/album/:id/delete', album_controller.album_delete_get)

// POST - Delete album
router.post('/album/:id/delete', album_controller.album_delete_post)

// GET - Updare album
router.get('/album/:id/update', album_controller.album_update_get)

// POST - Updare album
router.post('/album/:id/update', album_controller.album_update_get)


// COMPOSER ROUTES
// GET catalog home page
// router.get('/', song_controller.index)

// GET - Create composer
router.get('/composer/create', composer_controller.composer_create_get)

// POST - Create composer
router.post('/composer/create', composer_controller.composer_create_post)

// GET - Delete composer
router.get('/composer/:id/delete', composer_controller.composer_delete_get)

// POST - Delete composer
router.post('/composer/:id/delete', composer_controller.composer_delete_post)

// GET - Updare composer
router.get('/composer/:id/update', composer_controller.composer_update_get)

// POST - Updare composer
router.post('/composer/:id/update', composer_controller.composer_update_get)


// GENRE ROUTES
// GET catalog home page
// router.get('/', song_controller.index)

// GET - Create genre
router.get('/genre/create', genre_controller.genre_create_get)

// POST - Create genre
router.post('/genre/create', genre_controller.genre_create_post)

// GET - Delete genre
router.get('/genre/:id/delete', genre_controller.genre_delete_get)

// POST - Delete genre
router.post('/genre/:id/delete', genre_controller.genre_delete_post)

// GET - Updare genre
router.get('/genre/:id/update', genre_controller.genre_update_get)

// POST - Updare genre
router.post('/genre/:id/update', genre_controller.genre_update_get)


// LYRICIST ROUTES
// GET catalog home page
// router.get('/', song_controller.index)

// GET - Create lyricist
router.get('/lyricist/create', lyricist_controller.lyricist_create_get)

// POST - Create lyricist
router.post('/lyricist/create', lyricist_controller.lyricist_create_post)

// GET - Delete lyricist
router.get('/lyricist/:id/delete', lyricist_controller.lyricist_delete_get)

// POST - Delete lyricist
router.post('/lyricist/:id/delete', lyricist_controller.lyricist_delete_post)

// GET - Updare lyricist
router.get('/lyricist/:id/update', lyricist_controller.lyricist_update_get)

// POST - Updare lyricist
router.post('/lyricist/:id/update', lyricist_controller.lyricist_update_get)


// SINGERS ROUTES
// GET catalog home page
// router.get('/', song_controller.index)

// GET - Create singers
router.get('/singers/create', singers_controller.singers_create_get)

// POST - Create singers
router.post('/singers/create', singers_controller.singers_create_post)

// GET - Delete singers
router.get('/singers/:id/delete', singers_controller.singers_delete_get)

// POST - Delete singers
router.post('/singers/:id/delete', singers_controller.singers_delete_post)

// GET - Updare singers
router.get('/singers/:id/update', singers_controller.singers_update_get)

// POST - Updare singers
router.post('/singers/:id/update', singers_controller.singers_update_get)


// SONGS ROUTES
// GET catalog home page
// router.get('/', song_controller.index)

router.get('/song/all', song_controller.display_songs)
// GET - Create song
router.get('/song/create', song_controller.song_create_get)

// POST - Create song
router.post('/song/create', song_controller.song_create_post)

// GET - Delete song
router.get('/song/:id/delete', song_controller.song_delete_get)

// POST - Delete song
router.post('/song/:id/delete', song_controller.song_delete_post)

// GET - Updare song
router.get('/song/:id/update', song_controller.song_update_get)

// POST - Updare song
router.post('/song/:id/update', song_controller.song_update_get)


module.exports = router