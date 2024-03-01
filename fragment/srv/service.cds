using {db} from '../db/schema';
service MyService {
    entity parent as projection on db.parent;
    entity Files as projection on db.Files;

    

}
