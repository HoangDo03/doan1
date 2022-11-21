let amountElement = document.getElementById('amount');
            // console.log(amountElement);
            let amount = amountElement.value;
            console.log(amount);
    
            let render = (amount) => {
                amountElement.value = amount;
            }
            //handle plus
            let handle_plus = () => {
    
                amount++;
                render(amount);
                // console.log(amount);
            }
            //handle minus
            let handle_minus = () => {
                if (amount > 1)
                    amount--;
                render(amount);
                // console.log(amount);
            }
            amountElement.addEventListener('input', () => {
                amount = amountElement.value;
                amount = parseInt(amount);
                amount = (isNaN(amount) || amount == 0) ? 1 : amount;
                //console.log(amount);
            })
