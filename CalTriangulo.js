class Triangulo {
	constructor(lado1, lado2, lado3) {
		this.lado1 = parseFloat(lado1);
		this.lado2 = parseFloat(lado2);
		this.lado3 = parseFloat(lado3);
	}

	calcularArea() {
		var s = (this.lado1 + this.lado2 + this.lado3) / 2;
		var area = Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
		return area;
	}

	calcularPerimetro() {
		var perim = this.lado1 + this.lado2 + this.lado3;
		return perim;
	}

	calcularTipo() {
		if (this.lado1 + this.lado2 > this.lado3 && this.lado1 + this.lado3 > this.lado2 && this.lado2 + this.lado3 > this.lado1) {
			if (this.lado1 == this.lado2 && this.lado2 == this.lado3) {
				return "equilátero";
			}
			else if (this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3) {
				return "isósceles";
			}
			else {
				return "escaleno";
			}
		}
		else {
			return "no es un triángulo";
		}
	}
}

function calcularArea() {
	var lado1 = document.getElementById("lado1").value;
	var lado2 = document.getElementById("lado2").value;
	var lado3 = document.getElementById("lado3").value;
	var triangulo = new Triangulo(lado1, lado2, lado3);
	
	if (triangulo.calcularTipo() == "no es un triángulo") {
		document.getElementById("resultado").innerHTML = "Los lados introducidos no forman un triángulo.";
	}
	else {
		var area = triangulo.calcularArea();
		document.getElementById("resultado").innerHTML = "El área del triángulo es " + area + ".";
	}
}

function calcularPerimetro() {
	var lado1 = document.getElementById("lado1").value;
	var lado2 = document.getElementById("lado2").value;
	var lado3 = document.getElementById("lado3").value;
	var triangulo = new Triangulo(lado1, lado2, lado3);
	
	if (triangulo.calcularTipo() == "no es un triángulo") {
		document.getElementById("resultado").innerHTML = "Los lados introducidos no forman un triángulo.";
	}
	else {
		var perim = triangulo.calcularPerimetro();
		document.getElementById("resultado").innerHTML = "El perímetro del triángulo es " + perim + ".";
	}
}

function calcularTipo() {
	var lado1 = document.getElementById("lado1").value;
	var lado2 = document.getElementById("lado2").value;
	var lado3 = document.getElementById("lado3").value;
	var triangulo = new Triangulo(lado1, lado2, lado3);
	
	var tipo = triangulo.calcularTipo();
	if (tipo == "no es un triángulo") {
		document.getElementById("resultado").innerHTML = "Los lados introducidos no forman un triángulo.";
	}
	else {
		document.getElementById("resultado").innerHTML = "El triángulo es " + tipo + ".";
	}
}