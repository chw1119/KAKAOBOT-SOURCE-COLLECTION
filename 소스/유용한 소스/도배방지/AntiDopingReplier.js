const AntiDopingReplier = (function(){

    function __cls(content,delay){
        this.content = content || "NO CONTENT";
        this.delay   = delay;
    }

    __cls.prototype.getContent = function(){
        return this.content;
    }

    __cls.prototype.setContent = function(content){
        this.content = content;
    }

    __cls.prototype.setDelay = function(delay){
        this.delay = delay;
    }

    __cls.prototype.makeDelay = function(){
        java.lang.Thread.sleep(this.delay);
    }

    __cls.createMessage = function(content,delay){
        return new __cls(content,delay);
    }


    function _cls(replier,maxCount){
        
        this.replier = replier || null;
        
        this.maxCount  = maxCount || 4;
        
        this.queue                = [];

    }

    _cls.prototype.getMaxCount = function(){
        return this.maxCount;
    }

    _cls.prototype.getReplier = function(){
        return this.replier;
    }

    _cls.prototype.getQueue   = function(){
        return this.queue;
    }

    _cls.prototype.send = function(content,delay){
        this.queue.push(__cls.createMessage(content,delay));
    }

    _cls.prototype.process = function(){
        if(this.queue.length <= this.maxCount){
            for(let a = 0,len = this.queue.length; a < len; a++){

                this.queue[a].makeDelay();

                this.replier.reply(this.queue[a].getContent());

            }
        }
        else{

            const arr = [];

            
            for(let a = 0,len = this.queue.length; a < len; a++){

                arr[a] = this.queue[a].getContent();

            }


            this.replier.reply("전체보기를 눌러주세요\n" + "\u200b".repeat(500) +arr.join("\n"));
        }
    }

    return _cls();
})()

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if(last + 2000 < Date.now() ){
        last = Date.now();
        const Replier = new AntiDopingReplier(replier,3);
        
        if(msg == ".샌즈"){

            for(let a = 0; a < 10; a++){
                Replier.send("샌즈아시는구나?" + a,0);
            }

            Replier.process();  
        }
       
    }
}