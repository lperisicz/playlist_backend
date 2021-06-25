const BaseService = use('App/Services/BaseService')
const Song = use('App/Models/Song')
const Playlist = use('App/Models/Playlist')

class SongController {
    constructor() {
        this.service = new BaseService(Song)
        this.playlistService = new BaseService(Playlist)
    }

    async index({request, user}) {
        const filters = request.post()
        return await this.service.getAll(filters).paginable(filters)
    }

    async create({request}) {
        return await this.service.create(request.post())
    }

    async attach({request}) {
        const songIds = request.input('songIds')
        let playlistId = request.input('playlistId')
        if (!playlistId) {
            const playlist = await this.playlistService.create(request.post())
            playlistId = playlist.id
        }
        const playlistModel = await Playlist.findOrFail(playlistId)
        await playlistModel.songs().sync(songIds)
        return {}
    }

    async update({params, request}) {
        return await this.service.update(params.id, request.post())
    }

    async delete({params}) {
        return this.service.delete(params.id)
    }
}

module.exports = SongController
