class dt{
    id:string;
    title:string;
    image:string;
    traveller:string;
    date:string;
    des:string;
    days:string;
    cost:string;
    location:string
    
    constructor(dtId:string,dttitle:string,dtimage:string,dttraveller:string,dtdate:string,dtdes:string,dtdays:string,dtcost:string,dtlocation:string){
        this.id=dtId;
        this.title=dttitle;
        this.image=dtimage;
        this.traveller=dttraveller;
        this.date=dtdate;
        this.des=dtdes;
        this.days=dtdays;
        this.cost=dtcost;
        this.location=dtlocation

    }
}
export default dt;