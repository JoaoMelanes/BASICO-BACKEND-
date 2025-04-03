function a() {
    console.log(`Executanda a()`)
}
function b() {
    console.log(`Executanda b()`)
}
function c() {
    console.log(`Executanda c()`)
    a()
    b()
}


a()
c()
b()