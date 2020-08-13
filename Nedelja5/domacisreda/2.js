function sposobnosti(pokemoni) {
    let niz = []
   
    pokemoni.forEach(element => {
        niz.push(element.abilities)
        
    }) 
    return niz
}

export {sposobnosti}