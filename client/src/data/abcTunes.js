// posible meta keys:

// title:
// sub-title:
// composers: [] => array of composers
// writers: []
// lyrics : "" => string of the lyrics
// release-date: "" => string of the date of release, format: 18-3-2022
// album: [number, name] the number is serial number of the album, and the name is a string
// no: n => the song number in the album
// original-key: "" => string of the original key
// bpm: [speed, length] => speed is number of the bpm, and the length is the length of bpm unit (4th, 8th ect.)

// meta template:
/*
title: '',
'sub-title': '',
composers: [],
writers: [],
lyrics: '',
'release-date': '',
album: [null, null],
no: null,
'original-key': '',
bpm: [null, null],

title: 'Minuet in F',
'sub-title': 'BWV Anh. 113',
composers: ['Johann Sebastian Bach'],
writers: [],
lyrics: '',
'release-date': '',
'album-name': 'Notebook for Anna Magdalena Bach',
'album-number': null,
no: 1,
'original-key': '',
bpm: [80, '1/4'],

*/

// book template:
/*
[BOOKS_NAMES.NOTEBOOK_FOR_ANNA_MAGDALENA_BACH]: {
tunes: [{ header: {}, body: ``, meta: {} }],
level: [],
description: '',
tags: [],
},
*/

/*


         {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: ``,
            meta: {
              C: 'Irad Doron',
            },
          },

*/

const abcTunes = {
  first_steps: {
    name: 'First Steps',
    urlName: 'first_steps',
    description: 'All the books for begginers.',
    books: {
      the_middle_octave: {
        name: 'The Middle Octave',
        tunes: [
          {
            header: {
              L: '1/2',
              M: '4/4',
              K: 'C',
            },
            body: `"C" CC | DE |"G" DE | "C" DC |
"C" EE | DC | "G" ED | D2 |
"C" CC | DC | "G" EC | "C" C2 |]`,
            meta: {
              C: 'Irad Doron',
              T: 'Little Exercise',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 E2 | C2 E2 |"G" D2 E2 | D4 |
"C" E2 C2 |"G" D2 E2 |"C" C2 E2 |"G" D2 C2 |
"C" C2 E2 | C2 E2 |"G" D2 C2 |"C" C4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E2 D C |"G" E D D2 |"C" E D C E |"G" C D D2 |
"C" E2 D C | E E D C |"G" D C D E | D2 D2 |
"C" E2 D C |"G" E D D2 | D E D C |"C" C4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E E E D | E E E D |"G" C D D E | E2 E D |
"C" C E E D | C E E D |"G" D C D C | D E E2 |
"C" C C C D | C C C D |"G" E D D C |"C" C E C2 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E C D E |"G" D E"Am" C2 |"F" C E D C |"G" D E E2 |
"C" E C D E |"F" D C C2 |"Am" D C C D |"Em" D2 E2 |
"C" E C D E |"F" D C C2 |"G" D C C2 |"C" C4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },

          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 D2 | E2 D2 |"G" E2 D2 |"C" E4 |
            "C" E2 D2 | C2 D2 |"G" D4 |"C" C4 |
            "C" C2 D2 | E2 D2 | "G" E2 E2 | D4 |
            "C" C2 E2 | D2 E2 |"G" C2 D2 |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 D E |"G" E2 D2 |"C" E C D C |"G" D2 E2 |
            "C" E2 D C |"G" D4 |"C" E2 D C |"G" E2 D2 |
            "C" C2 D E |"G" E2 D2 |"C" E D C D |"G" D C D E |
            "C" E2 D C |"G" D4 | E C D C |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C E E D |"F" D C C2 |"C" C E E C |"G" C D D2 |
            "C" E E E D |"F" D2 C2 |"C" E E D C |"G" D4 |
            "F" C E E D |"C" D C C2 |"F" C E E D |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 E2 |"G" G2 F2 |"C" E4 |"G" D4 |
            "C" E2 C2 |"G" D2 F2 |"C" E2 G2 |"G" D4 |
            "C" C2 E2 |"G" G2 F2 |"C" G2 E2 |"G" D4 |
            "C" F2 E2 |"G" C2 D2 | E2 D2 |"C" D2 C2 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" G2 G2 |"G" G2 G2 |"C" E D F E |"G" E2 D2 |
            "C" E2 G2 |"G" D E F2 | F2 E2 | E2 D2 |
            "C" G2 G G |"G" G G G F | E D F E |"C" D2 E F |
            "C" G E F G |"G" G D E F | E D F E |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C C C D | E E E2 |"G" G G G D |"C" F2 E2 |
            "G" G G G D |"C" D2 E2 |"G" E D F E |"C" D2 C2 |
            "C" C C C D | E E E2 |"G" G G G F |"C" G F E D |
            "G" G G G F |"C" E D E C |"G" E D F E |"C" D2 C2 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C E G2 |"G" D E F2 |"C" E D C D |"G" E F E D |
            "C" C E G2 |"G" F E D2 |"C" C D E C |"G" D4 |
            "C" C E G2 |"G" D E F2 |"C" E D C D |"G" E F E D |
            "C" C D E F |"G" G D F2 | E G D C |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 C2 |"F" C2 C2 |"C" E F G E |"G" D4 |
            "C" C E C E |"F" G F C2 |"C" G F E G |"G" E D D2 |
            "F" E D D C |"C" C D E2 | E F G E |"G" E D D2 |
            "F" E D D C |"C" D C C2 |"G" E D D C |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C D E F |"F" G2 F2 |"C" C D E F |"G" D4 |
            "C" C D E F |"F" E F E D |"G" F G F E |"C" D C E2 |
            "C" C D E F |"F" G2 F2 | E F E D |"G" E D F2 |
            E F E D |"F" D E D C |"G" F G F E |"C" D E C2 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"F" C2 F E |"G" D2 E F |"C" G E D C |"G" D4 |
            "F" F2 C D |"G" D2 E F |"C" E2 D C |"G" D2 D2 |
            "F" D2 C D |"G" D2 E D |"F" E2 D C |"G" D2 D2 |
            "F" C2 F E |"G" D2 E F | G E D C |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 G F |"G" G2 E D |"Dm" F2 E D |"G" D4 |
            "C" E F G F |"F" E D C2 |"Dm" D E F E |"G" E2 D2 |
            "C" E F G F |"Dm" E F D C |"F" E F G F |"G" E F D C |
            "C" C2 G F |"G" G2 E D |"F" F2 E D |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"Dm" D E F E | D E F E |"G" D2 D E |"F" D2"G" D2 |
            "C" E F G F | E F G F |"F" E2 E F |"G" E2 D2 |
            "Dm" G F D C |"F" G E F2 |"C" F E C D |"G" E F D C |
            "Dm" D E F E |"C" E F G F |"F" F E C D |"C" E4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E D E C |"G" D C D E |"F" F E F D |"C" E G"G" F E |
            "Am" E D E C |"Dm" D C D E |"F" F C D C |"G" D E D C |
            "C" E D E C |"G" D C D E |"F" F E F D |"C" E G"G" F E |
            "F" G F G E |"Dm" F E F G |"G" F E D C |"C" C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C D E F | G F E D |"F" C D E F |"G" G E D C |
            "F" G F E D |"C" G F E2 |"G" G E D C |"Dm" F E"G" D2 |
            "C" C D E F |"G" G F E D |"Am" C D E F |"F" E D C D |
            "C" D C E F |"Am" G F E D |"Dm" C D"G" E F |"C" E D C2 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 E2 |"Em" G G G E |"F" E2 F2 |"G" E F E D |
            "Am" C2 E2 |"Dm" F F F E |"G" D C D C |"C" D E E2 |
            "F" G2 F2 |"Em" D E E2 |"Dm" G F F E |"G" E D D C |
            "C" C2 E2 |"Em" G G G E |"F" E2"G" F2 |"C" E4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" G3 F |"Em" E3 D |"F" C C D E |"Dm" E2"G" D2 |
            "Am" C3 G |"F" C3 G |"Dm" F3 C |"G" D4 |
            "C" G3 F |"Em" E3 D |"F" C C D E |"Dm" F2"Em" E2 |
            "F" D2 C D |"G" E3 D |"Em" D2 C2 |"C" C4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"F" C6 D2 |"Am" C4 E4 |"Em" z2 G2 F2 E2 |"Dm" z2 F2 E2 D2 |
            "F" C6 D2 |"C" E8 |"Em" z2 GF FEED |"Dm" z2 FE EDDC |
            "G" z2 DC D2 DC |"Dm" DCDE"G" D2 D2 |"Am" z2 ED E2 ED |"Em" EGED E2 D2 |
            "F" C6 D2 |"Am" CDCD E4 |"Dm" z2 F2"G" E2 D2 |"C" C8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"Am" z4 G2 GE |"Em" DE E4 z2 |"F" z4 G2 GE |"G" DE E4 z2 |
            "Am" z4 E2 EC |"Dm" CD D4 DE |"Em" FE E2 FEED |"Am" E8 |
            "C" z4 G2 GE |"F" DE E4 z2 |"C" z4 G2 GE |"Dm" DEED"G" E2 z2 |
            "Am" C4 G2 GE |"F" DE C4 DE |"Dm" FE E2"G" FEED |"C" E8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C2 CC C2 C2 |"F" C2 CC C2 C2 |"C" C2 DE"Em" DEFG |"Dm" EFEF"G" D4 |
            "Am" C2 CC C2 D2 |"Em" E2 EE E2 EF |"F" G4 F2 E2 |"G" E4 D4 |
            "Em" GG G4 F2 |"Dm" EF F4 E2 |"C" DF E4 D2 |"G" D4"Em" D4 |
            "Am" C2 CC C2 D2 |"Em" E2 EE E2 E2 |"F" E2 F2"G" E2 D2 |"C" D4 C4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"G" z2 z G FDFE |"C" E2 E4 DE |"F" FGFG"C" EFED |"Dm" EFEF"G" DEDC |
            "Dm" z GFD"G" FEDC |"F" z FEC"G" EDEC |"F" z FEC"G" EDEC |"C" C4"Am" z4 |
            "Dm" z2 z G"G" FDFE |"C" E2 E2-"Am" E2 DE |"F" z CDE"Dm" z EDE |"G" z GDE"Em" E4 |
            "Dm" z GFD"G" FEDC |"F" z FEC"G" EDEC |"F" z FEC"G" EDEC |"C" C4 z4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C3 G"F" F3 C |"Am" E3 C"G" D4 |"F" C3 F"C" E3 F |"Dm" D4-"G" D4 |
            "C" C3 G"Am" G3 E |"Dm" G2 F2"G" E2 D2 |"Dm" GDFE"G" E3 D |"C" D3 C"Am" C4 |
            "F" C3 F"C" E3 D |"Em" E3 G"Dm" F3 E |"F" F6 E2 |"Dm" E2 FE"G" D4 |
            "C" C3 G"F" F3 C |"Am" E3 C"G" D4 |"F" C6 C2 |"C" C8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C D E D- |"F" D E F E- |"G" E F G D- |"C" D2 E2- |
            "Am" E G C G- |"Dm" G F C2- |"F" C F C D- |"C" D2"Em" E2 |
            "C" C D E D- |"F" D E F E- |"G" E F G D- |"Am" D2 E2- |
            "C" E G C G- |"F" G F C2- |C F"G" C D- |"C" D2 C2 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E2 ED E2 GC- |"Am" C6 GF- |"F" F2 E2 F2 GG- |"G" G4 F4 |
            "Am" E2 ED E2 DC- |"Dm" CD- D2 F4 |"F" z2 E2 F2 ED- |"G" D2 CD- D4 |
            "C" E2 ED E2 CG- |"Am" GG C2 C G2 F- |"F" F2 E2 F E2 D |"G" E2 ED- D4 |
            "C" E2 ED E2 CG- |"Am" GG C2 C G2 F- |"F" F2 E2"G" E D2 C- |"C" C8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },

          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E2 E2 |"F" E3 D |"G" D C D C |"Am" D E E D |
"F" C2 E2 |"G" D3 E |"Dm" F E D B, |"Am" C2"Dm" F2 |
"G" B,2"C" E2 |"F" A,3 C |"G" C2 B,2 |"C" E4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C4 E2 GA- |"F" A6 GE- |"C" E6 FE |"G" E2 GD- D4 |
            "C" C4 E2 GA- |"Am" A6- AG |"Em" G6 E2 |"Dm" G2 AF- F4 |
            "Am" E3 F EFED |"Em" DDFF"Am" ED C2 | E3 F EAED |"Em" DDFF"Am" E3 D |
            "C" C4 E2 GF |"F" A6 GF |"Dm" E4-"G" E2 FE |"C" E2 DC- C4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" C3 C G2 GE- |"Dm" EF F4 z2 |"F" EF F4 E2 |"G" DCDE D4 |
            "Am" C3 C G2 GE |"F" G3 G C2 CE |"Dm" EF F4 E2 |"Em" DCDE D4 |
            "F" C3 C F2 FC |"C" C3 C G2 GC |"Am" C3 C AGFE |"Dm" FEFG"G" E2 D2 | 
            "C" C3 C G2 GE- |"Dm" EFFE EDEC |"F" z FFE"G" EDEC- |"C" C8 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E6- ED |"Am" E3 E E2 DE- |"F" E3 E GFED |"G" D2 EC- C D2 C |
            "C" E6- EE |"Am" G3 F E2 DC |"F" G G2 F E2 DC |"G" EDED- DCEC- |
            "C" CCDC ECDC- |"Am" CCDC ECDC- |"F" CCDC GFED |"G" D2 EC- C D2 C |
            "C" CD E4- ED |"Am" E3 E"Em" E2 DE- |"Dm" E3 E"G" FEDC- |"C" C8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" CEGA- AG E2 |"Am" CEGA- A4 |"F" CEGA- AGEG |"G" GAED- D4 |
            "Am" CEAE- E G2 E |"Em" GAED E4 |"F" EFCA- AGFE |"G" FGDE-"Am" E4 |
            "C" CDEE E2 DC |"Em" D3 E- E4 |"Dm" CDFA- ADFA |"G" A3 G- G4 |
            "C" CEGA- AG E2 |"Am" CEGA- A4 |"F" CEFA"G" EFDC- |"C" C8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E2 ED- D C2 C |"Am" C2 DE- E4 |"F" G G2 C2 G2 F- |"G" F2 E2 D4 |
            "C" E3 E E2 EE- |"Bmb5" ED- D4 DC- |"Am" C3 C C2 CC- |"G" CD- D4 z2 |
            "C" z2 ED- D C2 C |"Am" C2 DE- E4 |"F" G G2 C2 G2 F- |"G" FGEF DECD |
            "C" ECCE ECCE- |"Bmb5" EDDE FEDC- |"Am" C3 C"F" C2 CC- |"C" C8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"Dm" D2 F G |"F" A3 F |"C" G2 E D |"Dm" F4 |
            "G" D2 F G |"F" F2"Bmb5" E3/2 D/ |"C" D E-"Am" E F/E/ |"Dm" D2"G" z E |
            "Am" A3/2 E/ E A |"Em" G3 E |"F" F2"Bmb5" E3/2 D/ |"G" E D2 E |
            "Am" A3/2 E/ E A |"Em" G3 G |"F" A E"G" E D |"C" C4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E2 C/D/E/F/ EDEC |"Am" AE- E2- EDEC |"Em" G2 G/F/E/D/"Dm" F2 F/E/D/C/ |"C" E4"G" D4 |
            "Am" C2 C/D/E/C/"F" A E2 F |"G" G D2 E"C" FEDC |"Em" G2 G/F/E/D/"Dm" F2 F/E/D/C/ |"C" E4"Em" D4 |
            "F" FFFA"G" G2 G/A/G/F/ |"Em" GFED"Am" A E2 E |"F" FFFA"G" G2 AA/G/ |"Dm" A4"G" G4 |
            "C" E2 C/D/E/F/ EDEC |"Am" AE- E2 z4 |"Em" G2 G/F/E/D/"Dm" F2 F/E/D/C/ |"C" EC- C2 z4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
        ],
        level: 'begginer',
        description: 'Learn to play tunes in the middle octave',
        tags: [],
      },
      play_in_two_octaves: {
        name: 'Play in Two Octaves',
        tunes: [
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"Dm" F A G A |"Am" E A G A |"G" D B A B |"C" E G D G |
"F" C A G A |"G" D B A B |"C" E c B c | "G" G B A B |
"F" A c B c |"G" B c G c |"Am" A c B c |"Em" B c G c |
"F" A c B c |"G" B d G d |"F" A e d e |"C" d2 c2 |] 
`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E2 c B |"Am" c2 c B |"F" c2 c B |"G" d2 G A |
"Dm" F d c d |"G" B G F G |"Em" E c B c |"Am" B2 A2 |
"C" E2 c B |"Am" c2 c B |"F" c2 d e |"G" d B A B |
"Em" G f e f |"Am" c A G A |"Dm" F d c d |"G" B3 c |"C" c4 |] 
`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"C" E G c B |"F" A2 B c |"G" d B G A |"Em" c B G2 |
"Dm" F A d c |"G" B d g f |"C" e2"Em" d2 |"Am" c4 |
"Dm" F A d c |"G" B d g f |"C" e g c' b |"F" a2 b2 |
"Am" c'2 c' b |"Em" g2 z2 |"Dm" F A d c |"G" B2 c2 |"C" c4 |] 
`,
            meta: {
              C: 'Irad Doron',
            },
          },
        ],
        level: 'begginer',
        description: 'Expand your sigt-read to the upper octave',
        tags: [],
      },
      hello_chromatic_notes: {
        name: 'Hello Chromatic Notes',
        tunes: [
          {
            header: {
              L: '1/4',
              M: '4/4',
              K: 'C',
            },
            body: `"F" A2 C A |"G" A2 G F |"Am" F2 E2 |"Em" E4 |
"F" A2 C A |"G" A2 G2 |"C" G4 |"E" ^G2 B2 |"Am" c2 E c |
"Dm" c2 B A |"E" B2 B A |"F" c2"E" B A |
"Am" E2 z2 |"F" A2 C A |"G" A2 B2 |"C" c4 |]
`,
            meta: {
              C: 'Irad Doron',
            },
          },
        ],
        level: 'begginer',
        description: 'Go explore notes outside the scale',
        tags: [],
      },
    },
  },
  melodic_patterns: {
    name: 'Melodic Patterns',
    urlName: 'melodic_patterns',

    description:
      'Advance melodic patterns, inspired by classical music. Each book focus on specific pattern, and combine it with different patterns.',
    books: {
      repeated_note_book_01: {
        name: 'Repeated Note Book 1',
        tunes: [
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'C',
            },
            body: `"F" e4 e4 d4 c4 |"C" e4 e4 d4 c4 |"F" e4 e4 d4 c4 |"C" e4 f4"Em" e4 d4 |
"F" e2e2e2d2 d2c2c2d2 | "C" e2e2e2d2 d2c2 c4 |"F" e2e2e2d2 d2c2c2d2 |"C" e2e2f2e2 "Em" e2d2d2c2 |
|:"F" eAeA eAdA dAcA cAdA | "C" eGeG eGdG dGcG cGcG |
"F" eAeA eAdA dAcA cAdA |"C" eGeG fGeG "Em" eGdG dGcG :|
"F" e2e2e2d2 d2c2c2d2 |"C" e2e2e2d2 d2c2 c4 |"F" e2e2e2d2 d2c2c2d2 |"C" e2e2f2e2 "Em" e2d2d2c2 |
"F" e4 e4 d4 c4 |"C" e4 e4 d4 c4 |"F" e4 e4 d4 c4 |"C" e4 f4 "Em" e4 d4 |"C" e16 |] 
`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'C',
            },
            body: `|:"C" z ede ceBe Gede ceBe |"F" AeBe ceBe dece BeAe |
"C" Gede ceBe Gede ceBe |"F" AeBe ceBe ceBe AeGe |
"Dm" Ffef dfef Afef Ffef |"Em" Ggfg egfg Bgfg Ggfg |
"Am" AcBc AcBc AcBc AcBc | AcBc AcBc ABcd e2c2 :|
|:"G" GBAB dBAB GBAB dBAB | "C" GcBc ecBc GcBc ecBc |
"F" AcBc fcBc AcBc fcBc |"C" GcBc ecBc GcBc ecBc |
"G" GBAB dBAB GBAB dBAB | FBAB dBAB FBAB dBAB |
"Am" EA^GA cAGA EAGA cAGA | "E" E^GFG BGFG EGFG BGFG |
"Dm" DFEF BFEF DFEF BFEF |"Am" CEDE BEDE CEDE AEDE |
"E" B,DCD FDCD B,DCD FDCD |"Am" A,CB,C A,CB,C A,B,CD E2C2 | A,4 C4 E4 A4 :| 
`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'Bb',
            },
            body: `|:"Gm" z GAG BGcG dGAG BGcG |"Eb" BGcG BGAG BGBG AGAG |
"Gm" z GAG BGeG dGcG BGAG | "Eb" cGAG cGAG BGAG BGAG |
"Cm" z FGA GFGA GFGA GFGB |"F" AGAB AGAB AGAB AGAc |
|1 "Bb" BABc BABc B2B2 B4 :|2"Bb" BABc BABc Bcdef2f2 |]
"F" f6 a2"D7" a6 ga | "Gm" b6 c'2"Am7b5" c'6 bc' |"Bb" d'8"D" d'c'ba c'bag |"Eb" g6 g2"D" (3^f2g2f2- fefe |"Gm" d2d2d2d2-"Bb" d8 |
"Cm" c6 cd"D7" e6 dc |"Eb" B2B2B2B2-"Cm" B8 |"D7" A6 AB c6 BA | "Gm" G2G2G2G2- G8 |"Eb" z8"D" z8 |]
"Gm" z GAG BGcG dGAG BGcG |"Eb" BGcG BGAG BGdG fG^fG |
"Gm" gGdG eGdG gGdG eGdG |"Eb" gGfG eGdG cGBG cGdG |
"Cm" cBcd cBcd cBcd cBce |"D" dcde dcde dcde dcBA |
"Gm" Bdcd Bdcd GBAB GBAB | G2G2G2G2- G8 |] 
`,
            meta: {
              C: 'Irad Doron',
            },
          },
        ],
        level: 'intermediate',
        description: 'Master the "Repeated Note" technique',
      },
    },
  },
  classical_music: {
    name: 'Classical Music',
    urlName: 'classical_music',

    description: 'Covers to classical music.',
    books: {
      notebook_for_anna_magdalena_bach: {
        name: 'Notebook for Anna Magdalena Bach',
        tunes: [
          {
            header: { L: '1/8', M: '3/4', K: 'F' },
            body: `|:"F" c2 d/e/f"C/G" e2 |"F/A" (3fed"F" c2-"F/A" c2 |"Bb" (3d_ed "C" (3cdc "C7" (3BcB |"Fsus4" B2"F/C" A2"C" G2 |
"F" Ac Fc Gc | Ac Bc Gc |"C" Ac Fc Gc | Ac Bc Gc |
"F" Ac de "Dm" fd | "G" c=B "Em" AG "Am" c/d/c/B/ |"F" cf "C/G" e2"G" d/c/d |"C" c6 :|
|:"C" g2 fe fd |"C7" eg b2 z2 |"F" a2 "Bb6" gf "Gm6" ed |"Asus4" d2 "A" ^c4 |
"A" ^cd ec de |"A/C#" A2 A2 A2 |"A" ^cd ec de |"A7/C#" G2 G2 G2 |
"A7/G" ^cd ec de |"Dm/F" Ad cB "Gm" AG |"Dm/A" F2 G2 "A" E2 |"Dm" D6 |
"F/A" cf ef "Eb/G" _ef |"F" af "Bb" df "F/A" cf |"Gm/Bb" dg ^fg "F/A" =fg |"Gm" bg "C" eg "C/E" cB |
"F" Af ga gf |"Gm" Bg ab ag |"Am" cc' "Bb" ba "C7" ga |"F" g2 f4 :| `,
            meta: {
              title: 'Minuet in F',
              'sub-title': 'BWV Anh. 113',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'Notebook for Anna Magdalena Bach',
              no: 1,
              'original-key': 'F',
              bpm: [80, '1/4'],
            },
          },
          {
            header: {
              L: '1/8',
              M: '3/4',
              K: 'G',
            },
            body: `|:"G" d2 GA Bc | d2 G2 G2 |"C" e2 cd ef |"G" g2 G2 G2 |
"Am" c2 dc BA |"G" B2 cB AG |"D" F2 GA BG |"D7" A6 |
"G" d2 GA Bc | d2 G2 G2 |"C" e2 cd ef |"G" g2 G2 G2 |
"Am" c2 dc "D/F#" BA |"G" B2 cB "G/B" AG |"C6" A2 BA "D" GF |"G" G6 :|
|:"G" b2 ga bg |"D/F#" a2 de fd |"Em" g2 ef gd |"A" ^c2 Bc A2 |
AB ^cd ef |"G/B" g2"D" f2"A/C#" e2 |"D" f2"D/F#" A2"A" ^c2 |"D" d6 |
"G" d2 GF G2 |"C" e2 GF G2 |"G/B" d2"Am" c2"G" B2 |"D" AG FG A2 |
DE FG AB |"C/E" c2"G" B2"D/F#" A2 |"G" Bd"G/B" G2"D" F2 |"G" G6 :| 
`,
            meta: {
              title: 'Minuet in G',
              'sub-title': 'BWV Anh. 114',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'Notebook for Anna Magdalena Bach',
              no: 2,
              'original-key': 'G',
              bpm: [80, '1/4'],
            },
          },
          {
            header: {
              L: '1/8',
              M: '3/4',
              K: 'Gm',
            },
            body: `|:"Gm" b2 a2 g2 |"Dm/F" a2 d2 d2 |"Eb" g2 GA Bc |"D" d6 |
"Eb/G" e2 fe "Amb5" dc | "Bb" d2 ed "Gm" cB |"Amb5" c2 "D/F#" dc "Gm/D" Bc |"D" A6 |
"Gm" b2 a2 g2 |"Dm/F" a2 d2 d2 |"Eb" g2 GA Bc |"D" d6 |
"G7" f2 gf ed |"Cm" e2 "F/A" fe "F7" dc |"Bb" d2 "Eb" g2"F" c2 |"Bb" B6 :|
|:"Bb" d2 Bc d=e |"F/A" f2 "Gm" g2"F" a2 |"Gm" b2 "C/E" ga "C7" bg |"F" a2 ga f2 |
"F" FG AB cd |"Eb/G" e2 "Bb/F" d2 "Cm/Eb" c2 |"Bb/D" f2 "Eb" B2 "F" A2 |"Bb" B6 |
"G" G2 dc d2 |"Cm" G2 ed e2 |"Gm/Bb" Gd "D/A" ^Fc "Gm" GB |"D" A4 z2 |
D=E ^FG AB |"Cm/Eb" c2"Gm/D" B2"Cm6" A2 |"Gm/Bb" Bc/d/"Cm" G2"D" ^F2 |"Gm" G6 :| 
`,
            meta: {
              title: 'Minuet in G minor',
              'sub-title': 'BWV Anh. 115',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'Notebook for Anna Magdalena Bach',
              no: 3,
              'original-key': 'Gm',
              bpm: [80, '1/4'],
            },
          },
          {
            header: {
              L: '1/8',
              M: '3/4',
              K: 'G',
            },
            body: `|:"G" GB dg "D" Af |"G" g2 G2 G2 | GB dg "D" Af |"G" g2 G2 G2 |
"C" e2 e2 eg |"G/B" d2 d2 dg |"Am" c2 "D/F#" dc "G" Bc |"D" A6 |
"G" GB dg "D" Af |"G" g2 G2 G2 | GB dg "D" Af |"G" g2 G2 G2 |
"C" e2 dc BA |"G/B" d2 cB AG |"C6" (3ABc D2 "D" F2 |"G" G6 :|
|:"Em" GA "B/D#" BA "B" GF |"Em" G2 E2 E2 | gf eg fe |"B" f2 B2 B2 |
"Em" gf eg fe |"B7" f2 B2"Em/G" e2 |"Am" (3fga"B" B2 ^d2 |"Em" e2 ^de f2 |
"G/B" g2 gf ed |"C" e2 ed cB |"Am" c2 cB AG |"D" F2 EF D2 |
A2 D2 D2 |"G/D" B2 D2 D2 |"D7" c2 dc Bc | A6 |
"G" GB dg "D" Af|"G" g2 G2 G2 | GB dg "D" Af |"G" g2 G2 G2 |
"C" e2 dc BA |"G/B" d2 cB AG |"C6" AB D2 "D" F2 |"G" G6 :|
`,
            meta: {
              title: 'Minuet in G',
              'sub-title': 'BWV Anh. 116',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'Notebook for Anna Magdalena Bach',
              no: 3,
              'original-key': 'G',
              bpm: [80, '1/4'],
            },
          },
          {
            header: {
              L: '1/16',
              M: '3/4',
              K: 'F',
            },
            body: `|:"F" f2fg gaga bagf |"C/E" g2ga "G/D" gfed "C" e2c2 |"Bb" B2A2 d4 "F/A" c4 | 
"Gm" B2cd "C" cBAG "F" A2F2 |A2Bc "Bb" d2de "F/A" d2c2 |"Bb/D" cBcd "C/E" cBAG "F" A2F2 | 
"F/A" f2fe "Bb"d2"C"c2"Bb/D"B2"Bb"A2 |"C" GBAG "F" G4 F4 :|
|:"F" a2ag gaga bagf |"C/E" g2gf fgfg agfe |"F" a2ag f2e2 d2c2 |
"G" =BcdB "C" c4 "C7" _B4 |"F" A2c2 c2Bc "Bb" c2d2 |"C7" G2B2 B2AB "F" B2c2 |
"F/A" f2fe "Bb"d2"C"c2"Bb/D"B2"Bb"A2 |"C" GBAG"F" G4 F4 :| |
`,
            meta: {
              title: 'Minuet in F',
              'sub-title': 'BWV Anh. 117',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'Notebook for Anna Magdalena Bach',
              no: 3,
              'original-key': 'F',
              bpm: [80, '1/4'],
            },
          },
          {
            header: {
              L: '1/8',
              M: '3/4',
              K: 'Bb',
            },
            body: `|:"Bb" B2 B2 F>G |"F" F2 E2 "Bb" D2 |"Cm/Eb" C2 c3 d/e/ |"F" B2 A2 B2 |
c2 F2 e2 |"Bb" dc BA B2 |"Eb/G" e/f/g "F/A" fe "Bb" de |"F" c6 :|
|:"F" A2 A>B B3/2A/4B/4 | c2 BA GF |"Bb" B2 AG AF |"C" GF =ED EC |
CD =EF GA |"C7" B2 =e2 e/f/g |"F/A" c2 "Bb" BA "C" GA |"F" F6 |
"Bb" F2 B2 B/c/d |"F/A" F2 c2 c/d/e |"Bb" df "Eb/G" ed "Cm/Eb" cB |
"F" A2 GA F2 |"Bb/D" B2 B2 "Cm6" A2 |"Eb" G2 FE "Bb" D2 |"Eb/G" e2 "Eb" d2 "F" c2 |"Bb" B6 :|  
`,
            meta: {
              title: 'Minuet in Bb',
              'sub-title': 'BWV Anh. 118',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'Notebook for Anna Magdalena Bach',
              no: 3,
              'original-key': 'Bb',
              bpm: [80, '1/4'],
            },
          },
        ],
      },
    },
  },
};

export default abcTunes;
