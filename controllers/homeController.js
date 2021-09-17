const computadoras = require('../data/computadoras')

module.exports = {
    index: (req, res)=>{
                return res.render('index', {title: 'TODOS LOS POSTEOS', computadoras: computadoras.lista })
    }, 
    product: (req, res)=>{
        let id = req.params.id;
        for(let i = 0; i < computadoras.lista.length; i++){
            if(computadoras.lista[i].id == id){
                return res.render('product', {computadoras : computadoras.lista[i]});
            }
        }
    }
}