using sai as s1 from '../db/schema';

service MyService {
    @odata.draft.enabled
entity college as projection on s1.college;
entity student as  projection on s1.student;
    

}