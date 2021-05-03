import { Inject, Injectable } from '@angular/core';
import { Emoji } from '../../classes/emoji.class';
import { ICard } from '../../interfaces/icard.interface';

@Injectable({
  providedIn: 'root'
})
export class SetGeneratorService {

  // How many cards we need for the selected
  // Aka Modulus
  cardCount: number;

  cds: number[] = [];

  public cards: ICard[] = [];

  // emojis per card is the size of the cyclic difference set (CDS)
  constructor(@Inject(Number) emojiPerCard: number) {
    // Look we'll be able to have nice things when I can figure out how to do
    // calculateCDSPoints. For now fuck you
    if (emojiPerCard !== 8) {
      emojiPerCard = 8;
    }

    this.calculateCDSModulus(emojiPerCard);
    this.calculateCDSPoints(emojiPerCard);
  }

  calculateCDSModulus(size: number) {
    // This is the formula for a perfect CDS, I think?
    this.cardCount = size*size-size+1;
  }

  calculateCDSPoints(size: number) {
    // Here is where we get the positions of the first emojis
    // Once we have these points, we will loop for the total number of cards
    // Increasing these points by one, and placing a new unused emoji
    //for (let i = 0; i < size - 1; i++) {
    //}

    // Currently we are faking this
    //{0, 1, 3, 13, 32 ,36, 43, 52}
    this.cds.push(0);
    this.cds.push(1);
    this.cds.push(3);
    this.cds.push(13);
    this.cds.push(32);
    this.cds.push(36);
    this.cds.push(43);
    this.cds.push(52);
  }

  createCardSet() {
    for (let i = 0; i < this.cardCount - 1; i++) {
      const emoji = new Emoji();

      // This is probably _really_ _really_ dumb
      emoji.getNewUnused(this.cards);

      this.cds.forEach(point => {
        this.cards[point + i].emojis.push(emoji);
      });
    }
  }


}
