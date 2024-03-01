using sai as s1 from '../db/schema';
service MyService {
  

 @Common.SideEffects : 
            {
                SourceProperties :
                [
                    'firstnumber' , 'secondnumber'
                ],
                TargetProperties : [
                     'result'
                ],
            }
              @odata.draft.enabled
entity add as projection on s1.add;
    //         @odata.draft.enabled



}
