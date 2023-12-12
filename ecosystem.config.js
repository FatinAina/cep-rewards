module.exports = {
    apps: [{
        name: "rewards-module-dev",
        script: "npm",
        args: "start",
        watcher: "true",
        error: './logs/error.log',
        output: './logs/output.log',
        env: {
            NODE_ENV: "development",
        }
    }, {
        name: "rewards-module-sit",
        script: "dist/main.js",
        watcher: "true",
        env: {
            NODE_ENV: "sit"
        }
    }, {
        name: "rewards-module-uat",
        script: "dist/main.js",
        watcher: "true",
        instances: "max",
        exec_mode: "cluster",
        env: {
            NODE_ENV: "uat"
        }
    }, {
        name: "rewards-module-prod",
        script: "dist/main.js",
        watcher: "true",
        instances: "max",
        exec_mode: "cluster",
        env: {
            NODE_ENV: "prod"
        },
    }, {
        name: "rewards-module-uat-cron",
        script: "dist/main.js",
        instances: "1",
        env: {
            NODE_ENV: "uat"
        }
    }]
}