
module.exports = {
    getInventory: (req, res, next) => {
        const { name, image_url,  price, } = req.body;
        const dbInstance = req.app.get('db');
    
        dbInstance.read_products()
        .then(products => res.status(200).send(products) )
        .catch( () => res.status(500).send() 
        );
    },
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { name, image_url, price } = req.body;
        console.log(req.body)
    
        dbInstance.create_product([ name, image_url, price ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );

      },
      update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([ params.id, query.desc ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      },
    
      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_product([ params.id ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      }
}