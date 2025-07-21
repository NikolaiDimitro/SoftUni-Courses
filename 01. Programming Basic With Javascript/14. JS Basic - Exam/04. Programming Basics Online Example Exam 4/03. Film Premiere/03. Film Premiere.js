function filmPremiere(projection, package, countTickets) {

    let totalPrice = 0;

    switch (projection) {

        case 'John Wick':

            if (package === 'Drink') {

                totalPrice = countTickets * 12;

            } else if (package === 'Popcorn') {

                totalPrice = countTickets * 15;

            } else {

                totalPrice = countTickets * 19;

            }

            break;

        case 'Star Wars':

            if (package === 'Drink') {

                totalPrice = countTickets * 18;

            } else if (package === 'Popcorn') {

                totalPrice = countTickets * 25;

            } else {

                totalPrice = countTickets * 30;

            }

            if (countTickets >= 4) {

                totalPrice *= 0.7;

            }

            break;

        case 'Jumanji':

            if (package === 'Drink') {

                totalPrice = countTickets * 9;

            } else if (package === 'Popcorn') {

                totalPrice = countTickets * 11;

            } else {

                totalPrice = countTickets * 14;

            }

            if (countTickets === 2) {

                totalPrice *= 0.85;

            }

            break;

    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);

}
filmPremiere('John Wick', 'Drink', 6);
filmPremiere('Star Wars', 'Popcorn', 4);
filmPremiere('Jumanji', 'Menu', 2);
filmPremiere('Star Wars','Drink',10)