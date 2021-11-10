/* - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
 */
 
function microwave(dish, time) {

    let pipocaTime = 10;
    let macarraoTime = 8;
    let carneTime = 15;
    let feijaoTime = 12;
    let brigadeiroTime = 8;
    let pipocaOption = "Pipoca";
    let macarraoOption = "Macarrão";
    let carneOption = "Carne";
    let feijaoOption = "Feijão";
    let brigadeiroOption = "Brigadeiro";

    if (
        (dish == pipocaOption && (time == pipocaTime || (time > pipocaTime && time < pipocaTime * 2))) || 
        (dish == macarraoOption && (time == macarraoTime || (time > macarraoTime && time < macarraoTime * 2))) || 
        (dish == carneOption && (time == carneTime || (time > carneTime && time < carneTime * 2))) || 
        (dish == feijaoOption && (time == feijaoTime || (time > feijaoTime && time < feijaoTime * 2))) || 
        (dish == brigadeiroOption && (time == brigadeiroTime || (time > brigadeiroTime && time < brigadeiroTime * 2)))) {
        console.log("Prato pronto, bom apetite!!!")

    } else if (
        
        (dish == pipocaOption && (time >= pipocaTime * 2 && time < pipocaTime * 3)) || 
        (dish == macarraoOption && (time >= macarraoTime * 2 && time < pipocaTime * 3)) || 
        (dish == carneOption && (time >= carneTime * 2 && time < pipocaTime * 3)) || 
        (dish == feijaoOption && (time >= feijaoTime * 2 && time < pipocaTime * 3)) || 
        (dish == brigadeiroOption && (time >= brigadeiroTime * 2 && time < pipocaTime * 3))) {
        console.log("Comida queimou!")

    } else if (
        
        (dish == pipocaOption && time >= pipocaTime * 3 ) || 
        (dish == macarraoOption && time >= macarraoTime * 3) || 
        (dish == carneOption && time >= carneTime * 3 ) || 
        (dish == feijaoOption && time >= feijaoTime * 3) || 
        (dish == brigadeiroOption && time >= brigadeiroTime * 3)) {
        console.log("kabumm!!")

    }  else if (
        
        (dish == pipocaOption && time < pipocaTime ) || 
        (dish == macarraoOption && time < macarraoTime) || 
        (dish == carneOption && time < carneTime ) || 
        (dish == feijaoOption && time < feijaoTime) || 
        (dish == brigadeiroOption && time < brigadeiroTime)) {
        console.log("Tempo insuficiente")

    } else {
       console.log("Prato inexistente")

    }
}

   microwave("Pipoca", 20)
   microwave("Pipoca", 10)
   microwave("Pipoca", 30)
   microwave("Pipoca", 27)
   microwave("Pipoca", 40)
   microwave("Batata", 20)
   microwave("Brigadeiro", 8)
   microwave("Brigadeiro", 16)
   microwave("Brigadeiro", 24)
   microwave("Brigadeiro", 40)