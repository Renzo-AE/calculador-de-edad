export function calculateEdad(dia, mes, anho){

    const fecha = new Date()

    let resulDay = fecha.getDate() - dia
    let resulMonth = (fecha.getMonth() + 1) - mes
    let resulYear = fecha.getFullYear() - anho
    
    console.log(fecha.getDate(), fecha.getMonth() + 1, fecha.getFullYear())
    console.log(dia, mes, anho)
    console.log(resulDay, resulMonth, resulYear)

    let fechas = Array(3)

    if(resulDay < 0){
        if(resulMonth == 0){
            fechas[0] = resulYear - 1
            fechas[1] = 11
            fechas[2] = (fecha.getDate() + 30) - dia
            console.log('aqui')
            return fechas
        }if(resulMonth < 0){
            fechas[0] = resulYear - 1
            fechas[1] = (fecha.getMonth() + 12 ) - mes
            fechas[2] = (fecha.getDate() + 30 ) - dia
            console.log('aqui')
            return fechas
        }

        fechas[0] = resulYear
        fechas[1] = resulMonth - 1
        fechas[2] = (fecha.getDate() + 30 ) - dia
        console.log('aqui')
        return fechas
    }

    if(resulMonth < 0){
        fechas[0] = resulYear - 1
        fechas[1] = (fecha.getMonth() + 13 ) - mes
        fechas[2] = resulDay
        console.log('aqui')
        return fechas
    }

    fechas[0] = resulYear
    fechas[1] = resulMonth
    fechas[2] = resulDay
    console.log('aqui')
    return fechas
}