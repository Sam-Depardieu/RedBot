const Discord = require('discord.js')
const slot = require('../json/slot.json');
const money = require('../json/money.json');
const fs = require("fs");
const stats = require('../json/stats.json')

module.exports.run = async(client, message, args) => {
    
    const slots = ['<:RedWhaa:746657187526606870>','<:RedThug:746657884405891093>', '<:Redsorry:746657296691757076>', '<:RedLove:746657248557662279>','<:RedOk:746657111974346803>','<:RedJoy:718404945266868225>', '<:RedCry:746657563637973062>', '<:RedAngry:746657654780461086>','<:RedParty:752688476624912427>'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
    const slotfour = slots[Math.floor(Math.random() * slots.length)];
    const slotfive = slots[Math.floor(Math.random() * slots.length)];
    const slotsix = slots[Math.floor(Math.random() * slots.length)];
    const slotseven = slots[Math.floor(Math.random() * slots.length)];
    const sloteight = slots[Math.floor(Math.random() * slots.length)];
    const slotnine = slots[Math.floor(Math.random() * slots.length)];
    const slotdix= slots[Math.floor(Math.random() * slots.length)];
    const slotonze = slots[Math.floor(Math.random() * slots.length)];
    const slotdouze = slots[Math.floor(Math.random() * slots.length)];
    const slottreize = slots[Math.floor(Math.random() * slots.length)];
    const slotquatorze = slots[Math.floor(Math.random() * slots.length)];
    const slotquinze = slots[Math.floor(Math.random() * slots.length)];
    const slotseize = slots[Math.floor(Math.random() * slots.length)];
    const slot17 = slots[Math.floor(Math.random() * slots.length)];
    const slot18 = slots[Math.floor(Math.random() * slots.length)];
    const slot19 = slots[Math.floor(Math.random() * slots.length)];
    const slot20 = slots[Math.floor(Math.random() * slots.length)];
    const slot21 = slots[Math.floor(Math.random() * slots.length)];
    const slot22 = slots[Math.floor(Math.random() * slots.length)];
    const slot23 = slots[Math.floor(Math.random() * slots.length)];
    const slot24 = slots[Math.floor(Math.random() * slots.length)];
    const slot25 = slots[Math.floor(Math.random() * slots.length)];

    

    if(!args.join(' ')) { 
        if (!slot[message.author.id]) {
            slot[message.author.id] = {
                name: message.author.username,
                slot: 1
            }
            fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                if(err) console.log(err);
            })};

            let userSlot = slot[message.author.id].slot
            
        message.channel.send("Cette commande permet de jouer au slots, comme les machines dans les casinos ! Les niveaux sont classé du plus dur au plus facile ! \n Il y a plusieurs niveaux :\n*slots ``1``; ``2``; ``3``; ``4``; ``5``; ``6``; ``7``; ``8``; ``9``; ``10``; ``11``; ``12``; ``13``; ``14``; ``15``; ``16``; ``17``; ``18``; ``19``; ``20``. \n __Note : Des niveaux seront potentiellement ajouté régulièrement !__\n Voici votre niveau " + userSlot )
        
    }
        
        
        if (!slot[message.author.id]) {
            message.channel.send("Merci de d'abord exécuter la commande *slots")
        
        }
        else{
            if(args.join(' ')){
                let gainwin = 8
                let slotsjoueur = stats[message.author.id].slots
                let userStat = stats[message.author.id].multiplicateur
                let userSlot = slot[message.author.id].slot
                if(args[0] === userSlot){
                    if(slotsjoueur === "activé"){
                        money[message.author.id].money = money[message.author.id].money --- 5
                        fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                        if(err) console.log(err);
                        }); 
                        message.channel.send("En éxécutant cette commande vous avez perdue 5 :euro: car vous avez le slot payant d'activé. ``*config slots``")
                    }
                }
                
                if(args[0] === "1") {
                    if(userSlot === 1 || userSlot > 20) {
                        if (slotOne === slotTwo || slotThree === slotfour ||  slotsix  === slotfive || slotseven === sloteight || slotnine === slotdix) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotnine}|${slotdix}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 1) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotnine}|${slotdix}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                    
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            
            if(args[0] === "2") {
                if(userSlot === 2 || userSlot > 20) {
                    if (slotOne === slotTwo || slotThree === slotfour ||  slotsix  === slotfive || slotseven === sloteight) {
                    const won = new Discord.MessageEmbed()
                        .setColor("#00ff2e")
                        .setTitle("💸💸💸    JACKPOT    💸💸💸")
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                        .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                        message.channel.send(won)
                        if(slotsjoueur === "activé"){
                            if(userStat != 1){
                                money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                if(err) console.log(err);
                                });  
                                message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                            }else{
                                money[message.author.id].money = money[message.author.id].money +++ gainwin
                                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                });  
                                message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                            }
                        }
                        if(userSlot === 2) {
                            slot[message.author.id].slot = slot[message.author.id].slot + 1
                            fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                if(err) console.log(err);
                            });
                        }
                }else {
                    const lost = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|`)
                    .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                    .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|`)
                    .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                    .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                    message.channel.send(lost)
                }
                    
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }

            if(args[0] === "3") {
                if(userSlot === 3 || userSlot > 20) {
                    if (slotOne === slotTwo || slotThree === slotfour || slotfive === slotsix) {
                    const won = new Discord.MessageEmbed()
                        .setColor("#00ff2e")
                        .setTitle("💸💸💸    JACKPOT    💸💸💸")
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotfive}|${slotsix}|`)
                        .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                        message.channel.send(won)
                        if(slotsjoueur === "activé"){
                            if(userStat != 1){
                                money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                if(err) console.log(err);
                                });  
                                message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                            }else{
                                money[message.author.id].money = money[message.author.id].money +++ gainwin
                                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                });  
                                message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                            }
                        }
                        if(userSlot === 3) {
                            slot[message.author.id].slot = slot[message.author.id].slot + 1
                            fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                if(err) console.log(err);
                            });
                        }
                }else {
                    const lost = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                    .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                    .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotfive}|${slotsix}|`)
                    .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                    message.channel.send(lost)
                } 
                    
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "4") {
                if(userSlot === 4 || userSlot > 20) {
                    if (slotOne === slotTwo || slotfour === slotThree) {
                        const won = new Discord.MessageEmbed()
                        .setColor("#00ff2e")
                        .setTitle("💸💸💸    JACKPOT    💸💸💸")
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                        .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                        message.channel.send(won)
                        if(slotsjoueur === "activé"){
                            if(userStat != 1){
                                money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                if(err) console.log(err);
                                });  
                                message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                            }else{
                                money[message.author.id].money = money[message.author.id].money +++ gainwin
                                fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                });  
                                message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                            }
                        }
                        if(userSlot === 4) {
                            slot[message.author.id].slot = slot[message.author.id].slot + 1
                            fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                if(err) console.log(err);
                            });
                        }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "5") {
                if(userSlot === 5 || userSlot > 20) {
                    if (slotOne === slotTwo) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat
    
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 5) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "6") {
                if(userSlot === 6 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotnine || slotThree === slotfour && slotThree === slotdix || slotsix  === slotfive && slotsix === slotonze || slotseven === sloteight && slotseven === slotdouze || slottreize === slotquatorze && slottreize === slotquinze) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slottreize}|${slotquatorze}|${slotquinze}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat
    
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 6) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slottreize}|${slotquatorze}|${slotquinze}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "7") {
                if(userSlot === 7 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotnine || slotThree === slotfour && slotThree === slotdix || slotsix  === slotfive && slotsix === slotonze || slotseven === sloteight && slotseven === slotdouze) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat
    
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 7) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "8") {
                if(userSlot === 8 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotfour}|${slotfive}|${slotsix}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotnine}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 8) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "9") {
                if(userSlot === 9 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotfour}|${slotfive}|${slotsix}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 9) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotfour}|${slotfive}|${slotsix}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "10") {
                if(userSlot === 10 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 10) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "11") {
                if(userSlot === 11 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotnine && slotOne === slottreize || slotThree === slotfour && slotThree === slotdix && slotThree === slotquinze || slotsix  === slotfive && slotsix === slotonze && slotsix  === slotseize || slotseven === sloteight && slotseven === slotdouze && slotseven === slotquatorze || slot17 === slot18 && slot17 === slot19 && slot17 === slot20){
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|${slotseize}`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|${slottreize}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|${slotquatorze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|${slotquinze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slot17}|${slot18}|${slot19}|${slot20}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 11) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|${slotseize}`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|${slottreize}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|${slotquatorze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|${slotquinze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slot17}|${slot18}|${slot19}|${slot20}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "12") {
                if(userSlot === 12 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotnine && slotOne === slottreize || slotThree === slotfour && slotThree === slotdix && slotThree === slotquinze || slotsix  === slotfive && slotsix === slotonze && slotsix  === slotseize || slotseven === sloteight && slotseven === slotdouze && slotseven === slotquatorze ) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|${slotseize}`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|${slottreize}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|${slotquatorze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|${slotquinze}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 12) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotfive}|${slotonze}|${slotseize}`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotnine}|${slottreize}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotdouze}|${slotquatorze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotThree}|${slotfour}|${slotdix}|${slotquinze}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "13") {
                if(userSlot === 13 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === slotonze|| slotfour === slotfive && slotfour === slotsix && slotfour === slotdix|| slotseven === sloteight && slotseven === slotnine && slotseven === slotdouze) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotfour}|${slotfive}|${slotsix}|${slotdix}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotonze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotnine}|${slotdouze}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 13) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotfour}|${slotfive}|${slotsix}|${slotdix}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotonze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseven}|${sloteight}|${slotnine}|${slotdouze}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "14") {
                if(userSlot === 14 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === sloteight || slotfour === slotfive && slotfour === slotsix && slotfour === slotseven) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotfour}|${slotfive}|${slotsix}|${slotseven}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${sloteight}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 14) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotfour}|${slotfive}|${slotsix}|${slotseven}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${sloteight}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "15") {
                if(userSlot === 15 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === slotfour) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 15) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "16") {
                if(userSlot === 16 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === slotfour && slotOne === slotfive || slotsix === slotseven && slotsix === sloteight && slotsix === slotnine && slotsix === slotdix || slotonze === slotdouze && slotonze === slottreize && slotonze === slotquatorze && slotonze === slotquinze || slotseize === slot17 && slotseize === slot18 && slotseize === slot19 && slotseize === slot20 || slot21 === slot22 && slot21 === slot23 && slot21 === slot24 && slot21 === slot25) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotonze}|${slotdouze}|${slottreize}|${slotquatorze}|${slotquinze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseize}|${slot17}|${slot18}|${slot19}|${slot20}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slot21}|${slot22}|${slot23}|${slot24}|${slot25}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 16) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotonze}|${slotdouze}|${slottreize}|${slotquatorze}|${slotquinze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseize}|${slot17}|${slot18}|${slot19}|${slot20}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slot21}|${slot22}|${slot23}|${slot24}|${slot25}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "17") {
                if(userSlot === 17 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === slotfour && slotOne === slotfive || slotsix === slotseven && slotsix === sloteight && slotsix === slotnine && slotsix === slotdix || slotonze === slotdouze && slotonze === slottreize && slotonze === slotquatorze && slotonze === slotquinze|| slotseize === slot17 && slotseize === slot18 && slotseize === slot19 && slotseize === slot20) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotonze}|${slotdouze}|${slottreize}|${slotquatorze}|${slotquinze}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseize}|${slot17}|${slot18}|${slot19}|${slot20}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 17) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotonze}|${slotdouze}|${slottreize}|${slotquatorze}|${slotquinze}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotseize}|${slot17}|${slot18}|${slot19}|${slot20}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "18") {
                if(userSlot === 18 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === slotfour && slotOne === slotfive || slotsix === slotseven && slotsix === sloteight && slotsix === slotnine && slotsix === slotdix || slotonze === slotdouze && slotonze === slottreize && slotonze === slotquatorze && slotonze === slotquinze) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotonze}|${slotdouze}|${slottreize}|${slotquatorze}|${slotquinze}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 18) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotonze}|${slotdouze}|${slottreize}|${slotquatorze}|${slotquinze}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "19") {
                if(userSlot === 19 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === slotfour && slotOne === slotfive || slotsix === slotseven && slotsix === sloteight && slotsix === slotnine && slotsix === slotdix) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 19) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotsix}|${slotseven}|${sloteight}|${slotnine}|${slotdix}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
            if(args[0] === "20") {
                if(userSlot === 20 || userSlot > 20) {
                    if (slotOne === slotTwo && slotOne === slotThree && slotOne === slotfour && slotOne === slotfive) {
                        const won = new Discord.MessageEmbed()
                            .setColor("#00ff2e")
                            .setTitle("💸💸💸    JACKPOT    💸💸💸")
                            .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                            .setFooter("Wow, la chance! Toutes nos félicitations !🎉")
                            message.channel.send(won)
                            if(slotsjoueur === "activé"){
                                if(userStat != 1){
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin*userStat

                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                    if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé et votre bonus multiplicateur de ${userStat} vous gagnez ${gainwin} :tada:`)
                                }else{
                                    money[message.author.id].money = money[message.author.id].money +++ gainwin
                                    fs.writeFile("./json/money.json", JSON.stringify(money), (err) => {
                                        if(err) console.log(err);
                                    });  
                                    message.channel.send(`Grâce au slot qui est activé vous gagnez ${gainwin} :tada:`)
                                }
                            }
                            if(userSlot === 20) {
                                slot[message.author.id].slot = slot[message.author.id].slot + 1
                                fs.writeFile("./slot.json", JSON.stringify(slot), (err) => {
                                    if(err) console.log(err);
                                });
                            }
                    }else {
                        const lost = new Discord.MessageEmbed()
                        .setColor("#ff0000")
                        .addField("|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|-:slot_machine:-|", `|${slotOne}|${slotTwo}|${slotThree}|${slotfour}|${slotfive}|`)
                        .setFooter("Rrraaahhh ! Plus de chance la prochaine fois😩.");
                        message.channel.send(lost)
                    }
                }else{
                    message.channel.send(`Vous n'êtes pas au bon niveau, en ce moment vous êtes au niveau ${slot[message.author.id].slot}`)
                }
            }
        }
    }
};
            
module.exports.help = {
    name: "slots",
    cooldown: 2
}