function calculate(e) {
    e.preventDefault();

    const formData = new FormData(document.forms['submit-form'])

    const distance = formData.get('distance')
    const cost = formData.get('cost')
    const pricePerLiter = formData.get('pricePerLiter')
    const peopleCount = formData.get('peopleCount')
    const consumed = cost * (distance / 100);
    const totalPrice = (consumed * pricePerLiter).toFixed(2);
    const result = document.getElementById("totalPrice")
    const button = document.querySelector('button').textContent;
    const notification = document.getElementById('notification');

    if (distance && cost && pricePerLiter) {
        document.querySelectorAll('input')
            .forEach(input => {
                input.value = '';
            })

        if (peopleCount <= 1) {

            if (button === 'Сметни') {
                result.innerHTML = ` ${totalPrice}лв.`;
            } else {
                result.innerHTML = ` $${totalPrice}.`;
            }

        } else {
            if (button === 'Сметни') {
                result.innerHTML = ` ${(totalPrice / peopleCount).toFixed(2)}лв. за пътник.`;
            } else {
                result.innerHTML = ` $${(totalPrice / peopleCount).toFixed(2)} per person.`;
            }
        }
    } else {
        if (button === 'Calculate') {
            notification.innerHTML = `All fields with * must be filled.`;

            setTimeout(() => {
                notification.innerHTML = '';
            }, 3000)
        } else {
            notification.innerHTML = `Всички полета с * трябва да са попълнени.`;

            setTimeout(() => {
                notification.innerHTML = '';
            }, 3000)
        }
    }
}

function languageChange(e) {
    if (e.target.id === 'en') {
        document.getElementById('title').innerText = 'Fuel calculator for travel'
        document.querySelector('input[name="distance"]').placeholder = 'Distance in km *'
        document.querySelector('input[name="cost"]').placeholder = 'Fuel cost per 100km/h *'
        document.querySelector('input[name="pricePerLiter"]').placeholder = 'Fuel price per liter *'
        document.querySelector('input[name="peopleCount"]').placeholder = 'Passengers count'
        document.querySelector('button').textContent = 'Calculate'
    } else if (e.target.id === 'bg') {
        document.getElementById('title').innerText = 'Калкулатор на гориво'
        document.querySelector('input[name="distance"]').placeholder = 'Разстояние в километри *'
        document.querySelector('input[name="cost"]').placeholder = 'Разход за 100км *'
        document.querySelector('input[name="pricePerLiter"]').placeholder = 'Цена на горивото за литър *'
        document.querySelector('input[name="peopleCount"]').placeholder = 'Брой пътници'
        document.querySelector('button').textContent = 'Сметни'
    }
}

const divElement = document.getElementById('form')
divElement.addEventListener('click', languageChange)
