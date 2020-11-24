const Discord = require('discord.js');
const fs = require("fs")
const exp = JSON.parse(fs.readFileSync('./json/exp.json'));

module.exports.run = async(client, message, settings) => {
    
    /*let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .addField('10 premier du classement en activité', ((exp[message.author.id] && exp[message.author.id].length) ? exp[message.author.id].slice(0, 10).map(e => e.niveau) : "Personne n'as de niveau sur ce serveur"))
        .setTimestamp()
    message.channel.send(embed)*/

}

module.exports.help = {
    name: "rank"
}