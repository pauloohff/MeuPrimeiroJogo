var objCanvas = null;
var objContexto = null;

var apagao;
let cenario = -1
let saiu = 0
let apertou = 0
let acusar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let interacoes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var xDetetive=100;
var yDetetive=250;
var xThiagado=83;
var yThiagado=90;
var xKpoper=82;
var yKpoper=130;
var xMelhorAmigo=85;
var yMelhorAmigo=170;

var imgTelaMenu = new Image()
imgTelaMenu.src = "telaMenu.png"
var imgGameOver = new Image()
imgGameOver.src = "telaGameOver.png"
var imgVitoria = new Image()
imgVitoria.src = "telavitoria.png"
var imgTelaTuts = new Image()
imgTelaTuts.src = "telaTuts.png"

var imgFundoFora = new Image();
imgFundoFora.src = "fundoDeFora.png";

objCanvas = document.getElementById("meuCanvas");
objContexto = objCanvas.getContext("2d")
var teclas = {};
var imgFundo = new Image();
imgFundo.src = "paredeNorte.png";
var imgFundo2 = new Image();
imgFundo2.src = "paredeNordeste.png";
var imgFundo3 = new Image();
imgFundo3.src = "paredeEsquerda.png";
var imgFundo4 = new Image();
imgFundo4.src = "paredeSudoeste.png";
var imgFundo5 = new Image();
imgFundo5.src = "paredeSuleste.png";
var imgFundo6 = new Image();
imgFundo6.src = "paredeNoroeste.png";
var imgFundo7 = new Image();
imgFundo7.src = "paredeDireita.png";
var imgFundo8 = new Image();
imgFundo8.src = "entradaQuarto.png";
var imgFundo9 = new Image()
imgFundo9.src = "paredeOeste.png"
var imgFundo10 = new Image()
imgFundo10.src = "paredeLeste.png"
var imgFundo11 = new Image()
imgFundo11.src = "paredeNorteQuarto.png"
var imgFundo12 = new Image()
imgFundo12.src = "paredeSulQuarto.png"
var imgEntradaCasa = new Image();
imgEntradaCasa.src = "entrada.png";
var imgJanela = new Image()
imgJanela.src = "janela.png"
var imgPilar = new Image()
imgPilar.src = "pilar.png"
var imgTV = new Image()
imgTV.src = "TV.png"
var imgSofa = new Image()
imgSofa.src = "sofa.png"
var imgMesa = new Image()
imgMesa.src = "mesa.png"
var imgCacto = new Image()
imgCacto.src = "cacto.png"
var imgArmario = new Image()
imgArmario.src = "armario.png"
var imgDiario = new Image()
imgDiario.src = "FolhaDiario.png"
var imgFolhaArvore = new Image()
imgFolhaArvore.src = "folhaarvore.png"
var imgPapelDiario1 = new Image()
imgPapelDiario1.src = "papel1.png"
var imgPapelDiario2 = new Image()
imgPapelDiario2.src = "papel2.png"
var imgPapelDiario3 = new Image()
imgPapelDiario3.src = "papel3.png"
var imgPapelDiario4 = new Image()
imgPapelDiario4.src = "papel4.png"
var imgPapelDiario5 = new Image()
imgPapelDiario5.src = "papel5.png"
var imgFolhaPintura = new Image()
imgFolhaPintura.src = "folhaPintura.png"
var imgCama = new Image()
imgCama.src = "camis.png"
var imgTela = new Image()
imgTela.src = "paleta.png"
var imgEstante = new Image()
imgEstante.src = "estante.png"
var imgArmarioQuarto = new Image()
imgArmarioQuarto.src = "arma.png"
var imgSangue = new Image()
imgSangue.src = "sangue.png"
var imgSaidaQuarto = new Image()
imgSaidaQuarto.src = "saidaQuarto.png"
var imgCabelo = new Image()
imgCabelo.src = "cabelo.png"
var imgAnuarinho = new Image()
imgAnuarinho.src = "anuarinho.png"
var imgAnuario = new Image()
imgAnuario.src = "Anuario.png"
var imgAnuarioPag1 = new Image()
imgAnuarioPag1.src = "Pag1Anuario.png"
var imgAnuarioPag2 = new Image()
imgAnuarioPag2.src = "Pag2Anuario.png"
var imgX = new Image()
imgX.src = "x.png"

var imgDetetive = new Image()
imgDetetive.src = "DetePat.png"
var imgKpoper = new Image();
imgKpoper.src = "Kpoper.png";
var imgMelhorAmigo = new Image();
imgMelhorAmigo.src = "MelhorAmigo.png";
var imgThiagado = new Image();
imgThiagado.src = "Thiagado.png";
var imgChico = new  Image()
imgChico.src = "ProfChico.png"

let gameOver = 1;
let colisao = 0;

var FalaKpop1 = new Image()
FalaKpop1.src = "FalaKpop1.png" 
var FalaKpop2 = new Image()
FalaKpop2.src = "FalaKpop2.png"
var FalaMelhorAmigo1 = new Image()
FalaMelhorAmigo1.src = "FalaMelhorAmigo1.png" 
var FalaMelhorAmigo2 = new Image()
FalaMelhorAmigo2.src = "FalaMelhorAmigo2.png" 
var FalaMelhorAmigo3 = new Image()
FalaMelhorAmigo3.src = "FalaMelhorAmigo3.png"
var FalaThiagado1 = new Image()
FalaThiagado1.src = "FalaThiagado1.png"
var FalaThiagado2 = new Image()
FalaThiagado2.src = "FalaThiagado2.png"
var FalaThiagado3 = new Image()
FalaThiagado3.src = "FalaThiagado3.png"
var imgFalaDeteCablo = new Image()
imgFalaDeteCablo.src = "FalaDeteCabelo.png"
var imgtabelaAcusacao = new Image()
imgtabelaAcusacao.src = "tabelaAcusacao.png"
var imgFalaChico = new Image()
imgFalaChico.src ="falachico.png"

document.addEventListener("keydown", function(apertado)
{
    teclas[apertado.keyCode] = true;
})
document.addEventListener("keyup", function(apertado){
    delete teclas[apertado.keyCode]
})

function Andar()
{ 
  
    let andou = 0
    
    if(cenario == -1)
    {
        objContexto.drawImage(imgTelaMenu,0, 0)
        if(13 in teclas)
        cenario = 0
    }
    if(cenario == 0)
    {
        objContexto.drawImage(imgTelaTuts, 0, 0)
        if(80 in teclas)
        {
            cenario = 2
           gameOver = 0
           AtualizarTela()
        }     
    }
    
  if(cenario == 1 && gameOver == 0)
  {
    if(87 in teclas && yDetetive > 77 && Colisao(xDetetive, yDetetive -10) == false)
    {
        if(acusar [12] == 777)
        {
            if(yThiagado < yDetetive)
            {
                if(yThiagado < 87)
                xThiagado = xThiagado + ColisaoAssassino(1)
                else
                yThiagado = yThiagado - 9
            }
        }
        yDetetive = yDetetive - 10
        AtualizarTela()
    }
      
     if(83 in teclas && yDetetive < 443&& Colisao(xDetetive, yDetetive + 10) == false)
     {
        if(acusar [12] == 777)
        { 
            if(yThiagado > yDetetive)
            {
                if(yThiagado > 433)
                xThiagado = xThiagado + ColisaoAssassino(1)
                else
                yThiagado = yThiagado + 9
            }
        }
            
        
        yDetetive = yDetetive + 10
        AtualizarTela()
     }
     
     if(65 in teclas && xDetetive > 179 && Colisao(xDetetive - 10, yDetetive) == false)  
     {
        if(acusar [12] == 777)
        { 
            if(xThiagado < xDetetive)
            {
                if(xThiagado < 189)
                yThiagado = yThiagado + ColisaoAssassino(2)
                else
                xThiagado = xThiagado - 9
            }
        }
        
              
        xDetetive = xDetetive - 10 
        AtualizarTela()
     }
     if(68 in teclas && xDetetive < 583 && Colisao(xDetetive + 10, yDetetive) == false)
     {
        if(acusar [12] == 777)
        {
            
         
            if(xThiagado > xDetetive)
            {
                if(xThiagado > 593)
                yThiagado = yThiagado + ColisaoAssassino(2)
                else
                xThiagado = xThiagado + 9
            }
        
        }
        xDetetive = xDetetive + 10
        AtualizarTela()
     }
}
  
  if(cenario == 2 && gameOver == 0)
  {
    if(87 in teclas && yDetetive > 80 && Colisao(xDetetive, yDetetive -10) == false)
    {
        yDetetive = yDetetive - 10
        AtualizarTela()
    }
     
     if(83 in teclas && yDetetive < 440 && Colisao(xDetetive, yDetetive + 10) == false)
     {
        yDetetive = yDetetive + 10
        AtualizarTela()
     }
     
     if(65 in teclas && xDetetive > 80 && Colisao(xDetetive - 10, yDetetive) == false)  
     {
        xDetetive = xDetetive - 10 
        AtualizarTela()
     }
     if(68 in teclas && xDetetive < 680 && Colisao(xDetetive + 10, yDetetive) == false)
     {
        xDetetive = xDetetive + 10
        AtualizarTela()
     }
}  
if(cenario == 3 && gameOver == 0)
{
    if(87 in teclas && yDetetive > 124 && Colisao(xDetetive, yDetetive -10) == false)
    {
        yDetetive = yDetetive - 10
        AtualizarTela()
    }
     
     if(83 in teclas && yDetetive < 400 && Colisao(xDetetive, yDetetive + 10) == false)
     {
        yDetetive = yDetetive + 10
        AtualizarTela()
     }
     
     if(65 in teclas && xDetetive > 128 && Colisao(xDetetive - 10, yDetetive) == false)  
     {
        xDetetive = xDetetive - 10 
        AtualizarTela()
     }
     if(68 in teclas && xDetetive < 400 && Colisao(xDetetive + 10, yDetetive) == false)
     {
        xDetetive = xDetetive + 10
        AtualizarTela()
     }
}
}
function ColisaoAssassino(direcao)
{
    let aondeir
    if(direcao == 1)
    {
        if( xThiagado >= xDetetive &&xThiagado <= 574)
        aondeir = + 9
        if(xThiagado >= xDetetive  && xThiagado > 574)
        aondeir = 0
        if(xThiagado <= xDetetive + 5 && xThiagado >= 190)
        aondeir = - 9
        if(xThiagado <= xDetetive   && xThiagado < 190)
        aondeir = 0
        
    }
    if(direcao == 2)
    {
        if(yThiagado >= yDetetive && yThiagado <= 433)
        aondeir = + 9
        if(yThiagado >= yDetetive && yThiagado > 433 )
            aondeir = 0
        
        if(yThiagado < yDetetive  && yThiagado >= 88)
        aondeir = - 9
        if(yThiagado < yDetetive && yThiagado < 88)
            aondeir = 0
        
    }
    return aondeir
}
function Colisao(ColisaoX, ColisaoY)
{
    if(cenario == 1)
    {
        if(acusar[12] !=  777)
        {
            if(ColisaoX >= 553 && ColisaoY <=354 && ColisaoY > 283 && ColisaoX <= 620)
        colisao++
        }
    }
    if(cenario == 2)
    {
    if(ColisaoX <= xMelhorAmigo +32  && ColisaoX >= xMelhorAmigo - 10 && ColisaoY <= yMelhorAmigo +32 && ColisaoY >= yMelhorAmigo)// colisao com o melhor amigo
    colisao++
    if(ColisaoX <= xKpoper + 32 && ColisaoX >= xKpoper && ColisaoY <= yKpoper +32 && ColisaoY >= yKpoper)// colisao com a kpoper
    colisao++
    if(ColisaoX <= xThiagado + 32 && ColisaoX >= xThiagado && ColisaoY <= yThiagado +32 && ColisaoY >= yThiagado - 10)// colisao com o thiagado
    colisao++
    if(ColisaoX <= 190 && ColisaoX >= 129 && ColisaoY >= 90 && ColisaoY <= 136)// pilar canto superior esquerdo
    colisao++
    if(ColisaoX <= 610 && ColisaoX >= 547 && ColisaoY >= 390 && ColisaoY <= 436)// pilar canto inferior direito
    colisao++
    if(ColisaoX <= 610 && ColisaoX >= 547 && ColisaoY >= 90 && ColisaoY <= 136)// pilar canto inferior direito
    colisao++
    if(ColisaoX <= 190 && ColisaoX >= 129 && ColisaoY >= 390 && ColisaoY <= 436)// pilar canto inferior direito
    colisao++
    if(ColisaoX <= 230 && ColisaoX >= 180 && ColisaoY >= 90 && ColisaoY <= 140)// Tv
    colisao++
    if(ColisaoX <= 320 && ColisaoX >= 250 && ColisaoY >=80 && ColisaoY <= 200)// Sofa
    colisao++
    if(ColisaoX <= 465 && ColisaoX >= 413 && ColisaoY >= 90 && ColisaoY <= 145)// cacto
    colisao++
    if(ColisaoX <= 535 && ColisaoX >= 440 && ColisaoY >= 80&& ColisaoY <= 145)// armario
    colisao++
    if(ColisaoX <= 537 && ColisaoX >= 443 && ColisaoY >= 380&& ColisaoY <= 435)// mesa
    colisao++
    if(ColisaoX <= 218 && ColisaoX >= 170 && ColisaoY >= 162 && ColisaoY <= 217)// diario1
    colisao++
    if(ColisaoX <= 418 && ColisaoX >= 370 && ColisaoY >= 262 && ColisaoY <= 317)// diario2
    colisao++
    if(ColisaoX <= 518 && ColisaoX >= 470 && ColisaoY >= 162 && ColisaoY <= 217)// diario3
    colisao++
    if(ColisaoX <= 288 && ColisaoX >= 240 && ColisaoY >= 352 && ColisaoY <= 407)// diario4
    colisao++
    if(ColisaoX <= 188 && ColisaoX >= 133 && ColisaoY >= 342 && ColisaoY <= 397)// diario5
    colisao++
    if(ColisaoX <= 388 && ColisaoX >= 333 && ColisaoY <= 98)// folha arvore
    colisao++
    }
    if(cenario == 3)
    {
        if(ColisaoX >= 271 && ColisaoY >= 114 && ColisaoY <= 174)
        colisao++
        if(ColisaoX >= 267 && ColisaoX < 338 && ColisaoY >= 368 && ColisaoY <= 425)
        colisao++
        if(ColisaoX >= 190 && ColisaoX < 258 && ColisaoY >= 348 && ColisaoY <= 425)
        colisao++
        if(ColisaoX >= 140 && ColisaoX < 188 && ColisaoY >= 173 && ColisaoY <= 210)
        colisao++
        if(ColisaoX >= 323 && ColisaoX < 369 && ColisaoY >= 216 && ColisaoY <= 274)
        colisao++
    }
    if(colisao !=0)
    {
        colisao = 0
        return true
    }
    else
    {
        interacoes[0] = 0
        return false
    }
   
}

function ColisaoEInteracao()
{
    saiu = 0
    
    if(cenario == 1)
    {
        if (xDetetive > 585 && yDetetive > 230 && yDetetive < 290)
        {
            TirarInteracao(interacoes, 10)
        if(interacoes[10] != 1)
        {
            saiu ++
            interacoes[10] = 1
            apertou = 0
        }
        }
        if(acusar[12] != 777)
        {
            if (xDetetive > 543 && yDetetive >  270&& yDetetive < 367)
        
            TirarInteracao(interacoes, 11)
        if(interacoes[11] != 1)
        {
            saiu ++
            interacoes[11] = 1
            apertou = 0
        }
        }
        if(acusar[12] == 777)
        {
            if(xDetetive >= xThiagado - 10 && xDetetive + 32 <= xThiagado + 32 && yDetetive <= yThiagado + 20&& yDetetive + 26 > yThiagado )
            {
                AtualizarTela()
                objContexto.drawImage(imgVitoria, 150, 0)
                gameOver = 1
                if(66 in teclas)
                {
                cenario = -1
                for(indice = 0; indice  < 13; indice++)
                {
                    acusar[indice] = 0
                }
                xDetetive = 100
                yDetetive = 250
                gameOver = 1
                xThiagado=83;
                 yThiagado=90;
            }
            }
        }
          
        if(saiu == 0)
        {
            TirarInteracao(interacoes, -1)
        }
    }
        
    

    if(cenario == 2)
    {
        if(xDetetive <= xMelhorAmigo + 42 && xDetetive >= xMelhorAmigo - 10 && yDetetive <= yMelhorAmigo +42 && yDetetive >= yMelhorAmigo && acusar [12] != 777)// colisao com o melhor amigo
    {    
        saiu ++    
        TirarInteracao(interacoes, 2)
        if(interacoes[2] != 1)
        {
            saiu ++
            interacoes[2] = 1
            apertou = 0
        }
    } 
    if(xDetetive <= xKpoper + 42 && xDetetive>= xKpoper - 10 && yDetetive <= yKpoper +32 && yDetetive >= yKpoper - 20&& acusar [12] != 777 )// colisao com a kpoper
    {       saiu++
        TirarInteracao(interacoes, 1)
        if(interacoes[1] != 1)
        {
            saiu ++
            interacoes[1] = 1
            apertou = 0
        }
    }   
    if(xDetetive <= xThiagado + 42 && xDetetive >= xThiagado && yDetetive <= yThiagado +22 && yDetetive >= yThiagado - 10 && acusar [12] != 777)// colisao com o thiagado
    {       
        saiu ++
        TirarInteracao(interacoes, 0)
        if(interacoes[0] != 1)
        {
            saiu ++
            interacoes[0] = 1
            apertou = 0
        }     
    }

    if(xDetetive <= 228 && xDetetive >= 153 && yDetetive <= 228 && yDetetive >= 152)// colisao com o diario 1
    {  
        saiu ++     
        TirarInteracao(interacoes, 3)
        if(interacoes[3] != 1)
        {
            saiu ++
            interacoes[3] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 528 && xDetetive >= 453 && yDetetive <= 228 && yDetetive >= 152)// colisao com o diario 2
    {  
        saiu ++     
        TirarInteracao(interacoes, 4)
        if(interacoes[4] != 1)
        {
            saiu ++
            interacoes[4] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 298 && xDetetive >= 223 && yDetetive <= 418 && yDetetive >= 343)// colisao com o diario 3
    {     
        saiu ++  
        TirarInteracao(interacoes, 5)
        if(interacoes[5] != 1)
        {
            saiu ++
            interacoes[5] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 428 && xDetetive >=353 && yDetetive <= 328 && yDetetive >=253)// colisao com o diario 4
    {       
        saiu ++
        TirarInteracao(interacoes, 6)
        if(interacoes[6] != 1)
        {
            saiu ++
            interacoes[6] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 198 && xDetetive >=123 && yDetetive <= 408 && yDetetive >=333)// colisao com o diario 5
    {       
        saiu ++
        TirarInteracao(interacoes, 7)
        if(interacoes[7] != 1)
        {
            saiu ++
            interacoes[7] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 398 && xDetetive >=323 && yDetetive <=  108&& yDetetive >=80)// colisao com a pintura
    {   
        saiu ++    
        TirarInteracao(interacoes, 8)
        if(interacoes[8] != 1)
        {
            saiu ++
            interacoes[8] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 82  && yDetetive <= 270&& yDetetive >=250)// colisao com a entrada
    {       
        saiu ++
        TirarInteracao(interacoes, 9)
        if(interacoes[9] != 1)
        {
            saiu ++
            interacoes[9] = 1
            apertou = 0
        }     
    }
    if(xDetetive >= 673  && yDetetive <= 270&& yDetetive >=250)// colisao com a pintura
    {           
            saiu ++
        TirarInteracao(interacoes, 12)
        if(interacoes[12] != 1)
        {
            saiu ++
            interacoes[12] = 1
            apertou = 0
        }    
    }
    if(acusar[11] == 777)
    if(xDetetive >= 117 && xDetetive <= 145 &&yDetetive >= 108 && yDetetive < 137)
    {
        saiu++
        TirarInteracao(interacoes, 16)
        if(interacoes[16] != 1)
        {
            saiu ++
            interacoes[16] = 1
            apertou = 0
        }
    }
    
    if(saiu == 0)
    {
        TirarInteracao(interacoes, -1)
    }
    
}
if(cenario == 3)
{
    if(xDetetive <= 134  && yDetetive <= 280&& yDetetive >=250)
    {       
        saiu ++
        TirarInteracao(interacoes, 13)
        if(interacoes[13] != 1)
        {
            saiu ++
            interacoes[13] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 198 && xDetetive >= 138 && yDetetive <= 220&& yDetetive >=163)
    {       
        saiu ++
        TirarInteracao(interacoes, 14)
        if(interacoes[14] != 1)
        {
            saiu ++
            interacoes[14] = 1
            apertou = 0
        }     
    }
    if(xDetetive <= 379 && xDetetive >= 313 && yDetetive <= 284&& yDetetive >=206)// 
    {       
        saiu ++
        TirarInteracao(interacoes, 15)
        if(interacoes[15] != 1)
        {
            saiu ++
            interacoes[15] = 1
            apertou = 0
        }     
    }
    if(saiu == 0)
    {
        TirarInteracao(interacoes, -1)
    }
}

}

function TirarInteracao(vetor, indiceColisao)
{
    for(let indice = 0; indice <= 16; indice++)
    {
        if(vetor[indice] != 0 && indice == indiceColisao)
        vetor[indice] = 1
        else
        vetor[indice] = 0
    }
}
function VereficarInteracao()
{
    for(let indice = 0; indice <= 16; indice++)
    {
        if(interacoes[indice] != 0)
        Interagir(indice)
    }
    
}
function Interagir(qual)
{

    if(qual == 0)
    {
        if(69 in teclas && apertou == 0)
        { 
            apertou = 1
            AtualizarTela()
            objContexto.drawImage(FalaThiagado1,95 ,17)
           acusar[0] = 4
        }
        if(apertou == 1)
        {
            if(82 in teclas)
            {
                apertou = 2
                AtualizarTela()
                objContexto.drawImage(FalaThiagado2,110,110)
            }
        }
        if(apertou == 2)
        {
            if(84 in teclas)
            {
                apertou = 0
                AtualizarTela()
                objContexto.drawImage(FalaThiagado3,95,17)
                TirarInteracao(interacoes, 1000)
            }
        }  
        
    }
    if(qual == 1)
    {
        if(69 in teclas && apertou == 0)
        {
            apertou = 1
            objContexto.drawImage(FalaKpop1,95 ,54)
            acusar[1] = 4
        }
        if(apertou == 1)
        {
            
            if(82 in teclas)
            {
                apertou = 0
                objContexto.drawImage(FalaKpop2,95,18)
            }
        }
        
        
    }
    
    if(qual == 2)
    {
        
        if(69 in teclas && apertou == 0)
        { 
            apertou = 1
            objContexto.drawImage(FalaMelhorAmigo1,95,85)
            acusar[2] = 4
        }
        
            if(apertou == 1)
            {
                if(82 in teclas)
                {
                    apertou = 2
                    objContexto.drawImage(FalaMelhorAmigo2,95,64) 
                }                
            }       
            if(apertou == 2)
        {
            if(84 in teclas)
            {
                apertou = 0
                objContexto.drawImage(FalaMelhorAmigo3,95,64)
            }
        }
    }
    
   if(qual == 3)
   {
    if(69 in teclas)
    { 
        apertou = 0
        objContexto.drawImage(imgPapelDiario1,202, 0)
        acusar[3] = 1
    }
   }
   if(qual == 4)
   {
    if(69 in teclas)
    { 
        acusar[4] = 1
        apertou = 0
        objContexto.drawImage(imgPapelDiario2,202, 0)
    }
   }
   if(qual == 5)
   {
    if(69 in teclas)
    { 
        acusar[5] = 1
        apertou = 0
        objContexto.drawImage(imgPapelDiario3,202, 0)
    }
   }
   
   if(qual == 6)
   {
    if(69 in teclas)
    { 
        acusar[6] = 1
        apertou = 0
        objContexto.drawImage(imgPapelDiario4,202, 0)
    }
   }
   if(qual == 7)
   {
    if(69 in teclas)
    { 
        acusar[7] = 1
        apertou = 0
        objContexto.drawImage(imgPapelDiario5,202, 0)
    }
   }
   if(qual == 8)
   {
    if(69 in teclas)
    { 
        acusar[8] = 1
        apertou = 0
        objContexto.drawImage(imgFolhaPintura,202, 0)
    }
   }
   
   if(qual == 9)
   {
    if(69 in teclas)
    {
        cenario = 1
        xDetetive = 500
        yDetetive = 300
        AtualizarTela()
    }
   }
   if(qual == 10)
   {
    if(69 in teclas)
    {
        cenario = 2
        xDetetive = 100
        yDetetive = 250
        AtualizarTela()
    }
   }
   if(qual == 11)
   {
    if(69 in teclas && apertou == 0)
    {
        AtualizarTela()
        apertou = 1
        objContexto.drawImage(imgFalaChico,615,200)
    }
   }
   
   if(qual == 12)
   {
    if(69 in teclas && apertou == 0 )//&& errou == 0)
    {
        cenario = 3
        xDetetive = 128
        yDetetive = 244
        AtualizarTela()
    }    
   } 
   if(qual == 13)
   {
    if(69 in teclas && apertou == 0 )//&& errou == 0)
    {
        cenario = 2
        xDetetive = 600
        yDetetive = 244
        AtualizarTela()
    }    
   } 
   if(qual == 14)
   {
    if(69 in teclas && apertou == 0 )//&& errou == 0)
    {
        acusar[9] = 1
        objContexto.drawImage(imgFalaDeteCablo, xDetetive + 27, yDetetive - 47)
    }    
   } 
   if(qual == 15)
   {
    if(69 in teclas && apertou == 0 )//&& errou == 0)
    {
        acusar[10] = 1
        apertou = 1
        objContexto.drawImage(imgAnuario, 225, 0)
    }    
    if(apertou == 1)
        {
            if(82 in teclas)
            {
                apertou = 0
                AtualizarTela()
                objContexto.drawImage(imgAnuarioPag1,50,00)
                objContexto.drawImage(imgAnuarioPag2,400,00)
            }
        }
   } 
   if(qual == 16)
   {
    if(67 in teclas && apertou == 0 && acusar[11] == 777 && acusar[12] != 777 && acusar[12] != 888)
    {
        AtualizarTela()
        objContexto.drawImage(imgtabelaAcusacao,170, 100)
        apertou = 1
    }
    if(50 in teclas || 51 in teclas )
    {
        AtualizarTela()
        objContexto.drawImage(imgGameOver, 150, 0)
            apertou = 2
            acusar[12] = 888
        gameOver = 1
        
        
    }
            if(66 in teclas && acusar[12] == 888)
            {
                cenario = -1
                for(indice = 0; indice  < 13; indice++)
                {
                    acusar[indice] = 0
                }
                xDetetive = 100
                yDetetive = 250
            }
   }
   
   
    if(49 in teclas && apertou == 0 && acusar[12] != 888)
    {
        yThiagado = 250
        xThiagado = 360
        acusar[12] = 777
        gameOver = 1
       Apagao()
       setTimeout(VoltarAoNormal, 2600)   
    }   
}
function VoltarAoNormal()
{
    AtualizarTela()
    gameOver = 0
}
function Apagao()
{ 
    objContexto.beginPath();
    objContexto.rect(0,0, 800, 560)
    objContexto.fillStyle = 'black';   
    objContexto.fill()
    objContexto.lineWidth = 5; // define a largura da linha do contorno
    objContexto.strokeStyle = 'black'; // define a cor do contorno
objContexto.stroke()

}
function AtualizarTela(){
    
    objContexto.clearRect(0,0, objCanvas.width, objCanvas.height)
    
    if(cenario == 1)
    {
        objContexto.drawImage(imgFundoFora, 144,40)
        objContexto.drawImage(imgDetetive,xDetetive ,yDetetive);
        if(acusar[12] != 777)
        objContexto.drawImage(imgChico, 590 ,320)
        else
        objContexto.drawImage(imgThiagado, xThiagado, yThiagado);
        
    }
    
    if(cenario == 2)
    {
      objContexto.clearRect(0,0, objCanvas.width, objCanvas.height)
    objContexto.beginPath();
    objContexto.rect(84,84, 635, 394)
    objContexto.fillStyle = '#808080';   
    objContexto.fill()
    objContexto.lineWidth = 5; // define a largura da linha do contorno
    objContexto.strokeStyle = 'black'; // define a cor do contorno
objContexto.stroke()
 
 
    objContexto.drawImage(imgFundo,80,0);
    objContexto.drawImage(imgFundo,80,480);
    objContexto.drawImage(imgFundo3,0,80);
    objContexto.drawImage(imgFundo3, 0, 320)
    objContexto.drawImage(imgFundo7,720,80);
    objContexto.drawImage(imgFundo7, 720, 320)
    objContexto.drawImage(imgFundo2,0,0);
    objContexto.drawImage(imgFundo4,0,480);
    objContexto.drawImage(imgFundo5,720,480);
    objContexto.drawImage(imgFundo6,720,0);
    objContexto.drawImage(imgFundo8,720,240);
    
    if(acusar[11] == 777)
    objContexto.drawImage(imgX, 125, 135)

    objContexto.drawImage(imgEntradaCasa,0,240);
    objContexto.drawImage(imgDetetive,xDetetive ,yDetetive);
    if(acusar[12] != 777)
    objContexto.drawImage(imgThiagado, xThiagado, yThiagado);   
    objContexto.drawImage(imgKpoper, xKpoper, yKpoper);
    objContexto.drawImage(imgMelhorAmigo, xMelhorAmigo, yMelhorAmigo);
    objContexto.drawImage(imgSofa,280, 60)
    objContexto.drawImage(imgMesa,480, 380)
    objContexto.drawImage(imgCacto,450, 120)
    objContexto.drawImage(imgArmario,470, 20)
    objContexto.drawImage(imgDiario, 200, 199)
    objContexto.drawImage(imgDiario, 400, 299)
    objContexto.drawImage(imgDiario, 500, 199)
    objContexto.drawImage(imgDiario, 270, 390)
    objContexto.drawImage(imgDiario, 170, 379)
    objContexto.drawImage(imgPilar,160, 20)
    objContexto.drawImage(imgPilar,160, 320)
    objContexto.drawImage(imgPilar,580, 20)
    objContexto.drawImage(imgPilar,580, 320)
    objContexto.drawImage(imgFolhaArvore,370, 80)
    objContexto.drawImage(imgTV,190, 90)  
    objContexto.drawImage(imgJanela, 650, 10)
    } 
    if(cenario == 3)
    {
        objContexto.clearRect(0,0, 480, 480)
    objContexto.beginPath();
    objContexto.rect(124,124, 320, 320)
    objContexto.fillStyle = '#808080';   
    objContexto.fill()
    objContexto.lineWidth = 5; // define a largura da linha do contorno
    objContexto.strokeStyle = 'black'; // define a cor do contorno
objContexto.stroke(  )

objContexto.drawImage(imgAnuarinho,355, 250)
objContexto.drawImage(imgCabelo, 174, 200)
objContexto.drawImage(imgFundo11,44, 43)
objContexto.drawImage(imgFundo12,44, 443)
objContexto.drawImage(imgFundo9, 43, 123)
objContexto.drawImage(imgFundo10, 442, 123)
objContexto.drawImage(imgFundo2, 43, 43)
objContexto.drawImage(imgFundo6, 442, 43)
objContexto.drawImage(imgFundo5, 444, 443)
objContexto.drawImage(imgFundo4, 43, 445)
objContexto.drawImage(imgSaidaQuarto,43, 244)
objContexto.drawImage(imgJanela, 220 , 54)
objContexto.drawImage(imgArmarioQuarto,375, 84)
objContexto.drawImage(imgCama, 308 , 114)
        
        objContexto.drawImage(imgEstante, 225, 380)
        objContexto.drawImage(imgSangue, 230,121 )
        objContexto.drawImage(imgDetetive,xDetetive ,yDetetive);
        objContexto.drawImage(imgTela, 300 , 345)
    }
}
function VereficarAcusacao()
{
    let soma = 0
    for(indice = 0; indice <= 10; indice++)
    {
       soma = soma + acusar[indice]
    }
    if(soma >= 18)
    acusar[11] = 777
    
    
}

setInterval(Andar, 20)
setInterval(VereficarInteracao, 20)
setInterval(ColisaoEInteracao, 20)
setInterval(VereficarAcusacao, 20) 