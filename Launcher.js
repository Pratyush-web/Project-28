class Launcher
{
    constructor(body1, point1)
    {
        var options = {
        stiffness: 0.05, 
        bodyA:body1,
        pointB:point1, 
        length:100
        };
        this.pointB = point1;
        this.launch = Constraint.create(options);

        World.add(world, this.launch);
    }

    fly()
    {
        this.launch.bodyA = null;
    }

    display()
    {
        if(this.launch.bodyA)
        {
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
}