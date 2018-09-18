var fs=require('fs');
var request = require('request');

function pwd(){
    var output='';
    output+=process.argv[1];
    done(output);
};

function date(){
    var output='';
    output+=Date();
    done(output);
};

function ls(){
    var output='';
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          output+=file.toString() + "\n";
        })
        done(output);
    });
    
};
function echo(par){
    var output='';
    var arr=par.toString().split(' ');
    arr.shift();
    var str= arr.join(' ');
    output+=str;
    done(output);
};

function cat(data){
    var output='';
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        output+=res;
        done(output);
    })
};

function head(data){
    var output='';
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        var arreglo1=res.split('\n');
        var arreglo2=[];
        for(var i=0;i<5;i++){
            arreglo2.push(arreglo1[i])
        };
        var str=arreglo2.join('\n');
        output+=str;
        done(output);
    })
};

function tail(data){
    var output='';
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        var arreglo1=res.split('\n');
        var arreglo2=[];
        for(var i=arreglo1.length-6;i<arreglo1.length;i++){
            arreglo2.push(arreglo1[i])
        };
        var str=arreglo2.join('\n');
        output+=str;
        done(output);
    })
};
function sort(data){
    var output='';
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        var arreglo1=res.split('\n');
        var arreglo2=arreglo1.sort();
        var str=arreglo2.join('\n');
        output+= str;
        done(output);
    })
};

function wc(data){
    var output='';
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        var arreglo1=res.split('\n');
        var mostrar=(arreglo1.length-1).toString();
       output+=mostrar;
       done(output);
    })
};

function uniq(data){
    var output='';
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    fs.readFile('./'+arr2,'utf8', function(err,res){
        if(err) throw err;
        var arreglo1=res.split('\n');
        var arreglo2=arreglo1.sort();
        var arreglo3=[];
        for(var i=0;i<arreglo2.length;i++){
            if(arreglo2[i]!==arreglo2[i-1]){
                arreglo3.push(arreglo2[i])
            }
        }
        var str=arreglo3.join('\n');
       output+=str;
       done(output);
    })
};

function curl(data){
    var output='';
    var arch= data.toString().split(' ')[1];
    var arr2=arch.split('\n')[0];
    request(arr2, function (error, response, body) {
        if(error) throw error;
        process.stdout.write(body);
   });
};

function done(output){
    process.stdout.write(output);
};

function ls2(data){
    console.log('data es: ' +data)
    fs.readdir(data, function(err, files) {
        var output='';
        if (err) throw err;
        files.forEach(function(file) {
          output+=file.toString() + "\n";
        })
        console.log(output);
        return output;
    });
};

function find(dirVieja, actual,data){
    if(data) var data1=data.toString().split(' ')[1];
    var dir=dirVieja+'/'+actual||'.';
    console.log(data1);
    var dire=ls2(dir);
    var arreglo=dire.split('\n');
    for(var n=0;n<arreglo.length;n++){
        process.stdout.write(arreglo[n]);
    };
    var directorios=[];
    for (var i=0;i<arreglo.length;i++){
        if(!arreglo[i].includes('.')){
            directorios.push[pwd()+arreglo[i]];
        };
    };
    if(directorios.length>0){
        for(var j=0;j<directorios.length;j++){
            find(dir,directorios[j])
        }
    };
};

module.exports={
    pwd:pwd,
    date:date,
    ls:ls,
    echo:echo,
    cat:cat,
    head:head,
    tail:tail,
    wc:wc,
    sort:sort,
    uniq:uniq,
    curl:curl,
    done:done,
    find:find,
}