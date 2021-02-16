exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: '#304FFE',
            author: { name: 'Help pannel' },
            footer: { text: '❃M✯U✯S✯I✯C❃' },
            fields: [
                { name: 'Bot', value: '`ping`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`' },
            ],
            timestamp: new Date(),
            description: `To use filters, ${client.config.prefix}filter (the filter). Example : ${client.config.prefix}filter 8D.`,
        },
    });

};
