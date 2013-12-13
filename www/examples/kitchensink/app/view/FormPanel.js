

Ext.define('Kitchensink.view.FormPanel', {
    extend: 'Ext.tab.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],

    id: 'basicform',

    config: {
        xtype: 'tabbar',
        tabBar: {
            layout: {
                pack: 'center',
                align: 'center'
            },
            docked: 'bottom'
        },

        items: [
            // first tab
             {
                title: 'WWelcomee',
//                iconCls: 'home',
                fontSize: '20px',

                styleHtmlContent: true,
                scrollable: true,

                layout: {
                    type: 'vbox'
                },

                items: getContent()
            },
            // second tab
            {
                title: 'Get Started',
//                iconCls: 'action',

                html: 'Der zweite Tab ohne Inhalt'
            }
        ]
    }
});
