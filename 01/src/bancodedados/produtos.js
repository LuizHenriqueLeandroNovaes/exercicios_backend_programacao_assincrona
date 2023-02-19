// const produtos = require('./produtos');
// const { getStateFromZipcode } = require('utils-playground');

// const procurar = async (req, res) => {
//     return res.json(produtos);
// }

// const detalharProduto = async (req,res) => {

//     const {id} = req.params;


//     const produto = produto.find(produto => {
//         produto.id === Number(id)
//     });

//     if(!produto){
//         return res.status(404).json({mensagem: 'Produto não encontrado.'});
//     }

//     return res.json(produto);

// }

// const calcularFrete = async (req,res) => {

//     let produto;

//     const {id , cep} = produto.find(produto => {
//         produto.id === Number(id)
//     });



// if(!produto){
//     return res.status(404).json({mensagem: 'Produto não encontrado.'});
// }

// const estado = await getStateFromZipcode(cep);

// let Frete = 0.0 ;


// if(estado === 'SP' || estado === 'RJ'  ){

//     Frete = produto.valor * 0.15 ;

//     return res.json({
//         produto,
//         estado,
//         frete: Frete
//     })
// }
// if(estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB'  ){

//     Frete = produto.valor * 0.1 ;

//     return res.json({
//         produto,
//         estado,
//         frete: Frete
//     })
// }

// return res.json(estado);

// }

// module.exports = {
//     procurar,
//     detalharProduto,
//     calcularFrete
// }


module.exports = [
    { id: 1, nome: 'Teclado mecânico Keychron K2', valor: 100000 },
    { id: 2, nome: "TV Samsung 4K", valor: 129900 },
    { id: 3, nome: "Notebook Dell", valor: 399990 },
    { id: 4, nome: "Mouse MX Master 3", valor: 23000 },
    { id: 5, nome: "Teclado Keychron K8", valor: 50000 },
    { id: 6, nome: "Cabo USB 2 Metros", valor: 1990 },
    { id: 7, nome: "Carregador portátil", valor: 4590 },
    { id: 8, nome: "Webcam C920s", valor: 80000 },
    { id: 9, nome: "Monitor LG 29 FHD", valor: 129900 },
];

