const Discord = require('discord.js');
const money = require('../json/money.json');
const fs = require("fs");
const pf = ["pile", "face"];
const stats = require('../json/stats.json')

module.exports.run = (client, message, args) => {

    if(!args.join(' ')) { 
        return message.channel.send("**Merci d'indiquer pile ou face !**")
    }

    if (!money[message.author.id]) {
        message.channel.send("Veuillez créer votre compte en banque en faisant ``*create``")
    }
    
    const configpf = stats[message.author.id].pf
    
    if(configpf === "activé"){
        
        let parie = args.slice(1).join(' ')

        if(parie > 10 || parie < 3) return message.channel.send("Veuillez entrez un parie entre 3 et 10")
        if(!parie) return message.channel.send("Veuillez entrez un parie entre 3 et 10")
        if(isNaN(parie)) return message.channel.send("Veuillez entrez un parie entre 3 et 10")
        money[message.author.id].money = money[message.author.id].money --- parie
        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);
        }); 
        message.channel.send(`Vous pariez ${parie} :euro: sur ce pile ou face. Si vous voulez le déactivez faites : *config pf`)
    }
    
        
    if (args[0] === "pile" || args[0] === 'face') {
        
        const cotebot = pf[Math.floor(Math.random() * pf.length)]
        const configpf = stats[message.author.id].pf
        let parie = args.slice(1).join(' ')

        if(cotebot === args[0]) { 
            var embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag,message.author.displayAvatarURL)
                .setTitle(`<:face:748977038823522345> Voici le résultat <:pile:748977007575957575>`)
                .setDescription(`Vous avez choisi le côté : ${args[0]} \n Le bot a choisi le côté : ${cotebot}`)
                .setFooter("Vous avez donc gagné ! 🎉")
            message.channel.send(embed)
            if(configpf === "activé"){
                money[message.author.id].money = money[message.author.id].money +++ parie*2
                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
                }); 
                let parietotal = parie*2
                message.channel.send(`En pariant sur ce pile ou face vous avez gagné ${parietotal} :euro:.`)
            }
        } else {
            var lose = new Discord.MessageEmbed()
                .setAuthor(message.author.tag,message.author.displayAvatarURL)
                .setTitle(`<:face:748977038823522345> Voici le résultat <:pile:748977007575957575>`)
                .setDescription(`Vous avez choisi le côté : ${args[0]} \n Le bot a choisi le côté : ${cotebot}`)
                .setFooter("Vous avez donc perdu ! 😩")
            message.channel.send(lose)
        }

} else {
    return message.channel.send("Veuillez entrer pile ou face")
}

        
    }
    
module.exports.help = {
    name: "pf"
}