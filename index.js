const compression = require('compression')
const express = require('express')
const { google } = require('googleapis')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(cors())

app.use(compression())

app.get('/data', async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'google-credentials.json',
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
})

if (process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static('frontend/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, (req, res) => console.log(`Running on ${port}`))
