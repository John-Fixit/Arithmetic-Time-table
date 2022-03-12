function displayTime(){
    var Time = new Date;
    var mm = Time.toLocaleTimeString();
    time.value = mm
}
setInterval(displayTime,10)

function mul() {
    song.pause()
    select = chose.options[chose.selectedIndex].value
    var val1 = input1.value;
    var val2 = input2.value
    var coil = ''
    if (select == 1) {
        coil += '<table border=1 align=center>Multiplication Table'
        coil+='<tr>'
        for(k = 1; k<=val1; k++){
            coil+='<th>'+'Multiplication'+'<br>'+'Table' + k +'</th>'
        }
        '</tr>'
        for (i = 1; i <= val2; i++) {
            coil += '<tr>'
            for (j = 1; j <= val1; j++) {
                coil += '<td>' +
                    j + 'x ' + i + '= ' + (i * j) +
                    '</td>'
            }
            '</tr>'
        }
        '</table>'
        document.getElementById("result").innerHTML = coil;
    }

    else if (select == 2) {
        coil = '';
        var val1 = input1.value;
        var val2 = input2.value;
        coil += '<table border = 1 align = center> Addition Table'
        coil+='<tr>'
        for(k = 1; k<=val1; k++){
            coil+='<th>'+'Multiplication'+'<br>'+'Table' + k +'</th>'
        }
        '</tr>'
        for (i = 1; i <= val2; i++) {
            coil += '<tr>'
            for (j = 1; j <= val1; j++) {
                coil += '<td>' + j + '+ ' + i + '= ' + (Number(j) + Number(i)) + '</td>'
            }
            '</tr>'
        }
        '</table>'
        result.innerHTML = coil;
    }
    else if (select == 3) {
        panel = '';
        var val1 = input1.value;
        var val2 = input2.value;
        panel += '<table border= 1 align = center> Subtraction Table'
        coil+='<tr>'
        for(k = 1; k<=val1; k++){
            coil+='<th>'+'Multiplication'+'<br>'+'Table' + k +'</th>'
        }
        '</tr>'
        for (i = 1; i <= val2; i++) {
            panel += '<tr>'
            for (j = 1; j <= val1; j++) {
                if (j > i) {
                    panel += '<td>' + j + '-' + i + '=' + (j - i) + '</td>'
                }
                else if (j < i) {
                    panel += '<td>' + i + '-' + j + '=' + (i - j) + '</td>'
                }
            }
            '</tr>'
        }
        '</table>'
        result.innerHTML = panel
    }
    else if (select == 4) {
        panel = '';
        var val1 = input1.value;
        var val2 = input2.value;
        panel += '<table border= 1 align = center> Division Table'
        coil+='<tr>'
        for(k = 1; k<=val1; k++){
            coil+='<th>'+'Multiplication'+'<br>'+'Table' + k +'</th>'
        }
        '</tr>'
        for (i = 1; i <= val2; i++) {
            panel += '<tr>'
            for (j = 1; j <= val1; j++) {
                if (j > i) {
                    panel += '<td>' + j + '/' + i + '=' + (j / i).toFixed(1) + '</td>'
                }
                else if (j < i) {
                    panel += '<td>' + i + '/' + j + '=' + (i / j).toFixed(1) + '</td>'
                }
            }
            '</tr>'
        }
        '</table>'
        result.innerHTML = panel
    }
    else if (select == 0){
        alert('Please select the operation')
    }
    
}
