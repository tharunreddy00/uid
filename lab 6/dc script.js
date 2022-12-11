function calculatePrice(){
    let priceInput = document.getElementById("price")
    let percentageInput = document.getElementById("percentage")
    let resultOriginal = document.getElementById("resultOriginal")
    let resultFinal = document.getElementById("resultFinal")
    let resultSaving = document.getElementById("resultSaving")

    price = parseFloat(priceInput.value)
    percentage = parseFloat(percentageInput.value)

    let percentageCalc = percentage * 0.01
    let discount = percentageCalc * price

    let finalPrice = price - discount 


    resultOriginal.innerHTML = `<p>Original price: ${price.toFixed(2)} $</p>`
    resultFinal.innerHTML = `<p>Final price: ${finalPrice.toFixed(2)} $</p>`
    resultSaving.innerHTML = `<p>You are saving: ${discount.toFixed(2)} $</p>`
}