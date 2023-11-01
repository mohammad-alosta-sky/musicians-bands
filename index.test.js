const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const newBand = await Band.create({
            name:"Golden future",
            genre:"Rock"
        })
        expect(newBand.name).toBe("Golden future");
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const newMusician = await Musician.create({
            name: "Thomas",
            instrument: "Guitar"
        })
        expect(newMusician.name).toBe('Thomas');
    })

    test('can create a Song', async () => {
        // TODO - test creating a song
        const newSong = await Song.create({
            title: "SOS",
            year: 2001,
            length: 140
        })
        expect(newSong.title).toBe('SOS');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const newBand = await Band.findByPk(1);
    //     await newBand.update({
    //         name: "Multiverse",
    //         genre: "Rock"
    // })
    const updatedUser = await newBand.update({name: "Multiverse"})
        expect(newBand.name).toBe('Multiverse');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const newMusician = await Musician.findByPk(1)
        const updatedMusician = await newMusician.update({instrument: "drums"})
        expect(newMusician.instrument).toBe('drums');
    })

    test('can update a Song', async () => {
        // TODO - test updating a Song
        const newSong = await Song.findByPk(1)
        const updatedSong = await newSong.update({title: "Showdown"})
        expect(newSong.title).toBe("Showdown");
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        let testband = await Band.create({name: "test band", genre: "rock"})
        await testband.destroy()
        const foundBand = await Band.findByPk(2)
        expect(foundBand).toBeNull();
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        await Musician.destroy({
            where: {
                name: "Thomas"
            }
        })
        expect(await Musician.findByPk(1)).toBe(null);
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a song
        let testSong = await Song.create({Title: "test song", year: 2023, length: 142})
        await testSong.destroy()
        const foundSong = await Song.findByPk(2)
        expect(foundSong).toBeNull();
    })
})