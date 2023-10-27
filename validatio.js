export function validation(dia, mes, anho){
    let fecha = new Date()

    let diasDeLosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let validata = [ '', '', '', '', false]

    if(!dia){
        validata[0] = 'This field is required'
        validata[4] = true
    }if(!mes){
        validata[1] = 'This field is required'
        validata[4] = true
    }if(!anho){
        validata[2] = 'This field is required'
        validata[4] = true
    }

    if(dia > 31 || dia < 1){
        validata[0] = 'Must be a valid day'
        validata[4] = true
    }if(mes > 12 || mes < 1){
        validata[1] = 'Must be a valid month'
        validata[4] = true
    }if(anho > fecha.getFullYear()){
        validata[2] = 'Must be in the past'
        validata[4] = true
    }

    if(!validata[4]){
        if(anho % 4 == 0){
            diasDeLosMeses[1] = 29
        }

        if(dia > diasDeLosMeses[mes - 1]){
            validata[3] = 'Must be a valid date'
            validata[4] = true
        }
    }
    
    return validata
}