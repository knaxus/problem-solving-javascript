/*A school wants to do an analysis of the age of its students. Recital 6
data were collected from 200 students. Make a program to request age
of each student and their enrollment.
a) Find and show the average student age.
b) Find and show the youngest student's enrollment.
c) Calculate and show the percentage of students who are above average age
from school students */

texto = ""; 
		maisNovo = 150
		idade = []
		matricula = []
		soma = 0
		var matriculaMaisNovo   
		cont = 0

		for(i=0; i<200; i++){
			idade[i] = lerReal("entre com a idade do estudante " +i)
			matricula[i] = lerReal("entre com a matricula do aluno " +i)
			soma = soma + idade[i]
			if(maisNovo > idade[i]){
				maisNovo = idade[i]
				matriculaMaisNovo = matricula[i]
			}
			
		}

		media = soma/200

		for(i=0; i<200; i++){
			if(idade[i] > media){
				cont =cont + 1
			}
		}
		porcentagem = cont/200
		
		texto += "Media: "+media +". \n"; 
		texto += "Matricula: "+matriculaMaisNovo +". \n" ;
		texto += "Percentual: "+(porcentagem*100) +"%. \n" ;
		escreva(texto) 