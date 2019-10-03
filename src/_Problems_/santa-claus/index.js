/*Santa is playing with his elves to entertain them during the eve of 1st.
Christmas. The trick is for the elves to write numbers on pieces of paper and
put on Santa's hat. After everyone finishes putting the numbers
Noel draws a paper and that number represents how many "ho" Noel should say.
Your job is to help Santa by setting up a problem that shows all the "Ho"
he should talk given the number drawn. The input consists of a single integer
N representing how many "Ho" will be spoken by Noel. The output consists of all
"Ho" Santa Claus must speak separated by a space. After the last "Ho" should
a "!" ending program1
.


Input Example:
• 5
Exit Example:
• Ho Ho Ho Ho Ho!*/

text = "";
	
		for(valor_1 = 1, valor_2 = 60;valor_2 >= 0;valor_2 -=5,valor_1 += 3){
			text = text + "I = "+valor_1+" J = "+valor_2+"\n";
		}
		
		escreva(text);

