const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX } = require('./config')

const fs = require('fs');

client.login(TOKEN);

client.commands = new Discord.Collection();

client.on('ready', () => {
    console.log("RedBot pour vous servir !")
    console.log("PocketHeberg.fr")
});

fs.readdir("./Commande/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commande/${f}`);
        console.log(`${f} commande chargée !`);


    client.commands.set(commande.help.name, commande);
    });


});
fs.readdir("./économie/", (error, f) => {
    if(error) console.log(error);

    let économies = f.filter(f => f.split(".").pop() === "js");
    if(économies.length <= 0) return console.log("Aucune économie trouvée !");

    économies.forEach((f) => {

        let économie = require(`./économie/${f}`);
        console.log(`${f} commande chargée !`);


    client.commands.set(économie.help.name, économie);
    });


});
fs.readdir("./Moderation/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commande trouvée !");

    commandes.forEach((f) => {

        let moderation = require(`./Moderation/${f}`);
        console.log(`${f} commande chargée !`);


    client.commands.set(moderation.help.name, moderation);
    /*member.guild.channels.get('575673488350642197').send("C'est parti... Je suis en route !")*/
    });


});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        let events = require(`./Events/${f}`);
        let event = f.split(".")[0];

        client.on(event, events.bind(null, client));    
    });

});


client.on('message', message => {

    if(message.content === "RedSkyll"){
        message.author.createDM().then(channel => {
            channel.send("GG ! Tu a trouvé l'easter egg !")
        })
    }
})