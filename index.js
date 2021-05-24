const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const ms = require('ms');

const ytdl = require("ytdl-core");

const token = 'querias o token neh crl?';

client.commands = new Discord.Collection;
client.events = new Discord.Collection;
const PREFIX = '!';     //prefixo 
var versão = '3.0';
var servers = {};   //lista de reprodução
var oi=0;


bot.on('ready', () => {    //ligar o bot
    console.log('King Bot ligado'); 
    bot.user.setPresence({
        status: 'online',
        activity: {
            name: '!help',
            type: 'STREAMING',
            url: 'https://www.youtube.com/channel/UCjAQMjcX6DgWXjjVTlwmeAA'
        }
    })

} )

bot.on('guildMemberAdd', member =>{    //boas vindas a novos membros
    const channel = member.guild.channels.cache.find(channel => channel.name === "📒bem-vindo");
    if(!channel) return;

    channel.send(`Bem-vindo ao servidor 👑King, ${member}!`)
});




bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){                 //comandos do bot

        case 'advinha':
            message.channel.send('Escreva um número entre 1 e 10 usando /advinha (numero) para ver se está correto :P');

            if(args[1]>0 && args[1]<11){
                let numerointroduzido = args[1];
                let ntentativas=3;
                let numerocerto= Math.floor (Math.random()*(10 - 1 + 1))+1;
                for(let i= 3; i > 0; i--){

                    if(numerointroduzido==numerocerto){
                         message.channel.send('Acertaste!!!!!');
                    }
                    else if(numerointroduzido>numerocerto){
                         message.channel.send('Demasiado grande...');
                         message.channel.send('Tenta de novo bro');
                         let numerointroduzido = args[1];
                         ntentativas--;
                         message.channel.send('Tentativas restantes: '+ntentativas);
                    }
                     else if(numerointroduzido<numerocerto){
                         message.channel.send('Demasiado pequeno...');
                         message.channel.send('Tenta de novo bro');
                         let numerointroduzido = args[1];
                         ntentativas--;
                         message.channel.send('Tentativas restantes: '+ntentativas);
                    }
                    
                }
            }
            else{
                message.channel.send('Eu disse entre 1 e 10 burro.');
            }
            
        break;

        case 'gatos':
            let ngatos=5;
            let numgatos= Math.floor (Math.random()*(ngatos - 1 + 1))+1;
            message.channel.send('Queres gatinhos fofinhos? aqui tens🐱');
            message.channel.send({files: ["./gatos/"+numgatos+".jpg"]});
        break;

        case 'porno':
        let nimg=3;
        let numporno= Math.floor (Math.random()*(nimg - 1 + 1))+1;
        message.channel.send({files: ["./fotos/img"+numporno+".png"]});
        break;

        case 'spam':
                
                var spam =setInterval(function(){

                    message.channel.send('☠️Gostas de spam?');
                    oi++;
                    if(oi==10){
                        clearInterval(spam);
                        oi = 0;
                        //message.channel.send('ola');
                    }
                }, 1000);

        break;

        case 'ping':
            message.channel.send('pong!');
        break;

        case 'olá':
            message.channel.send('👋ola tudo bem?');
        break;

        case 'info':
            if(args[1] === 'versão'){
                message.channel.send('🤖versão do bot: '+ versão );
            } 

            else if(args[1]=== 'autor'){
                message.channel.send('este bot foi criado por 👑Kingcraft12👑');
            }

            else{
                const info = new Discord.MessageEmbed()
                .setDescription('**❗️Informações**')
                .setColor('00CC00')
                .addFields(
                    {name: '🤖Versão: ' + versão, value: '---'},
                    {name: 'Autor do Bot: 👑Kingcraft12👑', value: '---'},
                    );
                message.channel.send(info);
            }
        break;

        case 'tetas':
            message.channel.send('tetaaaaaaaaaaassssss');
        break;
            
        //play antigo
        /*
        case 'play':

            function play (connection, message){

                var server = servers[message.guild.id];

                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly" }));


                server.queue.shift();

                server.dispatcher.on("end", function(){
                    if(server.queue[0]){
                        play(connection, message);
                    }

                    else{
                        connection.disconnect();
                    }
                })

            }

            if (!args[1]) {
                message.channel.send('❌Precisas de introduzir um link!');
                return;
            }

            if(!message.member.voice.channel){
                message.channel.send('📣Precisas de estar num canal de voz primeiro!');
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if(!message.guild.voiceConnection) message.member.voice.channel.join().then(function(connection){
                play(connection, message);

            })

        break;

        case 'skip':
            var server = servers[message.guild.id];
            if(server.dispatcher) server.dispatcher.end();
            message.channel.send('⏸Avançando na fila');
        break;

        case 'stop':
            var server = servers[message.guild.id];

                if(message.guild.voice.connection){
                    for(var i = server.queue.length -1; i >= 0; i--){
                        server.queue.splice(i,1);
                    }

                    server.dispatcher.end();
                    message.channel.send('⏸Parando o vídeo');
                    console.log('vídeo parado');
                }

                if(message.guild.connection) message.guild.voice.connection.disconnect();


        break;
       */
        //fim do play antigo
        
        case 'help':
            const help = new Discord.MessageEmbed()
            .setColor('0066CC')
            .setDescription("**⚠️Ajuda**")
            .addFields(
                {name:'🎵Música: \n\n ▶️ **!play** para meteres músicas\n ⏭ **!skip** pra avançar pra próxima\n ⏸ **!stop** para parar.\n', value:'---'},
                {name: '**!info** para mais informações' ,value:'---'},
            );
            message.channel.send(help);
        break;

        case 'birl':
            message.channel.send('💪EITA PORRA!!!!');
        break;

        case 'horas':
            message.channel.send('É hora do show porra!💪💪💪');
        break;

        case 'mute':
                let person = message.guild.member(message.mentions.users.first()|| message.guild.members.cache.get(args[1]));
                if(!person) return message.reply("💩Não foi possível encontrar esse membro!");


                let mainrole = message.guild.roles.cache.find(role => role.name === "🙉Membro");
                let muterole = message.guild.roles.cache.find(role => role.name === "💩Otário");

                if(!muterole) return message.reply("💩Não foi possível encontrar o mute role");

                let time = args[2];

                if(!time){
                    return message.reply("Não especificaste o tempo!");
                } 

                person.roles.remove(mainrole.id);
                person.roles.add(muterole.id);

                message.channel.send(`@${person.user.tag} foi mutado por ${ms(ms(time))}💩`);

                setTimeout(function(){
                    person.roles.add(mainrole.id);
                    person.roles.remove(muterole.id);
                    message.channel.send(`@${person.user.tag} foi desmutado 💩`);

                }, ms(time));
                  

        break;

        case 'hack':

               if(args[1] === 'NASA'){

                for(let i =0; i <=100; i +=20){
                    message.channel.send('👨‍💻Hackeando a NASA... '+i+'%');
                }
                
                message.channel.send('✅ NASA hackeada com sucesso!');
               }

               else if(args[1] === 'FBI'){

                for(let i =0; i <=100; i +=20){
                    message.channel.send('👨‍💻Hackeando o FBI... '+i+'%');
                }
                
                message.channel.send('✅ FBI hackeado com sucesso!');
               }

               else if(args[1] === 'CIA'){
                
                for(let i =0; i <=100; i +=20){
                    message.channel.send('👨‍💻Hackeando a CIA... '+i+'%');
                }
                message.channel.send('✅ CIA hackeada com sucesso!');
               }

               else if(args[1]=== 'NSA'){
                
                for(let i =0; i <=100; i +=20){
                    message.channel.send('👨‍💻Hackeando a NSA... '+i+'%');
                }
                message.channel.send('✅ NSA hackeada com sucesso!');
               }

               else if(args[1]=== 'Facebook'){
                
                for(let i =0; i <=100; i +=20){
                    message.channel.send('👨‍💻Hackeando o Facebook... '+i+'%');
                }
                message.channel.send('✅ Facebook hackeado com sucesso!');
               }

               else if(args[1] === 'Ferrão'){

                    for(let i =0; i <=100; i+=20){
                        message.channel.send('👨‍💻Hackeando o PC do Ferrão '+i+'%');
                    }
                    message.channel.send('✅ PC do Ferrão hackeado com sucesso!')
               }

               else{
                   const hacks = new Discord.MessageEmbed()
                   .setColor('FF000')
                   .setDescription('👨‍💻**Hacking**👨‍💻')
                   .addFields({name:'**Alvos disponíveis**: \n 1)NASA\n 2)FBI\n 3)CIA\n 4)NSA\n 5)Facebook\n 6)Ferrão', value:'---'});
                   message.channel.send(hacks);
               }
        break;

        case 'votar':
            const embed =  new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("iniciar votos")
            .setDescription('!votar para iniciar um voto');

            if(!args[1]){
                return message.channel.send(embed);
            }

            let msgArgs = args.slice(1).join(" ");
            message.channel.send("📋 **" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
                message.delete();
            });
        break;

    }

});

client.on('message', message =>{

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    if(command==='play'){
        client.commands.get('play').execute(message, args);
        message.channel.send('oi');
    }
    if(command==='leave'){
        client.commands.get('leave').execute(message, args);
    }
});
 bot.login(token);