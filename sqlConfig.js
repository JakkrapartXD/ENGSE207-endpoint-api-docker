var dbconfig = {
    development: {
        server: '192.168.212.143',
        database:'team4_web_labDB',
        user:'sa',
        password:'PARNparn_212224236',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '192.168.212.143'  // SQL Server instance name
        }
    },
    production: {
        server: '10.21.43.203',
        database:'team4_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encrypt: true, // Use this if you're on Windows Azure
            setTimeout: 30000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  '10.21.43.203'  // SQL Server instance name
        }
    },

 };


module.exports = dbconfig;
