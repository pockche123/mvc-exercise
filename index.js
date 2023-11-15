const app = require('./app')
const port = process.env.PORT || 3100

app.listen(port, () => {
    console.log(`Express departing from port ${port}`)
})
