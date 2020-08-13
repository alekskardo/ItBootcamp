function func(pokemoni) {
    let brzina = []
    pokemoni.forEach(element => {
        brzina.push(element.characteristics.speed)
        brzina.sort((a,b) => a - b)
    }) 
    return brzina
}

export {func}