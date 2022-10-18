for (let rows=0; rows<=10; rows++){
    document.write('<tr>');
    for (let cols=0; cols<=10; cols++){
        if (rows === 0 && cols === 0) {
            document.write('<td class="x">x</td>');
        }
        else if (rows === 0 && cols > 0) {
            document.write('<td class="num1 bold">' + cols + '</td>');
        }
        else if (cols === 0) {
            document.write('<td class="num2 bold">' + rows + '</td>');
        }
        else if (cols === rows) {
            document.write('<td class="squares bold">' + (rows*cols) + '</td>');
        }
        else {
            document.write('<td>' + (rows*cols) + '</td>');
        }
        
        
    }
    document.write('</tr>');
}