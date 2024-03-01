namespace sai;

entity college{
    key cid : Int16;
    cname : String(20);
    coltostu : Composition of many student on coltostu.cid = cid;
}

entity student{
    key sid : Int16;
    cid : Int16;
    sname : String(20);
    stutocol : Association to one college on stutocol.cid = cid;
}

