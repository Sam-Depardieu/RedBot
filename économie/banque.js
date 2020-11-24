const banque = require('../json/banque.json')
const money = require('../json/money.json')
const fs = require("fs")

module.exports.run = async(client, message, args) => {
    
    if(!isNaN(args[0])){
        message.channel.send("Veuillez indiquer sous cette forme si vous voulez déposer ou prendre votre argent : \n ``*banque poser/prendre 1000``")
    }

    if (args[0] === "poser"){

        message.delete(message.author)
        const arg = Math.floor(args.slice(1).join(' '))
        if(!arg) return message.channel.send("Veuillez indiquer combien vous voulez déposer à la banque")
        if (!money[message.author.id]) {
            message.channel.send("Vous n'avez pas de compte en banque, merci d'en créer un en faisant ``*create``!")
        };
        if(isNaN(arg)) return message.channel.send("Merci d'entre la somme que vous voulez placer à la banque.")
        if(arg > money[message.author.id].money) return message.channel.send("Vous ne pouvez pas mettre plus d'argent que vous en avez dans la banque.")
        else{
            const total = arg + banque[message.author.id].money
            if(total > banque[message.author.id].max){
                message.channel.send(`Vous ne pouvez mettre seulement ${banque[message.author.id].max} dans votre banque si vous voulez l'augmenter fait *shop`)
            }else{
                banque[message.author.id].money = banque[message.author.id].money +++ arg
                fs.writeFile("./json/banque.json", JSON.stringify(banque), (err) => {
                    if(err) console.log(err);
                }); 
                money[message.author.id].money = money[message.author.id].money - arg
                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                    if(err) console.log(err);
                }); 
                message.channel.send(`Vous avez mis ${arg} dans votre banque, pour récuperer cette argent faites *banque prendre`)
            }
            
        }
    }
    if(args[0] === "prendre") {

        message.delete(message.author)
        const arg = Math.floor(args.slice(1).join(' '))
        if(!arg) return message.channel.send("Veuillez indiquer combien vous voulez prendre à la banque")
        if (!money[message.author.id]) {
            message.channel.send("Vous n'avez pas de compte en banque, merci d'en créer un en faisant ``*create``!")
        };
        if(isNaN(arg)) return message.channel.send("Merci d'entre la somme que vous voulez prendre à la banque.")
        if(arg > banque[message.author.id].max) return message.channel.send("Vous ne pouvez pas prendre plus d'arrgent que vous pouvez en placer dans la banque.")
        else{
            banque[message.author.id].money = banque[message.author.id].money - arg
            fs.writeFile("./json/banque.json", JSON.stringify(banque), (err) => {
                if(err) console.log(err);
            }); 
            money[message.author.id].money = money[message.author.id].money +++ arg
            fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            }); 
            message.channel.send(`Vous avez pris ${arg} dans votre banque, pour poser de l'argent faites *banque poser`)
            
        }
    }
}

module.exports.help = {
    name: "banque"
}