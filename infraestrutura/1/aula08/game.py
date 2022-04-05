import random
import sys

def get_int():
    userdata = input("Digite um número, ou 's' para sair do programa ")
    if userdata == 's':
        print ("Nos vemos!")
        sys.exit()
    try:
        user_num = int(userdata)
        return user_num
    except ValueError:
        print("Precisa de um número para continuar: ")
        return(get_int())

userScore = 0
pcScore = 0
totalScore = 0
userWin = 0
pcWin = 0

def percent():
        if totalScore > 0: 
            x = ((totalScore - pcScore) / totalScore) * 100
            return x
        elif totalScore == 0:
            x = 0
            return x


while True: 
    aleatorio = random.randrange(0, 5)
    escolhaPc = ""
    print("1)Tesoura")
    print("2)Papel")
    print("3)Pedra")
    print("4)Lagarto")
    print("5)Spock")
    print("6) Mostrar pontuação")
    print("7)Sair do Programa")
    opcao = int(input("O que você escolhe: "))
    
    if opcao == 1:
        escolhaUsuario = "tesoura"
    elif opcao == 2:
        escolhaUsuario = "papel"
    elif opcao == 3:
        escolhaUsuario = "pedra"
    elif opcao == 4:
        escolhaUsuario = "lagarto"
    elif opcao == 5:
        escolhaUsuario = "spock"
    elif opcao == 6:
        print ("Pontuações: ")
        print ("Usuário: ", userScore)
        print ("Pc: ", pcScore)
        print ("Porcentagem de vitórias: ", percent(), "% " )
        continue

    elif opcao == 7:
        print ("Nos vemos!")
        break
    else:
        print ("Valor Invalido")
        continue
        
    print("Tua escolha: ", escolhaUsuario)   
    if aleatorio == 0:
        escolhaPc = "tesoura"
    elif aleatorio == 1:
        escolhaPc = "papel"
    elif aleatorio == 2:
        escolhaPc = "pedra"
    elif aleatorio == 3:
        escolhaPc = "lagarto"
    elif aleatorio == 4:
        escolhaPc = "spock"
    print("PC escolheu: ", escolhaPc)
    print("...")
    
    if escolhaPc == "pedra" and escolhaUsuario == "papel":
        print("Ganhou, papel cobre pedra")
        userWin += 1
    elif escolhaPc == "spock" and escolhaUsuario == "papel":
        print("Ganhou, papel refuta spock")
        userWin += 1
    elif escolhaPc == "papel" and escolhaUsuario == "tesoura":
        print("Ganhou, tesoura corta papel")
        userWin += 1
    elif escolhaPc == "lagarto" and escolhaUsuario == "tesoura":
        print("Ganhou, tesoura decapita lagarto")
        userWin += 1
    elif escolhaPc == "tesoura" and escolhaUsuario == "pedra":
        print("Ganhou, pedra amassa tesoura")
        userWin += 1
    elif escolhaPc == "lagarto" and escolhaUsuario == "pedra":
        print("Ganhou, pedra esmaga lagarto")
        userWin += 1
    elif escolhaPc == "tesoura" and escolhaUsuario == "spock":
        print("Ganhou, spock quebra tesoura")
        userWin += 1
    elif escolhaPc == "pedra" and escolhaUsuario == "spock":
        print("Ganhou, spock vaporiza pedra")
        userWin += 1
    elif escolhaPc == "papel" and escolhaUsuario == "lagarto":
        print("Ganhou, lagarto come papel")
        userWin += 1
    elif escolhaPc == "spock" and escolhaUsuario == "lagarto":
        print("Ganhou, lagarto envenena spock")
        userWin += 1



        
    if escolhaUsuario == "pedra" and escolhaPc == "papel":
        print("Perdeu, papel cobre pedra")
        pcWin += 1
    elif escolhaUsuario == "spock" and escolhaPc == "papel":
        print("Perdeu, papel refuta spock")
        pcWin += 1
    elif escolhaUsuario == "papel" and escolhaPc == "tesoura":
        print("Perdeu, tesoura corta papel")
        pcWin += 1
    elif escolhaUsuario == "lagarto" and escolhaPc == "tesoura":
        print("Perdeu, tesoura decapita lagarto")
        pcWin += 1
    elif escolhaUsuario == "tesoura" and escolhaPc == "pedra":
        print("Perdeu, pedra amassa tesoura")
        pcWin += 1
    elif escolhaUsuario == "lagarto" and escolhaPc == "pedra":
        print("Perdeu, pedra esmaga lagarto")
        pcWin += 1
    elif escolhaUsuario == "tesoura" and escolhaPc == "spock":
        print("Perdeu, spock quebra tesoura")
        pcWin += 1
    elif escolhaUsuario == "pedra" and escolhaPc == "spock":
        print("Perdeu, spock vaporiza pedra")
        pcWin += 1
    elif escolhaUsuario == "papel" and escolhaPc == "lagarto":
        print("Perdeu, lagarto come papel")
        pcWin += 1
    elif escolhaUsuario == "spock" and escolhaPc == "lagarto":
        print("Perdeu, lagarto envenena spock")
        pcWin += 1
    elif escolhaPc == escolhaUsuario:
        print("Empate")
    
    while again == "":
        again = input("Vamos jogar de novo? s/n: ")
        if 's' in again:
            break
        elif 'n' in again:
            print("Nos vemos!")
            print(userScore = userScore + userWin)
            print(pcScore = pcScore + pcWin)
            print(totalScore = userScore + pcScore)

            sys.exit()
        else:
            print("Valor Invalido")
            again = ""
            continue 