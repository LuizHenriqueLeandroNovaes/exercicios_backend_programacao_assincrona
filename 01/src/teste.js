const produtos = require('./bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const procurar = async (req, res) => {
    return res.json(produtos);
}

const detalharProduto = async (req,res) => {

    const {id } = req.params;

    const produto = produtos.find(produto => {
        return produto.id === Number(id)
    });

    if(!produto){
        return res.status(404).json({
            mensagem: 'Produto não encontrado.'
        });
    }

    return res.json(produto);

}

const calcularFrete = async (req,res) => {

    const {id, cep } = req.params;

    const produto = produtos.find(produto => {
        return produto.id === Number(id)
    });

if(!produto){
    return res.status(404).json({mensagem: 'Produto não encontrado.'});
}

const estado = await getStateFromZipcode(cep);

let Frete = 0.0 ;

if(estado === 'SP' || estado === 'RJ'  ){

    Frete = produto.valor * 0.15 ;

    return res.json({
        produto,
        estado,
        frete: Frete
    })
}
if(estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB'  ){

    Frete = produto.valor * 0.1 ;

    return res.json({
        produto,
        estado,
        frete: Frete
    })
}

return res.json(estado);

}

module.exports = {
    procurar,
    detalharProduto,
    calcularFrete
}
