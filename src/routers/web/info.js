import { Router } from 'express'

const infoWebRouter = new Router()

infoWebRouter.get('/info', (req, res) => {
    res.json({
        "Argumentos de entrada": process.argv,
        "Sistema Operativo": process.platform,
        "Version de node" : process.version,
        "Memoria total reservada": process.memoryUsage().rss,
        "Path de ejecucion" : process.execPath,
        "Process id" : process.pid,
        "Carpeta del proyecto": process.cwd()
       });
})

export default infoWebRouter