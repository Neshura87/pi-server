import fsPromises from 'fs/promises'
import path from 'path'

export default async function Navbar(req: any, res: any) {
    try {
        const filePath = path.join(process.cwd(), '/confs/navbar.json')
        const jsonData = await fsPromises.readFile(filePath)
        const data = JSON.parse(jsonData.toString())
        res.status(200).json(data)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({error: 'Error reading data'})
    }
}