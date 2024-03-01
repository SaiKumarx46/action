using sai as s1 from '../db/schema'; //  s1 = alias name for namespace 

service MyService {
    @odata.draft.enabled //enables create button in webapp 
entity student as projection on s1.student; //  s1 = alias name for namespace and student = entityname 
entity teacher as projection on s1.teacher;
    
}