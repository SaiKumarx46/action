using MyService as service from '../../srv/service';

annotate service.add with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'firstnumber',
            Value : firstnumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'secondnumber',
            Value : secondnumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'result',
            Value : result,
        },
        {
            $Type : 'UI.DataField',
            Value : CREATEDBYUSER,
            Label : 'CREATEDBYUSER',
        },
        {
            $Type : 'UI.DataField',
            Value : createdAt,
        },
        {
            $Type : 'UI.DataField',
            Value : createdBy,
        },
        {
            $Type : 'UI.DataField',
            Value : modifiedAt,
        },
        {
            $Type : 'UI.DataField',
            Value : modifiedBy,
        },
    ]
);
annotate service.add with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'firstnumber',
                Value : firstnumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'secondnumber',
                Value : secondnumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'result',
                Value : result,
            },
            {
                $Type : 'UI.DataField',
                Value : CREATEDBYUSER,
                Label : 'CREATEDBYUSER',
            },
            {
                $Type : 'UI.DataField',
                Value : createdBy,
            },
            {
                $Type : 'UI.DataField',
                Value : createdAt,
            },
            {
                $Type : 'UI.DataField',
                Value : modifiedAt,
            },
            {
                $Type : 'UI.DataField',
                Value : modifiedBy,
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
