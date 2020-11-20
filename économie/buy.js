const Discord = require('discord.js')
const bot = new Discord.Client()
const money = require('../json/money.json');
const stats = require('../json/stats.json')
const fs = require("fs");



module.exports.run = async(client, message, args) => {
    
    let userMoney = money[message.author.id].money 
    let boost = stats[message.author.id].multiplicateur
    let pala = stats[message.author.id].demistackpala
    let pub = stats[message.author.id].pub
    let member = message.guild.member(message.author);
    let Légende = message.guild.roles.cache.find(r => r.name === 507960590086701066);

    let mot1 = args[0]
    if (!mot1) return message.channel.send("Veuillez indiquer l'item que vous voulez acheter")

    if (mot1 === "1" ) {
        if (userMoney < 5000) return message.channel.send("Vous n'avez pas suffisament d'argent pour acheter cet item")
        if (pub >= 5 ) return message.channel.send("Vous avez trop de cet item en attente")
        else{
            money[message.author.id].money = money[message.author.id].money - 5000
            fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            }); 
            stats[message.author.id].pub = stats[message.author.id].pub + 1
            fs.writeFile("./json/stats.json", JSON.stringify(stats), (err) => {
                if(err) console.log(err);
            }); 
            message.channel.send("Vous venez d'acheter un pub dans le salon publicité du serveur !``*pub si vous voulez envoyer votre pub dans le salon``")
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} vien de faire un achat :`, message.author.avatarURL())
                .setColor("#287db5")
                .setDescription(`Pub sur le serveur`)
                .setTimestamp()
                .setFooter(message.author.username);

            client.channels.cache.get('779336870647431180').send(embed);
        }
    }
    if (mot1 === "2" ) {
        if (userMoney < 15000) return message.channel.send("Vous n'avez pas suffisament d'argent pour acheter cet item")
        if (boost === 1.25 ) return message.channel.send("Vous avez déjà ce boost")
        else{
            money[message.author.id].money = money[message.author.id].money - 15000
            fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            });
            stats[message.author.id].multiplicateur = 1.25
            fs.writeFile("./json/stats.json", JSON.stringify(stats), (err) => {
                if(err) console.log(err);
            });
            message.channel.send("Vous venez d'acheter un boost de money de 1.25")
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} vien de faire un achat :`, message.author.avatarURL())
                .setColor("#287db5")
                .setDescription(`Boost de 1.25`)
                .setTimestamp()
                .setFooter(message.author.username);

            client.channels.cache.get('779336870647431180').send(embed);
        }
    }
    if (mot1 === "3" ) {
        if (userMoney < 30000) return message.channel.send("Vous n'avez pas suffisament d'argent pour acheter cet item")
        if (pala >= 5 ) return message.channel.send("Vous avez déjà trop de cet item en attente.")
        else{
            money[message.author.id].money = money[message.author.id].money - 30000
            fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            });
            stats[message.author.id].demistackpala = stats[message.author.id].demistackpala + 1
            fs.writeFile("./json/stats.json", JSON.stringify(stats), (err) => {
                if(err) console.log(err);
            });
            message.channel.send("Vous venez d'acheter un demi-stack de paladium.")
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} vien de faire un achat :`, message.author.avatarURL())
                .setColor("#287db5")
                .setDescription(`1/2 de paladium`)
                .setTimestamp()
                .setFooter(message.author.username);

            client.channels.cache.get('779336870647431180').send(embed);
        }
    }
    if (mot1 === "4" ) {
        if (userMoney < 50000) return message.channel.send("Vous n'avez pas suffisament d'argent pour acheter cet item")
        
        if( boost === 1.75 ) return message.channel.send("Vous avez déjà ce boost")
        else{
            money[message.author.id].money = money[message.author.id].money - 50000
            fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            });
            stats[message.author.id].multiplicateur = 1.75
            fs.writeFile("./json/stats.json", JSON.stringify(stats), (err) => {
                if(err) console.log(err);
            });
            message.channel.send("Vous venez d'acheter un boost de money de 1.75")
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} vien de faire un achat :`, message.author.avatarURL())
                .setColor("#287db5")
                .setDescription(`Boost de 1.75`)
                .setTimestamp()
                .setFooter(message.author.username);

            client.channels.cache.get('779336870647431180').send(embed);
        }
    }
    if (mot1 === "5" ) {
        if (userMoney < 100000) return message.channel.send("Vous n'avez pas suffisament d'argent pour acheter cet item")
        if (message.author.roles.has(role.id)) return message.channel.send("Vous possédez déjà cet item.")
        else{
            money[message.author.id].money = money[message.author.id].money - 100000
            fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            });
            member.roles.add('507960590086701066')
            message.channel.send("Vous venez d'acheter le rôle ``Légende`` du serveur")
            const embed = new Discord.MessageEmbed()

                .setAuthor(`${message.author.username} vien de faire un achat :`, message.author.avatarURL())
                .setColor("#287db5")
                .setDescription(`Grade Légendaire`)
                .setTimestamp()
                .setFooter(message.author.username);

            client.channels.cache.get('779336870647431180').send(embed);
        }
    }
}

module.exports.help = {
    name: "buy"
}