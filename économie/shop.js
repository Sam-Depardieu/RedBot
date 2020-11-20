const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

    message.channel.send({

        embed:{
            color: 3447003,
            title: `Voici tout ce que vous pouvez acheter avec l'argent de l'économie`,
            thumbnail: {
                url: message.author.avatarURL()
            },
            fields: [
                {
                name: "1- :euro: 5,000 - Une pub dans le salon pub !",
                value: "**<:Blue:779044246300262441>  Tu débutes dans le Monde du Casino**"

                },
                {
                name: "2- :euro: 15,000 - BOOST ton gain de money par ×1,25 !",
                value: "**<:Blue:779044246300262441>  Fait attentions, tu commences a devenir addict au jeux :warning:** "
    
                },
                {
                name: "3- :euro: 30,000 - Un demi-stack de lingot de Paladium",
                value: "**<:Blue:779044246300262441>  Attentions ce sont des joueurs dangereux**"

                },
                {
                name: "4- :euro: 50,000 - BOOST ton gain de money par ×1,75 !",
                value: "**<:Blue:779044246300262441>  Il me semble qu'ils leur manquent quelques cases x)**"

                },
                {
                name: "5- :euro: 100,000 - Le grade LEGENDE du serveur",
                value: "**<:Blue:779044246300262441>  Mieux vaut ne pas les croiser **"
    
                },
                
            ],
            footer: {
                text: `Faites *buy <numéro de l'item> pour pouvoir en acheter un !`
            }
        }
    })
};

module.exports.help = {
    name: "shop",
};