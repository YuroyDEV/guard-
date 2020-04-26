const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require("discord.js")
const prefix = "e/"
client.login("Njk0ODQ4NTAzODk3MTI5MDQy.XqVzNg.7i3SczdKoX3i9_LwI-C5vkOnAS0")
client.on("ready", () => {
    console.log(`${client.user.username} | est connecté sur ${client.guilds.cache.size} serveur(s)`);

    let statuses = [
         `EXTASY GUARD`,
    ] 

    setInterval(function() {
        let = status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "STREAMING", url:"https://twitch.tv/Strandable"});

    }, 5000)
});


client.on('message',async message => {
if(message.content.startsWith(prefix + "verif")) {

            let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`**Nous te souhaitons la bienvenue sur __Extasy__**.
            **Pour accéder au serveur veuillez cliquer sur la réaction ci dessous**`)
            .setImage(`https://cdn.discordapp.com/attachments/702097016662130788/702537329172283398/20200422_171019.gif`) 
            message.channel.send(embed) 
  };

  if(message.content.startsWith(prefix + "embed")) {
    if (message.deletable) message.delete()
    let args = message.content.split(" ").slice(1);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(args.slice(0).join(" "))

            

        message.channel.send(embed);
};

 
        });