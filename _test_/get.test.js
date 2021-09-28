const { app } = require('../server')
const supertest = require('supertest')
const request = supertest(app)

describe('get routes', () => {
    it('the number of my favorite games', async() => {
        const  gamesOwned =  [{
            "id": 0,
            "name": "Marvel's Avengers"
            },
        {
            "id": 1,
            "name": "Red Dead Redemption 2"
        },
        {
            "id": 2,
            "name": "League of Legends"
        },
        {
            "id": 3,
            "name": "Spider-Man: Miles Morales"
        },
        {
            "id": 4,
            "name": "Ghost of Tsushima"
        },
        {
            "id": 5,
            "name": "Spider-Man"
        }
        
        ]
        const response = await request.get('/gamesOwned')

        expect(response.body).toEqual(gamesOwned)
    })
    it('the number of my favorite games', async () => {
        const  gamesOwned =  {
            "id": 0,
            "name": "Marvel's Avengers"
            }
        
        const response = await request.get('/gamesOwned/0')

        expect(response.body).toEqual(gamesOwned)
    })
})