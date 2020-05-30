let number = 95;
let sum = 0;
function summaNaoborot(number) {
	while (number > 0) { 
		sum+=number; 
		number--; 
	}
	console.log("Успешно! Сумма всех чисел до заданного равна " + sum); 
	return sum; 
}