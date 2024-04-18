document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    var bmi = calculateBMI(weight, height);
    var status = getStatus(bmi);

    document.getElementById('bmiResult').innerText = "Твой IMT: " + bmi.toFixed(2);
    document.getElementById('bmiStatus').innerText = "Статус: " + status;
});

function calculateBMI(weight, height) {
    return weight / Math.pow(height / 100, 2);
}

function getStatus(bmi) {
    if (bmi < 18.5) {
        return "Недостаток веса";
    } else if (bmi < 25) {
        return "Нормальный вес";
    } else if (bmi < 30) {
        return "Избыточный вес";
    } else {
        return "Ожирение";
    }
}