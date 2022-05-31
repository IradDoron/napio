// import books

import the_middle_octave from './books/the_middle_octave';
import play_in_two_octaves from './books/play_in_two_octaves';
import chromatic_notes from './books/chromatic_notes';

const first_steps = {
  name: 'צעדים ראשונים',
  urlName: 'first_steps',
  description: 'סדרת הספרים לפסנתרנים בתחילת הדרך',
  books: {
    the_middle_octave,
    play_in_two_octaves,
    chromatic_notes,
  },
};

export default first_steps;
