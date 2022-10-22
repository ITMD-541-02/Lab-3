var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    document.getElementById("percentage").value = output.innerHTML + "%";

    var tip = output.innerHTML * .01;
    var amount = (bill.value * tip).toFixed(2);
    var grandTotal = (parseFloat(bill.value) + parseFloat(amount)).toFixed(2);

    document.getElementById("amount").value = "$" + amount;
    document.getElementById("total").value = "$" + grandTotal;
}
