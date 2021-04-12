var listaFilmes = []
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZmYzMzU4NjctNDI0Mi00MGExLWI3ZDQtYzQzYThmYzc2ZmNjXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg")

var nomeFilmes = []
nomeFilmes.push("Justice league","GODIZILA X KONG","Vingadores ultimato")

 var filme = prompt("digite 1 para Justice league, 2 para GODIZILA X KONG, 3 para Vingadores ultimato")
var res = window.document.getElementById('res')
if (filme == 1){
  document.write( "<img src=" + listaFilmes[0] + ">")
  res.innerHTML = (nomeFilmes[0])
  
} else if ( filme == 2){
  document.write("<img src=" + listaFilmes[1] + ">")
  res.innerHTML = (nomeFilmes[1])
  
}else if (filme == 3){
  document.write("<img src=" + listaFilmes[2] + ">")
  res.innerHTML = (nomeFilmes[2])
  
} else {
  res.innerHTML = ("filme nao esta na lista")
}

