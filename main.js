import { calculateEdad } from "./calculateEdad.js"
import { validation } from "./validatio.js"

const btnCaculate = document.querySelector('.globo')
btnCaculate.addEventListener('click', () => {
    const day = parseInt(document.querySelector('.day').value)
    const month = parseInt(document.querySelector('.month').value)
    const year = parseInt(document.querySelector('.year').value)

    let dia = '--'
    let mes = '--'
    let anho =  '--'

    document.getElementById('p-day').style.color = 'rgb(117, 117, 117)'
    document.getElementById('input-day').style.borderColor = 'rgb(117, 117, 117, .5)'
    document.getElementById('error-day').innerHTML = ``

    document.getElementById('p-month').style.color = 'rgb(117, 117, 117)'
    document.getElementById('input-month').style.borderColor = 'rgb(117, 117, 117, .5)'
    document.getElementById('error-month').innerHTML = ``

    document.getElementById('p-year').style.color = 'rgb(117, 117, 117)'
    document.getElementById('input-year').style.borderColor = 'rgb(117, 117, 117, .5)'
    document.getElementById('error-year').innerHTML = ``

    const validate = validation(day, month, year)
    console.log(validate)

    if(validate[4]){
        if(validate[0]){
            document.getElementById('p-day').style.color = 'red'
            document.getElementById('input-day').style.borderColor = 'red'
            document.getElementById('error-day').innerHTML = `<i>${validate[0]}</i>`
        }if(validate[1]){
            document.getElementById('p-month').style.color = 'red'
            document.getElementById('input-month').style.borderColor = 'red'
            document.getElementById('error-month').innerHTML = `<i>${validate[1]}</i>`
        }
        if(validate[2]){
            document.getElementById('p-year').style.color = 'red'
            document.getElementById('input-year').style.borderColor = 'red'
            document.getElementById('error-year').innerHTML = `<i>${validate[2]}</i>`
        }
        if(validate[3]){
            document.getElementById('p-day').style.color = 'red'
            document.getElementById('input-day').style.borderColor = 'red'
            document.getElementById('error-day').innerHTML = `<i>${validate[3]}</i>`
            document.getElementById('p-month').style.color = 'red'
            document.getElementById('input-month').style.borderColor = 'red'
            document.getElementById('p-year').style.color = 'red'
            document.getElementById('input-year').style.borderColor = 'red'
        }
    }else{
        [anho, mes, dia] = calculateEdad(day, month, year)
    }

    document.querySelector('.dia').textContent = dia   
    document.querySelector('.mes').textContent = mes
    document.querySelector('.anho').textContent = anho
})


