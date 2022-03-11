
function check(){
    var choice = choose.options[choose.selectedIndex].value 
    var val1 = block.value
    var val2 = line.value
    var total = ''
    total+= '<table border=1>'
        for (i = 1; i<=val1; i++){
            total+='<tr>'
            for (j = 1; j<=val2; j++){
                if (choice==1) {
                    total+='<td>'+ i + 'x' + j + '=' + (i*j)+
                '</td>'
                }
               else if (choice==2) {
                    total+='<td>'+ i + '+' + j + '=' + (Number(i)+ Number(j))+
                '</td>'
                }
               else if (choice==3) {
                   if (j<i) {
                       total+='<td>' + i + '-' + j + (i-j)
                   }
                   else if (j>i) {
                       total+='<td>' + j + '-' + i + '=' + (j-i) + '</td>'
                   }
                }
            }
            '</tr>'
        }
    '</table>'
        result.innerHTML = total
}