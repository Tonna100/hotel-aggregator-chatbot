module.exports = {
    apps: [{
        name: "node-red",
        script: "node-red",
        args: "-u /home/ec2-user/node-website",
	env:{
		    "merchantBaseUrl":"https://8ahxwzrxj5.execute-api.eu-central-1.amazonaws.com/dev/",
    "customerBaseUrl":"https://mi637b3g22.execute-api.eu-central-1.amazonaws.com/dev/",
    "messageBaseUrl":"https://pmwl98qigc.execute-api.eu-central-1.amazonaws.com/dev/",
    "billingUrl":"https://cqbs0kiex3.execute-api.eu-central-1.amazonaws.com/dev/",
    "nodeUrl":"http://platforma-core-test.chatbotsstudio.com" 
	}
    }]
}