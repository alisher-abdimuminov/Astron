module.exports = {
    apps: [
        {
            name: 'landing',
            port: '3001',
            exec_mode: 'fork',
            script: './.output/server/index.mjs'
        }
    ]
}