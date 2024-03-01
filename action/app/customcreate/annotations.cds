using MyService as service from '../../srv/service';

annotate service.peol with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'peolid',
            Value : peolid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'empname',
            Value : empname,
        },
        {
            $Type : 'UI.DataField',
            Value : date,
            Label : 'date',
        },
    ]
);
annotate service.peol with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'peolid',
                Value : peolid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'empname',
                Value : empname,
            },
            {
                $Type : 'UI.DataField',
                Value : date,
                Label : 'date',
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
