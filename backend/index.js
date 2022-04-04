const compression = require('compression')
const express = require('express')
const { google } = require('googleapis')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(compression())

app.get('/data', async (req, res) => {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: 'credentials.json',
            scopes: 'https://www.googleapis.com/auth/spreadsheets',
        })

        const spreadsheetID = '1LFri67Eb2nW8VmoG7FGNXIhGAexqGxdZnNQqvzCm-dw'

        const client = await auth.getClient()

        const googleSheets = google.sheets({ version: 'v4', auth: client })

        const metaData = await googleSheets.spreadsheets.get({
            auth: auth,
            spreadsheetId: spreadsheetID,
        })

        const getPrices = await googleSheets.spreadsheets.values.get({
            auth: auth,
            spreadsheetId: spreadsheetID,
            range: 'bdoMarket_MasterItemsTable!A:Q',
        })

        res.send({ prices: getPrices.data })
    } catch (err) {
        console.log(err)
    }
})

app.listen(5000, (req, res) => console.log('Running on 5000!'))
