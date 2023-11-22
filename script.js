paypal.Buttons({
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Implement additional logic here (e.g., redirect to a thank you page)
        });
    },
    onError: function (err) {
        console.error('Error:', err);
        // Handle errors gracefully
    },
    style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'paypal'
    }
}).render('#paypal-button-container');
