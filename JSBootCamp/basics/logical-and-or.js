console.log(' ')
console.log('..l.o.g..m.e.s.s.a.g.e..s.t.a.r.t.s.. ')
console.log(' ')

let temp = 55

if(temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out!')
} else if(temp <= 0 || temp >= 120) {
    console.log('Do not go out!')
} else {
    console.log('It is ok outside!')
}

console.log(' ')
console.log('-------------------------------------')
console.log(' ')

let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu.')
}