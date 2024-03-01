using MyService as service from '../../srv/service';

annotate service.college with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'cid',
            Value : cid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'cname',
            Value : cname,
        },
    ]
);
annotate service.college with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'cid',
                Value : cid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'cname',
                Value : cname,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'STUDENT',
            ID : 'STUDENT',
            Target : 'coltostu/@UI.LineItem#STUDENT',
        },
    ]
);
annotate service.student with @(
    UI.LineItem #STUDENT : [
        {
            $Type : 'UI.DataField',
            Value : cid,
            Label : 'cid',
        },{
            $Type : 'UI.DataField',
            Value : sid,
            Label : 'sid',
        },{
            $Type : 'UI.DataField',
            Value : sname,
            Label : 'sname',
        },]
);
