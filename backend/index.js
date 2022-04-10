const compression = require('compression')
const express = require('express')
const { google } = require('googleapis')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

app.use(compression())

app.get('/data', async (req, res) => {
    const credentials = {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
        client_x509_cert_url: process.env.CLIENT_CERT_URL,
    }

    const auth = new google.auth.GoogleAuth({
        credentials,
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

const port = process.env.PORT || 5000

app.listen(5000, (req, res) => console.log(`Running on ${port}`))
