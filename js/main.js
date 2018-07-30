window.onload = function(){
    let dropdown = document.querySelector('.dropbtn')
    let dropdownContent = document.querySelector('.dropdown-content')
    let dropdownItems = document.querySelectorAll('.dropdown-content span')
    let btc = document.getElementById('BTC')
    let hour = document.getElementById('Hour')
    let day = document.getElementById('Day')
    let week = document.getElementById('Week')
    let month = document.getElementById('Month')

    dropdown.onclick = function(){
        dropdownContent.classList.toggle('visible')

    }


    for (var i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].onclick = function(e){
            let value = e.target.dataset.value
            dropdown.innerHTML = value
            dropdownContent.classList.remove('visible')
        }
    }

    fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
        .then(response => response.json())

        .then(data => {

            btc.innerHTML ='$' + `${data.ask}`

            hour.innerHTML =  `${data.changes.percent.hour}` + '%'

            day.innerHTML =  `${data.changes.percent.day}` + '%'

            week.innerHTML =  `${data.changes.percent.week}` + '%'

            month.innerHTML =  `${data.changes.percent.month}` + '%'

        })
        .catch(error => console.error(error));

}



