const Discord = require('discord.js')
const money = require('../json/money.json');
const stats = require('../json/stats.json')
const fs = require("fs");


module.exports.run = async(client, message, args, guild) => {

    if (!money[message.author.id]) {
        money[message.author.id] = {
            name: message.author.username,
            money: 100,
        }
        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        })
        stats[message.author.id] = {
            name: message.author.username,
            multiplicateur: 1,
            slots: "activé",
            pf: "activé",
            pub: 0,
            demistackpala: 0
        }
        fs.writeFile("./json/stats.json", JSON.stringify(stats), (err) => {
            if(err) console.log(err);
        })
    

        let userMoney = money[message.author.id].money

        message.channel.send({

            embed:{
                color: 3447003,
                title: `Vous avez bien créé votre compte en banque !`,
                fields: [
                    {
                    name: "Vous avez reçu 100 :euro: pour votre nouvelle inscription. \n Voici votre argent :",
                    value: `:moneybag: ${userMoney}`
                    }
                ],
                footer: {
                    text: `Bienvenue dans le jeu casino du RedBot`
                }
            }
        })
    }else{

        if(money[message.author.id]){
            message.channel.send("Vous avez déjà créé votre compte en banque !")
        }
    }
}

    

module.exports.help = {
    name: "create"
};