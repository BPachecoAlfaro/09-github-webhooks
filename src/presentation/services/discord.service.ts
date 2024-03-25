import { envs } from "../../config";


export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor(){}

    async notify ( message: string ) {

        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://www.snsmarketing.es/blog/wp-content/uploads/2016/02/gifanimado.gif'}
                }
            ]
        }

        const resp = await fetch( this.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify( body ),
        } );

        if ( !resp.ok ) {
            console.log('Error sending message to discord');
            return false;
        }

        return true;

    }


}