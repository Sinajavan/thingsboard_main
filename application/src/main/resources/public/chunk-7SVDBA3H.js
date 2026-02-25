import{i as t}from"./chunk-PFYUHMDD.js";t();var e=(function(i){return i.TOTP="TOTP",i.SMS="SMS",i.EMAIL="EMAIL",i.BACKUP_CODE="BACKUP_CODE",i})(e||{}),n=new Map([[e.TOTP,{name:"security.2fa.provider.totp",description:"security.2fa.provider.totp-description",activatedHint:"security.2fa.provider.totp-hint"}],[e.SMS,{name:"security.2fa.provider.sms",description:"security.2fa.provider.sms-description",activatedHint:"security.2fa.provider.sms-hint"}],[e.EMAIL,{name:"security.2fa.provider.email",description:"security.2fa.provider.email-description",activatedHint:"security.2fa.provider.email-hint"}],[e.BACKUP_CODE,{name:"security.2fa.provider.backup_code",description:"security.2fa.provider.backup-code-description",activatedHint:"security.2fa.provider.backup-code-hint"}]]),r=new Map([[e.TOTP,{name:"security.2fa.provider.totp",description:"login.totp-auth-description",placeholder:"login.totp-auth-placeholder",icon:"mdi:cellphone-key"}],[e.SMS,{name:"security.2fa.provider.sms",description:"login.sms-auth-description",placeholder:"login.sms-auth-placeholder",icon:"mdi:message-reply-text-outline"}],[e.EMAIL,{name:"security.2fa.provider.email",description:"login.email-auth-description",placeholder:"login.email-auth-placeholder",icon:"mdi:email-outline"}],[e.BACKUP_CODE,{name:"security.2fa.provider.backup_code",description:"login.backup-code-auth-description",placeholder:"login.backup-code-auth-placeholder",icon:"mdi:lock-outline"}]]),c=new Map([[e.TOTP,{name:"login.enable-authenticator-app",description:"login.enable-authenticator-app-description"}],[e.SMS,{name:"login.enable-authenticator-sms",description:"login.enable-authenticator-sms-description"}],[e.EMAIL,{name:"login.enable-authenticator-email",description:"login.enable-authenticator-email-description"}],[e.BACKUP_CODE,{name:"security.2fa.provider.backup_code",description:"login.backup-code-auth-description"}]]),s=new Map([[e.TOTP,{name:"login.authenticator-app-success",description:"login.authenticator-app-success-description"}],[e.SMS,{name:"login.authenticator-sms-success",description:"login.authenticator-sms-success-description"}],[e.EMAIL,{name:"login.authenticator-email-success",description:"login.authenticator-email-success-description"}],[e.BACKUP_CODE,{name:"login.authenticator-backup-code-success",description:"login.authenticator-backup-code-success-description"}]]);var u=`<html lang="en">\r
<head>\r
    <meta name="viewport" content="width=device-width" />\r
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\r
    <title>Backup code</title>\r
\r
    <style>\r
        .code-block {\r
            display: flex;\r
            flex-wrap: wrap;\r
            margin-bottom: 16px;\r
        }\r
        .code-row {\r
            margin: 0 6px 8px;\r
            display: flex;\r
            min-width: 130px;\r
        }\r
        .code {\r
            font: 400 16px / 20px Roboto Mono, "Helvetica Neue", monospace;\r
            margin-left: 6px;\r
        }\r
        input[type="checkbox"] {\r
            -webkit-appearance: none;\r
            appearance: none;\r
            background-color: #fff;\r
            margin: 0;\r
            font: inherit;\r
            color: currentColor;\r
            width: 1em;\r
            height: 1em;\r
            border: 0.1em solid currentColor;\r
            border-radius: 0.15em;\r
            transform: translateY(0em);\r
        }\r
    </style>\r
</head>\r
\r
<body style="margin: 0">\r
    <div style="margin: 8px; max-width: 286px">\r
        <div style="border: #d0d7de solid 1px; border-radius:4px">\r
            <h3 style="padding: 16px 24px; margin: 0; font: 500 20px / 24px Roboto, 'Helvetica Neue', sans-serif; text-align: center">\r
                Backup codes\r
            </h3>\r
            <div class="code-block">\r
                \${codesBlock}\r
            </div>\r
        </div>\r
    </div>\r
</body>\r
</html>\r
`;export{e as a,n as b,r as c,c as d,s as e,u as f};
