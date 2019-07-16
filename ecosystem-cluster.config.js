module.exports = {
    apps: [{
        name: "node-red",
        script: "node-red",
        args: "-u /home/ec2-user/node-website",
        instances: 4,
        exec_mode: "cluster",
	env:{
		    "merchantBaseUrl":"https://8ahxwzrxj5.execute-api.eu-central-1.amazonaws.com/prod/",
    "customerBaseUrl":"https://mi637b3g22.execute-api.eu-central-1.amazonaws.com/prod/",
    "messageBaseUrl":"https://pmwl98qigc.execute-api.eu-central-1.amazonaws.com/prod/",
    "billingUrl":"https://cqbs0kiex3.execute-api.eu-central-1.amazonaws.com/prod/",
    "nodeUrl":"http://platforma-core-prod.chatbotsstudio.com" 
	}
    }]
}