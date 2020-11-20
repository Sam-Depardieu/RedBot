const Discord = require('discord.js');
const money = require('../json/money.json');
const fs = require("fs");
const stats = require('../json/stats.json')
let cooldown = new Set();
let cdseconds = 60;   
const PREFIX = require('../config')
    
module.exports.run = async(client, message, args) => {

    if (!money[message.author.id]) {
        message.channel.send("Veuillez créer votre compte en banque en faisant ``*create``")
    };

    if(cooldown.has(message.author.id)){
        message.delete(message.author);
        return message.reply("Tu dois attendre 1 jour pour faire cette commande")
    }else{

        let ArgentGain = Math.floor(Math.random() * (100 - 25 +1)) + 1;
        let userStat = stats[message.author.id].multiplicateur

        money[message.author.id].money =  money[message.author.id].money + ArgentGain*userStat
        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        }); 

        message.channel.send({

            embed:{
                color: 3447003,
                title: message.author.username,
                fields: [
                    {
                    name: "Vous avez reçu: ",
                    value: `${ArgentGain} :euro:`
                    }
                ],
                footer: {
                    text: `Faites *money pour voir votre argent`
                }
            }
        })
        
        if(stats[message.author.id].multiplicateur != 1){
            message.channel.send(`Grâce à votre bonus multiplicateur de gain de ${userStat}, vous avez gagné au total ${ArgentGain*userStat} <:RedWhaa:746657187526606870>`)
        }
    
        setTimeout(() => {
            cooldown.delete(message.author.id)
        }, cdseconds * 1000)
    }
};

module.exports.help = {
    name: "daily"
};