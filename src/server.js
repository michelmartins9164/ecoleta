const express = require("express")
const server = express()


// configurar pasta pública 
server.use(express.static("public"))
// configurar caminhos 
//página inicial
// req: pedido,requisição
//res: resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

//Ligar o servidor
server.listen(3000)