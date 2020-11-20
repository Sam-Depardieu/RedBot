const Discord = require('discord.js');
const money = require('../json/money.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande");
    const arg = args[0]
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("Veuillez mentionner un membre");
    let moneygive = Math.floor(args.slice(1).join(' '));
    if (isNaN(moneygive)) return message.channel.send("Veuillez indiquer une somme d'argent");
    if(!arg){
        message.channel.send("Veuillez indiquer la personne a qui vous voulez donner de l'argent sous cette forme : ``*givemoney @membre montant``")
    }
    if (!money[member.id]) {
        message.channel.send("Le membre à qui vous voulez donner de l'argent n'as de compte en banque, merci d'en créer un !")
    }else{
        money[member.id].money = money[member.id].money +++ moneygive
        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        });  
        message.channel.send(`Vous avez donné ${moneygive} à ${member}`)
    }
}

module.exports.help = {
    name: "givemoney",
}