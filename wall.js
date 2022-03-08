class Wall{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        //criando um corpo retangular
        this.w = w;
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position
        push();
        rectMode(CENTER);
        fill('gray')
        //exibindo o solo na tela
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}