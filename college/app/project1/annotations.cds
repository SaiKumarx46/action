using MyService as service from '../../srv/service';

annotate service.student with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'sid',
            Value : sid,
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Label : 'sname',
            Value : sname,
        },
    ]
);
annotate service.student with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'sid',
                Value : sid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'sname',
                Value : sname,
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
    ]
);
