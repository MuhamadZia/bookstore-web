function searchTable() {
    let input, filter, table, tr, td, i, txtValue
    input = document.getElementById('myInput')
    filter = input.value.toUpperCase()
    table = document.getElementById('myTable')
    tr = document.getElementsByTagName('tr')

    for(let i=0; i<tr.length; i++){
        td = tr[i].getElementsByTagName('td')[0]
        if(td){
            txtValue = td.textContent || tr.innerText
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display =""
            }
            else{
                tr[i].style.display = "none"
            }
        }
    }
}
