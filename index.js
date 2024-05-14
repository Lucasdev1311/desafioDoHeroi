let nome = "Pilgs"
let pontosDoHeroi = 5599
let i = pontosDoHeroi

for( i ; i <= 10100; i+=500){
  
  console.log("subiu de nivel ")
 
  console.log("Pontos de experiência " + i)

if(i < 1000){
  console.log("o heroi " +nome+ " esta no nivel ferro")
} else if( i <= 2000){
  console.log("o heroi " +nome+  " esta no nivel bronze")
} else if(i  <= 5000){
  console.log("o heroi " +nome+ " esta no nivel prata")
} else if(i  <= 7000){
  console.log("o heroi " +nome+ " esta no nivel ouro")
} else if(i <= 8000){
  console.log("o heroi " +nome+ " esta no nivel platina")
} else if(i <= 9000){
  console.log("o heroi " +nome+ " esta no nivel ascendente")
} else if(i <= 10000){
  console.log("o heroi " +nome+ " esta no nivel imortal")
} else if(i > 10001){
  console.log("o heroi " +nome+ " Esta no nível Radiante")
}

}