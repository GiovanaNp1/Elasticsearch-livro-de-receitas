const client = require('../client')

module.exports = {
    async verify (req, res){
        const resp = client.info();
        res.send( await resp);
    },

    async index (req, res){
        let searchResult = client.search({index: 'empregados', body: req.body});

        res.send(await searchResult)
    },

    async exists (req, res){
        const exists = await client.exists({
            index: 'game-of-thrones',
            id: 1
         }) 

        res.send(await exists)
    },

    async create (req, res){
        const result = client.helpers.bulk({
            datasource: req.body,
            onDocument: (doc) => (
                { 
                    index: { _index: req.originalUrl.substring(1) }, 
                    mappings: {
                            properties: {
                                "data_de_nascimento": {
                                    "type": "date",
                                    "format": "dd/MM/yyyy"
                                 }
                            }
                    }
                }
            ),
        });
        result.then((resultReturn) =>res.send(resultReturn));
    },
}