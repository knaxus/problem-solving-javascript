/*Write an algorithm that reads 2 integers X and Y computes two numbers that 4.
There are no multiples of 13 between X and Y, including both. In the input, count 2 values
reserved integers, not necessarily in ascending order

Input:
200
100
Output:
13954*/

X = lerInteiro("Entre com um valor inteiro: ");
		Y = lerInteiro("Entre com um valor inteiro: ");
		sum = 0;
		
		if(X > Y){
			aux = Y;
			Y = X;
			X = aux;
		}

		for(i = X; i <= Y;i++){
				if(i % 13 != 0){
					sum += i;
				}
		}
		
		escreva(sum);