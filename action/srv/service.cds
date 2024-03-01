using sai as s1 from '../db/schema';

service MyService {

  
    entity peol as projection on s1.peol;

}