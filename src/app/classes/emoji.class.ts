import { IEmoji } from '../interfaces/iemoji.interface';
import { ICard } from '../interfaces/icard.interface';

export class Emoji implements IEmoji {
    unicode: string;

    /* Summary:
    *   Gets a random emoji unicode that does not exist in the ICard array.
    *  Returns:
    *   Unicode as string.
    */
    getNewUnused(existingCards: ICard[]): string {
        const existingEmoji: string[] = [];
        existingCards.forEach(card => {
            const emojis = card.emojis;
            emojis.forEach(emoji => {
                if (existingEmoji.indexOf(emoji.unicode) <= 0) {
                    existingEmoji.push(emoji.unicode);
                }
            });
        });

        while (true) {
            const emoji = this.getEmojiUnicode();
            if (existingEmoji.indexOf(emoji) <= 0) {
                this.unicode = emoji;
                return emoji;
            }
        }
    }

    // How tf am I going to do this without just writing out a list of them all?
    private getEmojiUnicode(): string {
        //poop lol
        return 'U+1F4A9';
    }
}
