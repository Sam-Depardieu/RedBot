const Discord = require('discord.js');
const money = require('../json/money.json');
const slots = require('../json/money.json');
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    if (!money[message.author.id]) {
        message.channel.send("Veuillez créer un compte en banque en faisant ``*create``")
    }else{
        var text = message.content.split(' ').slice(1).join(' ')
        const slotsarg = args[0]
        const configslots = money[message.author.id].slots
        const configpf = money[message.author.id].pf

        if(!text){
            message.channel.send({

                embed:{
                    color: 3447003,
                    title: "Vous pouvez changer la configuration de la liste des commandes suivantes :",
                    fields: [
                        {
                        name: "***slots**",
                        value: `Pour le moment, votre slots est ${configslots}\n Si votre slots est activé alors vous payez, et vous gagnez de l'argent si vous êtes gagnant au jeu sinon l'inverse.`
                        },
                        {
                        name: "***pf**",
                        value: `Pour le moment, votre pile ou face est ${configpf}\n Si votre slots est activé alors vous payez, et vous gagnez de l'argent si vous êtes gagnant au jeu sinon l'inverse.`
                        }
                    ],
                    footer: {
                        text: `Faites *money pour voir votre argent`
                    }
                }
            })
        }

        if(slotsarg === "slots" || slotsarg === "slot"){
            const rep = message.channel.createMessageCollector(m => m.author.id === message.author.id, { time: 60000 });
            message.channel.send("Veuillez indiquez si vous êtes sur de changer la configuration yes/no ou oui/non à la suite.")
            réponse = false
            rep.on('collect', m => {
                if(m.content === "yes" || m.content === "oui"){
                    if(configslots === "désactivé"){
                        money[message.author.id].slots = "activé"
                        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                            if(err) console.log(err);
                        }); 
                        message.channel.send(`Vous avez changé votre configuration de slots en activé`)
                        réponse = true
                        rep.stop()
                    }else{
                        money[message.author.id].slots = "désactivé"
                        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                            if(err) console.log(err);
                        }); 
                        message.channel.send(`Vous avez changé votre configuration de slots en désactivé`)
                        réponse = true
                        rep.stop()
                    }
                }else{
                    message.channel.send({

                        embed:{
                            color: 3447003,
                            title: message.author.username,
                            fields: [
                                {
                                name: "Commande annulé",
                                value: `Vous avez annulé la commande *config slots`
                                }
                            ],
                        }
                    })
                    réponse = true
                    rep.stop()
                }
            })
            rep.on("end", collected => {
                if (!réponse) {
                    message.channel.send("Vous avez mis trop longtemps à répondre.")
                }
            });
        }
        if(slotsarg === "pf" || text === "pile ou face"){
            const rep = message.channel.createMessageCollector(m => m.author.id === message.author.id, { time: 60000 });
            message.channel.send("Veuillez indiquez si vous êtes sur de changer la configuration yes/no ou oui/non à la suite.")
            réponse = false
            rep.on('collect', m => {
                if(m.content === "yes" || m.content === "oui"){
                    if(configpf === "désactivé"){
                        money[message.author.id].pf = "activé"
                        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                            if(err) console.log(err);
                        }); 
                        message.channel.send(`Vous avez changé votre configuration de pf en activé`)
                        réponse = true
                        rep.stop()
                    }else{
                        money[message.author.id].pf = "désactivé"
                        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                            if(err) console.log(err);
                        }); 
                        message.channel.send(`Vous avez changé votre configuration de pf en désactivé`)
                        réponse = true
                        rep.stop()
                    }
                }else{
                    message.channel.send({

                        embed:{
                            color: 3447003,
                            title: message.author.username,
                            fields: [
                                {
                                name: "Commande annulé",
                                value: `Vous avez annulé la commande *config pf`
                                }
                            ],
                        }
                    })
                    réponse = true
                    rep.stop()
                }
            })
            rep.on("end", collected => {
                if (!réponse) {
                    message.channel.send("Vous avez mis trop longtemps à répondre.")
                }
            });
        }
    }

}

module.exports.help = {
    name: "config"
}