var commands= require('./commands.js');
// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remueve la nueva línea
    if (cmd == 'pwd') {
        commands.pwd();
    }
    if (cmd == 'date') {
        commands.date();
    }
    if (cmd == 'ls') {
        commands.ls(data);
    }
    if((cmd.split(' ')[0])=='echo'){
        commands.echo(data);
    }
    if((cmd.split(' ')[0])=='cat'){
        commands.cat(data);
    }
    if((cmd.split(' ')[0])=='head'){
        commands.head(data);
    }
    if((cmd.split(' ')[0])=='tail'){
        commands.tail(data);
    }
    if((cmd.split(' ')[0])=='wc'){
        commands.wc(data);
    }
    if((cmd.split(' ')[0])=='sort'){
        commands.sort(data);
    }
    if((cmd.split(' ')[0])=='uniq'){
        commands.uniq(data);
    }
    if((cmd.split(' ')[0])=='curl'){
        commands.uniq(data);
    }
    if((cmd.split(' ')[0])=='find'){
        commands.find('','',data);
    }    
    process.stdout.write('\nprompt > ');
});

