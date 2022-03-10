function Multiply() {
    var time = ''
    var val1 = block.value;
    var val2 = line.value;
    time+='<table border="1">'
    for (let j = 1; j <= val2; j++) {
        time+='<tr>'
            for (let i = 1; i <= val1; i++) {
                time += '<td>' + i + ' x ' + j + ' = ' + (i * j) + ' </td>'
            }
        '</tr>'
    }
'</table>'
    document.getElementById('result').innerHTML = time
}
function Add(){
    var val1 = block.value;
    var val2 = line.value;
    var time = ''
    time+='<table border=1>'
        for (j = 1; j<=val2; j++){
       time+='<tr>'
        for (i=1; i <= val1; i++){
            time+='<td>' + j + '+' + i + '=' + (Number(j)+Number(i)) + '</td>'
        }
        '</tr>' 
    }
        '</table>'
    document.getElementById('result').innerHTML = time

}
function Subtract(){
    var val1 = block.value;
    var val2 = line.value;
    var time = ''
    time+='<table border=1>'
        for (j = 1; j<=val1; j++){
       time+='<tr>'
        for (i=1; i <= val2; i++){
            time+='<td>' + j + '-' + i + '=' + (Number(j)-Number(i)) + '</td>'
        }
        '</tr>' 
        time+='<br>'
    }
        '</table>'
    document.getElementById('result').innerHTML = time

}