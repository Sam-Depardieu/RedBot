const Discord = require('discord.js');
const exp = require('../json/exp.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if (!exp[message.author.id]) {
        exp[message.author.id] = {
            name: message.author.username,
            exp: 0,
            niveau: 1
        }
    }

    let cExp = exp[message.author.id].exp
    let cNiv = exp[message.author.id].niveau
    let nextLevelUp = cNiv * 100
    let expNeed = nextLevelUp - cExp

    let NivEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("RANDOM")
        .addField('Niveau', cNiv, true)
        .addField('Expérience', cExp, true)
        .setFooter(`${expNeed} points d'expérience requis pour le prochain niveau.`)
    message.channel.send(NivEmbed)

}

    

module.exports.help = {
    name: "xp"
};