const { listarPokemons, detalharPokemon } = require('utils-playground');

const pokemons = async (req, res) => {

    try{

        const { pagina } = req.query;

        const listaPokemon = await listarPokemons(pagina);

        return res.json(listaPokemon);

    }catch(error){
        console.log(error);
    }
}

const pokemon = async (req,res) => {

    const { idOuNome } = req.params;
    
    try{
        
        const encontrado = await detalharPokemon(idOuNome);
        
        const {   
            id,   
            name,   
            height,  
            weight,  
            base_experience, 
            forms,  
            abilities, 
            species
        } = encontrado;
    
        return res.json({
            id,   
            name,   
            height,  
            weight,  
            base_experience, 
            forms,  
            abilities, 
            species
        });

    }catch{

            return res.status(404).json("Pokemon não encontrado");
              
    }
    
}

module.exports = {
    pokemons,
    pokemon
}

// const { listarPokemons, detalharPokemon } = require('utils-playground');

// const pokemons = async (req, res) => {

//     const { pagina } = req.query;

//     const listaPokemon = await listarPokemons(pagina);

//     return res.json(listaPokemon);
// }

// const pokemon = async (req,res) => {

//     const { idOuNome } = req.params;
    
//     try{
        
//         const encontrado = await detalharPokemon(idOuNome);
        
//         const {   
//             id,   
//             name,   
//             height,  
//             weight,  
//             base_experience, 
//             forms,  
//             abilities, 
//             species
//         } = encontrado;
    
//         return res.json({
//             id,   
//             name,   
//             height,  
//             weight,  
//             base_experience, 
//             forms,  
//             abilities, 
//             species
//         });

//     }catch{

//             return res.status(404).json("Pokemon não encontrado");
              
//     }
    
// }

// module.exports = {
//     pokemons,
//     pokemon
// }