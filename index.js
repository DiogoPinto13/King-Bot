const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const ms = require('ms');

const ytdl = require("ytdl-core");

const token = 'NzQzMDk1MDQ1MjEyNjAyNDE4.XzPrMA.ZKzZ9GESFA4bwmqxZ5s5Kx_Y3Lk';

client.commands = new Discord.Collection;
client.events = new Discord.Collection;
const PREFIX = '!';     //prefixo 
var versão = '6.0';
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

    channel.send(`Bem-vindo ao servidor 👑**King**, ${member}!`);
});


bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){                 //comandos do bot

        case 'advinha':

            if(!args[1]){
                const advinhainfo = new Discord.MessageEmbed()
                .setDescription('**ADVINHA NÚMERO**')
                .setColor('FF0000')
                .addFields(
                    {name: '🎮Jogo da advinha🎮', value: 'Escolhe um número entre 1 e 10 e vê se está correto!'},
                    {name: 'Tens apenas 3 tentativas 😛', value: 'Boa sorte eheh'},
                    );
                message.channel.send(advinhainfo);
            }
            else{
                let numerointroduzido = args[1];
                let i = 3;
                //const filter = (m) => m.author.id === message.author.id;
                message.channel.send('🎮Escreva um número entre 1 e 10 usando /advinha (numero) para ver se está correto 😛');

                if(numerointroduzido > 0 && numerointroduzido < 11){
                    let ntentativas=3;
                    let numerocerto= Math.floor (Math.random()*10)+1;
                    inicio: for(; i > 0; i--){
                            /*message.channel
                            .awaitMessages(filter, { max: 3, time: 5000, errors: ["time"]})
                            .then((collected) => {
                                console.log(collected.size);
                                const msg = collected.first();
                                console.log(msg.content);
                                if(msg.content ==numerocerto){
                                    message.channel.send('✅Acertaste!!!!!');
                                    message.channel.send('🏆 Ganhas-te o jogo que grande campeão crl! 🏆');
                                
                                }
                                else if(msg.content>numerocerto){
                                        message.channel.send('❌Demasiado grande...');
                                        message.channel.send('Tenta de novo bro');
                                        ntentativas--;
                                        message.channel.send('Tentativas restantes: '+ntentativas);
                                }
                                    else if(msg.content<numerocerto){
                                        message.channel.send('❌Demasiado pequeno...');
                                        message.channel.send('Tenta de novo bro');
                                        numerointroduzido = args[1];
                                        ntentativas--;
                                        message.channel.send('Tentativas restantes: '+ntentativas);
                                }
                            })
                            .catch((err) => console.log(err));*/
                            if(numerointroduzido == numerocerto){
                                message.channel.send('✅Acertaste!!!!!');
                                message.channel.send('🏆 Ganhas-te o jogo que grande campeão crl! 🏆');
                                break;
                            }
                            else if(numerointroduzido>numerocerto){
                                message.channel.send('❌Demasiado grande...');
                                message.channel.send('Tenta de novo bro');
                                ntentativas--;
                                message.channel.send('Tentativas restantes: '+ntentativas);
                                continue inicio;
                            }
                            else if(numerointroduzido<numerocerto){
                                message.channel.send('❌Demasiado pequeno...');
                                message.channel.send('Tenta de novo bro');
                                numerointroduzido = args[1];
                                ntentativas--;
                                message.channel.send('Tentativas restantes: '+ntentativas);
                                continue inicio;
                            }
                    }
                    message.channel.send('⛔️Tentativas esgotadas lmao!');
                }

                else{
                    message.channel.send('❌Eu disse entre 1 e 10 burro.');
                }
            
            }
            
        break;

        case 'gatos':
            let ngatos=5;
            let numgatos= Math.floor (Math.random()*(ngatos - 1 + 1))+1;
            message.channel.send('Queres gatinhos fofinhos? aqui tens🐱');
            message.channel.send({files: ["./gatos/"+numgatos+".jpg"]});
        break;

        case 'arménio':
            let narmenio = 3;
            let numarmenio = Math.floor (Math.random()*(narmenio -1 + 1))+1;
            message.channel.send('Aqui vai fotos do grande campeão! 🏆 ');
            message.channel.send({files : ["./armenio/"+numarmenio+".png"]});
        break;

        case 'porno':
            let nimg=3;
            let numporno= Math.floor (Math.random()*(nimg - 1 + 1))+1;
            message.channel.send({files: ["./fotos/img"+numporno+".png"]});
        break;

        case 'spam':

            let timer = args[2];
            if(!args[2]){
                timer = 10;
            }

            if(timer > 15){
                message.channel.send("⚠️O máximo de spam é 15 queres matar com spam ou que?");
                timer = 15;
            }
                var spam =setInterval(function(){
                    
                    message.channel.send('☠️Gostas de spam? ' + args[1]);
                    oi++;
                    if(oi==timer){
                        clearInterval(spam);
                        oi = 0;
                        //message.channel.send('ola');
                    }
                }, 1000);

                

        break;

        case 'ping':
            message.channel.send('🏓pong!');
        break;

        case 'olá':
            message.channel.send('👋olá tudo bem?');
        break;

        case 'info':
            if(args[1] === 'versão'){
                message.channel.send('🤖versão do bot: '+ versão );
            } 

            else if(args[1]=== 'autor'){
                message.channel.send('este bot foi criado por 👑**Kingcraft12**👑');
            }

            else{
                const info = new Discord.MessageEmbed()
                .setDescription('**❗️Informações**')
                .setColor('FF0000')
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
        
        case 'jonas':
            message.channel.send('👋Olá campeão Jonas!!!!');
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

               else if(args[1] === 'Bigodes'){

                    setTimeout(function(){

                        message.channel.send('👨‍💻 Hackeando o PC da Bigodes... 0%');
                        message.channel.send('👨‍💻 Roubando documentos confidenciais... 20%');
                        message.channel.send('👨‍💻 Alterando as notas... 40%');
                        message.channel.send('👨‍💻 Hackeando o vibrador da Bigodes... 60%');
                        message.channel.send('👨‍💻 Colocando o vibrador no modo de perfuração total... 80%');
                        message.channel.send('👨‍💻 Deletando logs... 100%');
                        message.channel.send('✅ PC da Bigodes e vibrador hackeados com sucesso! GG');

                    }, 1000);
               }

               else{
                   const hacks = new Discord.MessageEmbed()
                   .setColor('FF000')
                   .setDescription('👨‍💻**Hacking**👨‍💻')
                   .addFields({name:'**Alvos disponíveis**: \n 1) NASA\n 2) FBI\n 3) CIA \n 4) NSA\n 5) Facebook\n 6) Ferrão\n 7) Bigodes', value: '\n Escolha um alvo com *!hack (alvo)*'});
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

        case 'sexo':
            const sexu = new Discord.MessageEmbed()
            .setColor('FF33E0')
            .setDescription('**💑 Sexo**')
            .setImage('https://ichef.bbci.co.uk/news/640/cpsprodpb/145CD/production/_111150438_gettyimages-187321937.jpg')
            .addFields({name:'🍑 *oh sim dá me mais!!!!!!!*', value:'69'});
            message.channel.send(sexu);

        break;

        case 'kick':
            let mentionMember = message.mentions.members.first();

            const kick =  new Discord.MessageEmbed()
            .setColor('FF0000')
            .setTitle("⚰️**Kick**⚰️")
            .setDescription('!kick (alvo) para kickares alguém 🤭');

        
            if(message.member.roles.cache.some(role => role.name === '👑Admin')){
                

                if(!args[1]){
                    return message.channel.send(kick);
                }
                if(!mentionMember){
                    message.channel.send("😐 Tens que meter um alvo neh...");
                }
                if(mentionMember){
                    
                    mentionMember.kick()
                        .then(() => console.log(`Kicked `))
                        .catch(console.error);
                    
                    
                }
                message.channel.send("🐷 " +args[1] + " Foi com os porcos!");
        }

        else{
            message.channel.send('Não tens permissão para kickar essa pessoa!!!');
            return;
        }
        break;

        case 'rules':
            const regras =  new Discord.MessageEmbed()
            .setColor('1ABC9C')
            .setTitle("⚠️Rules of the server⚠️")
            .setThumbnail('https://media.istockphoto.com/photos/frenchman-with-french-baguettes-picture-id108224580?k=20&m=108224580&s=612x612&w=0&h=xVpZq1ArRq_UJJdISrWYMn45lBORs2-3afoY7x5u2KI=')
            .setDescription('plz read this')
            .addField('✅ Respect everyone in the server.', '.....')
            .addField('✅ Have fun in the game :D.', '.....');

            message.channel.send(regras);
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
