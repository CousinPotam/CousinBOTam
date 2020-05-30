const Discord = require('discord.js'); //Ce que le bot à besoin /
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
const RolesManager = require('./rolesmanager');

var prefix = "c."; //Prefix de votre Bot ( *play www.youtube.com/ )

client.login(process.env.TOKEN); //Token (Série de chiffre) propre a chaque Bot

client.on("ready", () => {
    console.log("salut les cacas !");
    //Signifie que le bot à bien démarré console.log("Je suis prêt !"); //Lorsque que le bot est lancé observer la console Visual Studio client.user.setGame("s'Update seul"); //Voir le Jeu sur le Discord

    // Init des fonctions sur les rôles
    RolesManager.Init(client);
});
