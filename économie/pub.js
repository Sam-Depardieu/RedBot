const Discord = require('discord.js')
const money = require('../json/money.json');
const stats = require('../json/stats.json')
const fs = require("fs");

module.exports.run = async(client, message, args) => {

    const pub = stats[message.author.id].pub

    if(pub === 0) return message.channel.send("Vous n'avez pas de pub a effectuer en attente.")
    else{
        stats[message.author.id].pub -= 1
        fs.writeFile("./json/stats.json", JSON.stringify(stats), (err) => {
            if(err) console.log(err);
        });
    }

}

module.exports.help = {
    name: "pub"
}