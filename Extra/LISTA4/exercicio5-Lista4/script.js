/* Charlinho tem 11 anos, mede 1,40 metros de altura e cresce em média 2,1
centímetros ao ano. Seu irmão, Bossa, aos 14 anos, tem 1,45 metros de altura 
e cresce em média 1,1 centímetro por ano. Elabore um programa que conte 
quantos anos serão necessários para que a altura de Charlinho ultrapasse a de Bossa. */

let anos = 0;
let char = 140;
let boss = 145;

while (char <= boss) {
    anos++;
    char = char + 2.1;
    boss = boss + 1.1;
}

document.write("Serão necessários: " + anos + " anos.")