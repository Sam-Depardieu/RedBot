const Discord = require('discord.js');
const money = require('../json/money.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    
    
    if (!money[message.author.id]) {
        message.channel.send("Veuillez créer un compte en banque en faisant ``*create``")
    }else{

    
        let userMoney = money[message.author.id].money ;
        let userMoneyEmbed = new Discord.MessageEmbed()      
            .setAuthor(message.author.username , message.author.avatarURL())
            .setTitle(`Vous avez ${userMoney} :euro:`)
            .addField(`Vous pouvez utiliser cet argent en faisant *shop !`,`Vous pouvez en gagner en faisant *slots`)

        message.channel.send(userMoneyEmbed);
        };
    }
    

module.exports.help = {
    name: "money"
};