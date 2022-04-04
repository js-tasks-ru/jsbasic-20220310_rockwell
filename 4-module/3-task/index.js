function highlight(table) {
  for(let i = 1; i < table.rows.length; i++){
    for( let n = 0; n < table.rows[i].cells.length; n++){
        if (table.rows[i].cells[n].hasAttribute('data-available')){
            if (table.rows[i].cells[n].getAttribute('data-available') == 'true'){
                table.rows[i].cells[n].parentNode.classList.add('available');
            } else{
                table.rows[i].cells[n].parentNode.classList.add('unavailable');
            }
        }
        if (table.rows[i].cells[n].innerHTML == 'm'){
            table.rows[i].cells[n].parentNode.classList.add('male');
        }
        if (table.rows[i].cells[n].innerHTML == 'f'){
            table.rows[i].cells[n].parentNode.classList.add('female');
        }
        if (isFinite(table.rows[i].cells[n].innerHTML)){
            if (+table.rows[i].cells[n].innerHTML < 18){
                table.rows[i].cells[n].parentNode.style = "text-decoration: line-through";
            }
        }
        if (!table.rows[i].cells[n].parentNode.classList.contains('available') && !table.rows[i].cells[n].parentNode.classList.contains('unavailable') ){
            table.rows[i].cells[n].parentNode.setAttribute('hidden', 'true');
        }
    }
  }
}