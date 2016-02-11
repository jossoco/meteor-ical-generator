Package.describe({
    name: 'jossoco:ical-generator',
    summary: 'Meteor package wrapping sebbo2002/ical-generator 0.2.7',
    version: '1.0.1',
    git: 'https://github.com/jossoco/meteor-ical-generator.git'
});

Npm.depends({
    'ical-generator': '0.2.7'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.export('ical', ['server']);
    api.addFiles('ical-generator.js', ['server']);
});
