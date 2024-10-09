document.querySelectorAll('.cart-item').forEach(item => {
    const quantityElement = item.querySelector('.item-quantity');
    item.querySelector('.increment').onclick = function() {
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotal();
    };
    item.querySelector('.decrement').onclick = function() {
        if (parseInt(quantityElement.textContent) > 1) {
            quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
            updateTotal();
        }
    }; 
    
    
    item.querySelector('.delete').onclick = function() {
        item.parentNode.removeChild(item);
        updateTotal();
    };
    item.querySelector('.like-button').onclick = function() {
        this.classList.toggle('liked');
    };
    function updateTotal() {
        let total = 0;

        document.querySelectorAll("cart-item").forEach(item => {
            const itemText =item.childNodes[0].textContent;
            const price = parseFloat(itemText.split("- $"));
            const quantity = parseInt(item.querySelector(".item-quantity").textContent);
            total += price * quantity
        })
        document.getElementById("total").textContent = total.toFixed(2)
    }
})
updateTotal();