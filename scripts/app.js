(function() {
    const buttons = document.querySelectorAll('.Btn')
    let count = 0


    //Add event listeners and functionailty to each button  
    buttons.forEach(function(h2) {
        h2.addEventListener('click', function() {
            if (h2.classList.contains('prevBtn')) {
                count--
            } else if (h2.classList.contains('nextBtn')) {
                count++
            }else if (h2.classList.contains('resetBtn')){
                count = 0
            }

            //Select the counter text
            const counter = document.querySelector('#counter')
            counter.textContent = count

            if (count < 0) {
                counter.style.color = 'red'
            } else if (count > 0) {
                counter.style.color = 'green'
            } else {
                counter.style.color = 'white'
            }
        })
    })
})()