const heroes = ['Batman','Superman','Flash','Aquaman']
// heroes.sort()
// const heroesCopy = heroes

const deletedHero = heroes.toSpliced(0,2,'Green Lantern')


// const sortedHeroes = heroes.toSorted()
// const reversedHeroes = heroes.toReversed()

console.table(heroes)
// console.table(sortedHeroes)
// console.table(reversedHeroes)
console.table(deletedHero)