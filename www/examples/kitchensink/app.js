var content;

function getContent() {
    console.log('OS: ' + Ext.os.name);
    var label = {
        xtype: 'label',
        html: 'Dies ist die Look & Feel Vorschau.'
    };

    var button = Ext.create('Ext.Button', {
        ui: 'normal',
        text: 'Grußdialog',
        margin: ' 45',

        handler: function() {
            console.log('Q a');
            Ext.Msg.prompt('Name', 'Please enter your name:', showResultText);
            console.log('Q b');
        }
    });

    function showResultText(btn, text){
        //Ext.Msg.alert('Button Click', 'You clicked the ' + btn + ' button and entered the text "' + text + '".');
        console.log('Q1');
        var newLabel = {
            xtype: 'label',
            html: '<span style="color: red;">Es wird ' + text + ' gegrüßt!</span>'
        };
        console.log('Q2');
        this.add(newLabel);
        console.log('Q3');
    };

    if(Ext.os.name == 'Android') {
        var ch1 = {
            xtype: 'checkboxfield',
            name : 'salami',
            label: 'Männlich'
        };

        var ch2 = {
            xtype: 'checkboxfield',
            name : 'tomato',
            label: 'Verheiratet',
            checked: true
        };
    } else {
        var ch1 = {
            xtype: 'togglefield',
            name: 'toggle',
            labelWidth: '80%',
            label: 'Männlich'
        };

        var ch2 = {
            xtype: 'togglefield',
            name: 'toggle',
            labelWidth: '80%',
            label: 'Verheiratet'
        };
    }

    var input = {
        xtype: 'textfield',
        name: 'firstName',
        placeHolder: 'Hinweistext'
    };

    var select = {
        xtype: 'selectfield',
        name : 'options',
        options: [
            {text: 'Weiß', value: 1},
            {text: 'Blau', value: 2},
            {text: 'Rot', value: 3},
            {text: 'Gelb', value: 4},
            {text: 'Grün', value: 5},
            {text: 'Lila', value: 6},
            {text: 'Schwarz', value: 7}
        ]
    };

    var r1 = {
        name : 'field',
        value: '1',
        label: 'Apfel'
    };

    var r2 =  {
        name : 'field',
        value: '2',
        label: 'Banane',
        checked: true
    };

    var r3 =  {
        name : 'field',
        value: '3',
        label: 'Orange'
    };

    var rgroup = {
        xtype: 'fieldset',
        title: 'Wählen Sie ihre Lieblingsfrucht',
        defaults: { xtype: 'radiofield' },
        items: [
            r1, r2, r3
        ]
    };

    var spinnerAndButton = Ext.create('Ext.Container', {
        layout: {
            type: 'hbox',
        },

        items: [select, button]
    });

    return Ext.create('Ext.Container', {
        style: 'font-size: 16px',

        items: [
            label,
            spinnerAndButton,
            ch1, ch2,
            rgroup,
            input
        ]
    });
}

Ext.application({
    launch: function () {
        var pos = 'bottom';
        var iconHome = 'home';
        var iconAction = 'action';
        if(Ext.os.name == 'Android') {
            pos = 'top';
            iconHome = '';
            iconAction = '';
        };

        Ext.create('Ext.TabPanel', {
            style: 'font-size: 20px',
            fullscreen: true,
            tabBarPosition: pos,
            items: [
                // first tab
                {
                    title: 'Welcome',
                    iconCls: iconHome,
                    scrollable: true,

                    layout: {
                        type: 'vbox'
                    },

                    items: getContent()
                },
                // second tab
                {
                    title: 'Get Started',
                    iconCls: iconAction,

                    html: 'Der zweite Tab ohne Inhalt'
                }
            ]
        }); // create()
    } // launch
}); // application()
