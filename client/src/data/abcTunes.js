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

// import categories
import first_steps from './categories/first_steps';

const abcTunes = {
  first_steps,

  /*

  advance_pieces: {
    name: 'Advance Pieces',
    urlName: 'advance_pieces',
    description: 'Take your reading skill to the next level with more complex piano pieces',
    books: {
      piano_pieces_collection_1: {
        name: 'Piano Pieces Collection 1',
        tunes: [
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" e4 edcd- |"G/B" d G2 G- G c2 c- |"Am" c8 |"F" z8 |
            "C" e4 edcd- |"G/B" d G2 G- G d2 c- |"Am" c8 |"F" z4 z2 cd |
            "C" ecde gedc |"G/B" dBcd gdcB |"Am" c a2 e- e c2 A- |"F" AccA ccAc |
            "C" e4 edcd- |"G/B" d G2 G- G F2 E- |"Am" E8 | z4 z2 g2 |
            "F" a4 a2 c'a- |"C" ag- g2 z2 de |"Dm" fedA fedA |"Am" decA- AAce |
            "F" acfa acc'a |"C" gcef gcde |"Dm" fAde fedA |"Am" decA- AGAc |
            "F" dedc AGAc |"G" dedc AGAc |"Am" d2 ec- cA-Ac |"G" d2 ed- dcAG |
            "F" Acde dcAG |"G" Acde dcAG |"Am" A2 cA- A4 | z8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Gm',
            },
            body: `"Gm" z/ G/A/B/ cG "D7" ^FGAE |"Gm" D2 D2 z4 |"Eb" z/ G/A/B/ cG "D7" ^FGAC |"Gm" D4 z4 |
            "Bb" z/ B/c/d/ eB "F" A4 |"Dm" z/ A/B/c/ dA"Gm" A2 B2 |"Bb" z/ B/c/d/ eB "F" Agfe |"Dm" d/A/B/c/ "D7" BA "Gm" A2 G2 ||
            "Gm" gdBd "F/A" fcAc |"Bb" dBFB "Cm" cG E2 |"Eb" BGEG "D" A^F Dc/d/ |"Cm" ecGc "D" de d2 |
            "Gm" gdBd "F/A" fcAc |"G7/B" fd=Bf "Cm" f2 e2 |"Abmaj7" d2 c2 d2 e2 |"D7" f2 e2 d2 c2 ||
            "Gm" B/G/A/B/ cG "D7" ^FGAe |"Gm" d2 d2 z4 |"Eb" z/ G/A/B/ cG "D7" ^FGAc |"Gm" d2 B2 G2 D2 |
            "Bb" z/ B/c/d/ eB "F" A4 |"Dm" z/ A/B/c/ dA "Gm" A2 B2 |"Bb" z/ B/c/d/ eB "F" Agfe |"Dm" d2 "D7" A2 "Gm" A2 G2 |
            "Bb" z/ B/c/d/ eB "F" A/B/A/B/ A2 |"Dm" z/ A/B/c/ dA "Gm" A/B/A/B/ G2 |"Bb" z/ B/c/d/ eB "F" Ag/f/ f/e/e/d/ |"D7" d3 A "Gm" G4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Gb',
            },
            body: `z4 dfga |"Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" ag g2- g2 Bg |"Bbm/Db" fedB- Bdef | 
            "Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" ag g2- g2 Bg |"Bbm/Db" f2 e2 d2 B2 ||
            "Cbmaj7" Bded e2 Bd |"Db" ed e2 Bdef |"Ebm" ed e2- e4 |"Ebm/Db" z8 |
            "Cbmaj7" Bded e2 Bd |"Db" ed e2 Bdef |"Ebm" e8 | z4 (3dfg (3fga ||
            "Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" ag g2- g2 Bg |"Bbm/Db" fedB- Bdef |
            "Gb" b3 =c' d'2 c'b |"Db/F" ad' a2- afga |"Ebm" ag g2- ggfe |"Bbm/Db" fBed"Cm7b5" eGd=c |
            "Gbmaj7" BFB=c BFBd |"Bbm" =cBcB F>G F>F |"Gbmaj7" BFB=c BFBd |"Bbm" =cBcB-"Bbm/Ab" B2 F2 |
            "Gbmaj7" BFB=c BFBd |"Bbm" =cBcB F>G F>F |"Gbmaj7" BFB=c B4 |"Bbm" B=c B2- Bd fg/a/ |
            "Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" f2 g2- g2 Bg |"Bbm/Db" efdB- Bd fg/a/ |
            "Gb" b3 d d2 =cd |"Db/F" cd=cA- A4 |"Abm" BcBA-"Db/Ab" A4 |"Abm" BcBA-"Db/F" A4 |"Gbmaj7" ABFE- E G3 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '6/8',
              K: 'Eb',
            },
            body: `"Cm" gfg a2 g/f/ |"Gm/Bb" fgf/e/ d2 e/d/ |"Ab" cde fed |"G" c>=Bc/A/ G3 |
            "Cm" gfg a2 g/f/ |"Gm/Bb" fBc dfd |"Abm" e_c=d efd |"Bb" e>=de/_c/ B2- B/B/ |
            "Ebm" bab _c'2 b/a/ |"Bb7" ab_c' b3 |"Abm" aef _gfe |"Bb" e>=de/_c/ B2- B/B/ |
            "Abm" bab"Emaj7" _c'2 b/a/ |"Dm7b5" ab_c'"G7#9" b2 a |"Abmaj7" gfg agf |"Cm" gfg bgf |
            "Fm7" gfg agf |"G7" a3 g3 |[M:3/8] f3 |$[M:6/8]"Cm" ede f2 e/d/ |"Gm/Bb" ded/c/ B2 c/B/ |
            "Fm" ABc dcB |"Eb" B>AB/A/"G7" A G2 |"Cm" gfg a2 g/f/ |"Gm/Bb" fgf/e/ d2 e/d/ |
            "Ab" c3- c2 e/d/ |"Cm/G" d c2- c2 e/d/ |"Fm" c3-"Fm6" c2 e/d/ |"Cm" d c2- c3 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'Dm',
            },
            body: `D2 F2G2 |"Dm" A4 A2G2 A2d2A2G2 |"F" GFF2- F4- F2FG A2GF |"C" GFE2- E4- ECDE FGFE |
            "Dm" FGFE D4 z2 D2F2G2 |"Bbmaj7" A4 A2GA- "C" A2<d2 A2GF |"Dm" GFF2- F4- F2FG A2GF |"Am7" GFE2 C4- CCDE FGFE |
            "Dm" FED2- D4 z2 d2f2g2 |"Dm" a4 a2g2 a2d'2a2g2 |"F" gff2- f4- f2fg a2gf |"C" gfe2 gfe2- ecde fgfe |
            "Dm" fed2 fed2 z2 dd ffgg |"Bbmaj7" a4 a2ga- "C" a2<d'2 a2gf |"Dm" gff2- f4- f2fg a2gf |"Am7" gfe2 gfe2- ecde fgfe |
            "Dm" fed2- d4 z2 D2F2G2 |"Dm" A4 A2GA- A2<d2 A2GF |"F" GFF2- F4- F2FG A2GF |"C" GFE2- E4- ECDE FGFE |
            "Dm" FGFE D4 z2 D2F2G2 ||[K:Eb] "Dm7b5" A4 A2GA- "G7" A2<=B2 c2de |"Cm" dee2- e4- "Cm/Bb" e2ed c2de |
            "Fm/Ab" def2 def2- "Fm7" fagf "Bb" edef |"Eb" efg2- g4 "Eb/D" z2 c2e2f2 |"Cm" g4 g2f2 g2c'2g2f2 |
            "Eb" fee2- e4- e2ef g2fe |"Bb" fed2 fed2- dBcd efed |"Cm" edc2 edc2 "Cm/Bb" z2 cc eeff |
            "Abmaj7" g4 g2fg- "Bb" g2<c'2 g2fe |"Cm" fee2- e4- "Dm7b5" e2de "G7" f2ed |
            "Fm7" edc2 cBA2 "Dm7b5" AGF2 FED2 |"Bbdim" _D6 =D2 "A7" F4 =E4 ||[K:F] "Bbmaj7" A4 A2GA- "C" A2<d2 A2GF |
            "Dm" GFF2- F4- F2FG A2GF |"Am7" GFE2 GFE2- E2C2F2E2 |"Dm" FED2- D4 z8 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'Cm',
            },
            body: `"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |"Abmaj7" G2A2 A4- A4 ABAB |"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |
            "Abmaj7" G4 A4- A4 z2 de |"Fm/Ab" f4 e2ef "Eb" g2e2 B2>e2 |"Bbsus4" e2fd- "Bb" d4 z4 edcB |
            "Abmaj7" c8 z4 edcB |"Cm" c2ec- c4 z8 |"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |
            "Abmaj7" G2A2 A4- A4 ABAB |"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |"Abmaj7" G2FE- E4- EFGA Bcde |
            "Fm/Ab" fedc "Bb" dBef "Cm7" gbba "Dm7b5" aggf |"G7" feed- d4 z4 edcB |
            "Abmaj7" c2ed cBc2- "Bb" c2ed cBce- |"Cm" e4 c4 z8 |"Ebm" B4 _g2B2 "Bbm/Db" B4 f2B2 |
            "Cbmaj7" B2_c2 c4- c4 z2 _de |"Bbdim" e2_f2 f4- "Gb7" fe_d_c edcB |"Abm" B2_c2 c4 z8 |
            "Dbm/Fb" _d_cBA "Gb" B_Gcd "Cbmaj7" e_g_fe "Dbm" d4- |"Bbdim" d4 B4 "Emaj7" _c8 |
            "Dbm7" z2 _cB A_GA2- "Emaj7" A2_fe _dcdf |"Gb7" e4 _d4 b4 a4 |
            "Abm" _c'4 e'2c'2 "Ebm/Gb" b4 e'2b2 |"Abm" _c'4 e'2c'2 "Ebm" b4 e'2b2 |"Emaj7" a4 e'4 "Gb7" a4 e'4 |"Abm" a8 z8 |
            "Abm" _c'4 e'2c'2 "Ebm/Gb" b4 e'2b2 |"Abm" _c'4 e'2c'2 "Ebm" b4 e'2b2 |"Emaj7" a4 e'4 "Gb7" a4 e'4 |"Abm" a8 z8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'Am',
            },
            body: `z8 z4 z Ace |:"Am" a2a2 ac'ae "G" bgbg d2ga |"Em" bgbg e2ab "Am" c'bc'b aAce |
            "Am" a2a2 ac'ae "G" bgbg d4 |"F" afaf cBcB "Am" BAA2 z Ace :|
            "D/F#" a2a2 a^fga "G" abb2 bdga |"E/G#" b2b2 b^gab "A" b^c'c'2 c'eab |
            "F#7" ^c'2c'2 c'^f^ab "Bm" c'd'd'2 d'fbc' |[M:2/4]"Em7" d'4- d'e'd'^c' |[M:4/4]"F#7" b^c'd'c'- c'8 z Bd^f |
            "Bm" b2b2 bd'b^f "A" ^c'ac'a e2ab |"F#m" ^c'ac'a ^f2bc' "Bm" d'c'd'c' bBdf |
            "Bm" b2b2 bd'b^f "A" ^c'ac'a e4 |"G" bgbg d^cdc "Bm" cBB2 z Bd^f |
            "Bm" b^fbf bd'bf "A" ^c'ac'a eac'a |"F#m" ^c'ac'a ^fac'a "Bm" bd'fb dfBd |
            "Bm" ^fbdf bd'fb "A" ^c'e'c'a ec'ae |"G" bd'gb "F#7" ^f^a^cf "Bm" dbfb B4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'Dm',
            },
            body: `z8 z4 z Ade |"Dm" f2f2 f2fg-"Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce"Dm" fgfe dAde |
            "Bb" f2f2 f2fg-"C" gfec- ccef |"Am7" gfec- cceg"Dm" fed2 z Ade ||
            "Dm" fAfA fAfg-"Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce"Dm" fgfe dAde |
            "Bb" fBfB fBfg-"C" gfec- ccef/a/ |"Am7" gfec- cceg"Dm" fed2 z cfg |]
            "F" a2a2 a2ab-"Gm" bagd- ddga |[M:2/4]"A7" bage- eegb |[M:4/4]"Bbmaj7" aggf- f4- f4 gffe |
            "Gm" feed- d4-"Gm6" d4 gffe |"Dm" fed2- d4 z4 z Ade |]
            "Dm" f2f2 f2fg-"Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce"Dm" fgfe dAde |
            "Bb" f2f2 f2fg-"C" gfec- ccef |"Am7" gfec- cceg"Dm" fed2 z Ade ||
            "Dm" fAfA fAfg-"Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce"Dm" fgef dAde |
            "Bb" fBfB fBfg-"C" gaba- aefg |"Am7" gaba-"A7" abc'b bac'b bac'b |
            "Gm" d'c'c'b c'bc'a"Gm6" c'bba babg |"Dm/A" a8"A7" a8 |"Dm" d'8- d'8 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Dm',
            },
            body: `"Dm" z AdA "Gm" BdGB |"C" EGCE "F" FACE |"Dm" DAdA "Gm" BdGB |"A" ^ceAc "Dm" dAGA |
            "Dm" FAdA "Gm" BdGB |"C" EGCE "F" FACE |"Dm" DAdA "Gm" BdGB |"A" ^ceAc "Dm" d2 d2 |
            "Eb" _egBd "F7" ceAc |"Gm" BdGB "Dm" AdFA |"Eb" G_eBd "A" ^c=eAc |"Bb" dfBd "A" ^ceAc |
            "Dm" dAdA "Gm" BdGB |"C" EGCE "F" FACE |"Dm" DAdA "Gm" BdGB |"A" ^ceAc "Bb" dfBd |
            "A" eg^ce "Gm7" dfBd |"A7" ^ceAc "Dm" dAdA | dAdA "Gm" BdGB |"C" EGCE "F" FACE |
            "Dm" DAdA "Eb" BG_ed |"A" ^ceAc "Dm" dfAd |"Eb" _egBd "F7" ceAc |"Gm" BdGB "Fm" _AcFA |
            "C7" GBEG "Db" F_A_DF |"C7" EGCE "Fm" FCFC |"Bbm" _DFB,D "Bbdim" G,E=D^C |"A7" GFEB AGed |
            "Dm" ^cdAd "Gm" BdGf |"C" egcb "F" bafg |"Bbmaj7" afaf "Gm" bg d2 |"A7" bg ^c2 "Dm" c2 d2 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Gm',
            },
            body: `"Gm" z DdB"Ebmaj7" A G3 |"F" B A3 z2 z E |"Gm" DGdB"Ebmaj7" AGFE |"F" D C3 E D2 C |
            "Gm" B,2 dB "Ebmaj7" AGdc |"F" BAed "D7" cfed |"Gm" cBgb "Ebmaj7" agfe |"F" d c3 "F#dim" e d2 c |
            "Gm7" d2 de "Ebmaj7" fBcd |"Cm7" e3 G "D7" ^FdAc |"Ebmaj7" BdGB "D7" ^FGcB |"Gm" e d3 c B3 |
            "Bbmaj7" d2 de "F" fBcd |"Eb" e3 G "D7" ^FdAc |"Cm7" Be^FG "D7" BAcB |"Gm" A G3 z4 |
            "Gm" z DdB "Ebmaj7" (3AGB (3AcB |"F" (3BAc (3Bdc "F#dim" (3cBd (3ced | 
            "Gm" (3dBd (3gab "Ebmaj7" (3agf (3efe |"F" (3dce (3dcB "F#dim" (3cBd (3cBA |
            "Gm" (3BGB (3def "Ebmaj7" (3fBc (3Bcd |"Cm7" e3 G "D7" (3^FAd (3ABc |
            "Ebmaj7" (3Bcd (3GAB "D7" ^FGcB |"Gm" e d3 c B3 |"Bbmaj7" d2 (3dcd "F" (3fBc (3Bcd |
            "Eb" e3 G "D7" ^FdAc |"Cm7" Be^FG "D7" BAcB |"Gm" A G3 z4 |
            "Gm" z DdB "Ebmaj7" A G3 |"F" B A3 z2 z z |"Ebmaj7" z DdB "Cm7" A G3 |"C#dim" B A3- "Dsus4"A2- "D7" A2 |"Gmaj7" =B4 z4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Cm',
            },
            body: `"Cm7" EBed- "F7" dBcd |"Bbmaj7" cBdF- "G7" F3 D |"Cm7" EBed- "F7" dBcd |"Bbmaj7" fd- d2 "G7" z2 z d |
            "Cm7" eBEd- "F7" dBcd |"Bbmaj7" cBFE "G7" AGDF |"Cm7" EGBd- "F7" dGBB- |"Bb6" B4 z4 |]
            "Gm7" Bfb=a- "A7" a=efg |"Dm" g/f/=a/d/- d/g/f/a/ "Am/C" =ee/d/ g/e/d/c/ | 
            "Bbmaj7" d/c/d/F/ d/G/d/=A/ "A7" B/A/B/A/- AB |"D7" c2 B2 =A4 |
            "Gm7" Bfb=a- "A7" a=efg |"Bbmaj7" =a/g/c'/f/- fg/a/ "F/A" g/f/c'- c'2 |"Gm" g/f/b/d/- df/g/ "Dm" f/=e/=a- a2 |
            "Eb" e/d/g/c/- cB "Bb" d/c/f- fB |"F" =A2 G2 F4 |]"Cm7" EBed- "F7" dBcd |
            "Bbmaj7" cBdF- "G7" F3 D |"Cm7" EBed- "F7" dBcd |"Bbmaj7" fd- d2 "G7" z2 z d |
            "Cm7" eBEd- "F7" dBcd |"Bbmaj7" cBFE "G7" AGDF |"Cm7" EGBd- "F7" dGBB- |"Bb6" B4 z4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'Dm',
            },
            body: `"Dm" z2 d2A2B2- "Gm" BdcB cBAG |"F" z cAG AGF2 "C" GcGF GFEF- |
            "Dm" F2d2A2B2- "Gm" BdcB cBAG |"F" A2G2 F2GG- "C" G8 |
            "Dm" z2 d2A2B2- "Gm" BGAB ABcd |"F" z Acd cdf2 "C" z cdf dffd |
            "Dm" f2f2^c2d2- "Gm" dgfe fedc |"A7" z ^cBA BAG2 z bag fede |
            "Dm" fagf "Am/C" egfe "Bbmaj7" d8 |"Dm" fagf "Am/C" edeg "Bbmaj7" fed2- d4 |
            "Dm" fagf "Am/C" egfe "Bbmaj7" dfed "F/A" cedc |"Gm" BdcB "F" AcBA "Em7b5" GBAG "Dm" FAGF |
            "Bbmaj7" EDFE GFAG BAcB dced |"C7" fegf agba c'bd'c' bagf |
            gfag fedc BAGF EDEF | GABc defe gfag fede |
            "Dm" f2d2A2B2- "Gm" BdcB cBAG |"F" z cAG AGF2 "C" GcGF GFEF- |
            "Dm" F2d2A2B2- "Gm" BdcB cBAG |"F" A2G2 F2GG- "C" G8 |
            "Dm" z2 d2A2B2- "Gm" BGAB ABcd |"F" z Acd cdf2 "C" z cdf dffd |"F6" f2dc AGFD F8 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Dm',
            },
            body: `"Dm" e2 FA- A2 ef |"Gm/Bb" e2 GB- B2 ef |"F/A" gfcA- Acfg |"Am" edcA- AAcd |
            "Dm" e2 FA- A2 ef |"Gm/Bb" e^cdG Bdef |"F/A" gfcA gfcA |"Am" decA d e3 |
            "Dm" e/f/e/d/ ed- d/A/d/e/ f/e/d/c/ |"Gm/Bb" d/e/d/c/ dc- c B2 A |"F/A" c/A/F Fc/A/ F>F c/B/A/B/ |
            "Am" c/A/E E>c d e3 |"Dm" e/f/e/d/ ed- d/A/f/g/ a/g/f/e/ |"Gm/Bb" g/a/g/f/ gf- f e2 d |
            "F/A" f/c/A Af/c/ A>A f/e/d/e/ |"Am" e/d/c/d/ e2 d e3 |"Dm" e2 FA- A2 ef |
            "Gm" e2 DE- E2 FG |"Bbmaj7" ADcB- B A2 G |"Am7" GEBA- A G2 F |"Dm" E2 F,A,-"Dm/C" A,2 E2 |
            "Bbmaj7" F, A,2 E-"Am" EGAc |"Bbmaj7" d>e- ef- f<g ab |"Am" b>a- ag- g(3d/e/a/- a2 |
            "Dm"!8va(! e'2 fa- a2 e'f' |"Gm/Bb" e'2 gb- b2 e'f' |"F" g'f'c'a- ac' g'2 |"Am" d' e'3- e'4 |"Dm" d''8!8va)! |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Dm',
            },
            body: ` A |"Dm" ADFd "Bbmaj7" cBAG |"F" ACAc "A7" BA GF/G/ |"Dm" ADFd "Gm/Bb" d^cde |
            "A" ^cBGA "A7" gfde |"Dm" f4- "Gm" f2 de |"A7" e^cBG =c B2 A |
            "Dm" ADFd "Bbmaj7" cBAG |"F" ACAc "A7" BA GF/G/ |"Dm" ADFd "Gm/Bb" d^cde |
            "A" (3^cBA (3=cBA- A2 z a/g/ |"Dm" fd de/f/ "Am/C" ea/e/ ca/g/ |
            "Dm" fd de/f/ "Am/C" ea aa/g/ |"Dm" fd de/f/ "Am/C" ea/e/ cc'/b/ |
            "Bbmaj7" a/b/b/a/ ag/a/ "A7" a/c'/c'/b/ aa/g/ |"Dm" fd de/f/ "Am/C" ea/e/ ca/g/ | 
            "Dm" fd de/f/ "Am/C" ea aa/g/ |"Dm" ff/e/ de/f/ "Am/C" ea/e/ cc'/b/ | 
            "Bbmaj7" a/b/b/a/ a/g/g/f/ "A7" f/e/e/^d/ e2- | e2 ^c2 B2 A2 |
            "Dm" ADFd "Bbmaj7" cBAG |"F" ACAc "A7" BA GF/G/ |"Dm" ADFd "Gm/Bb" d^cde |
            "A" ^cBGA "A7" gfcd |"D7" _edAB "D7/F#" cBGA |"Eb/G" BA^FG "D7" F_EDC |
            "Gm" B,G, G,C/B,/ "Dm" A,D/A,/ F,G/F/ |"Cm" _EC CF/E/ "Gm" DG/D/ B,B/A/ | 
            "Em7b5" GE Ee/d/ "A7" ^cc/=B/ Ag/f/ |"Gdim" ee/d/ ^cb/a/ "A7" gg/f/ ec'/b/ | 
            "Bbmaj7" ac'/b/ ac'/b/ ac'/b/ a/c'/b/a/ |c'/b/a/c'/ b/a/c'/b/ a/b/c'/d'/ c'/b/a/g/ | 
            "Dm" adfd' "Bbmaj7" c'3 g |"Gm" fe^cd "Dm/A" "A7" d3 d |"Gm/D" d4- "D" d4 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'Eb',
            },
            body: `"Eb" egbc' bgeg |"Fm" ac'fa "Bb" dfBd |"Eb" egBe "Ab" ceAc |"Bb" dfBd "Eb" eBef |
            "Eb" egbc' bgeg |"Fm" ac'fa "Bb" dfBd |"Eb" egBe "Ab" ceAc |"Bb" dfBd "Eb" efed |
            "Cm" cega gece |"Dm7b5" fadf "G" =BdGB |"Cm" ceGc "Fm" AcFA |"G" =BdGB "Cm" cGcd |
            "Cm" egc'=b c'bd'c' |"G" =bd'gb df=Bd |"Ab" ceag "Dm7b5" fad'c' |"G" =bd'gb "Cm" c'gec |
            "Eb" egbc' bgeg |"Fm" ac'fa "Bb" dfBd |"Eb" egBe "Ab" ceAc |"Bb" dfBd "Eb" eBef |
            "Ebm" e_gb_c' bgeg |"Fm7b5" a_c'fa "Bb" dfBd |"Ebm" e_gBe "Abm" _ceAc |"Bb" dfBd "Ebm" eBef |
            "Ebm" _gbe'd' e'd'f'e' |"Bb" d'f'bd' fadf |"Cb" e_g_ce "Fm7b5" AcFA |"Bb" DFB,D "Ebm" EB,EF |
            "Eb" EGBc BGEG |"Fm" AcFA "Bb" DFB,D |"Eb" EGB,E "Ab" CEA,C |"Bb" DFB,D FBDF |
            BdFB dfBd |"Bdim" fadf a_c'fa |"Bb" dfBd FBdf |"Eb" egBe GBEG | B,EG,B, E,4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'Cm',
            },
            body: `e2g'2d'2 |:"Cm" f'2e'2g2e'2 "Ab" d'2c'2f2b2 |"Eb" a2g2B2e2 "Bb" d2e2g'2d'2 | 
            "Cm" f'2e'2g2e'2 "Ab" d'2c'2f2d2 |$"Eb" e2d2e2f2 "Bb" d2c2d2f2 |"Cm" f2e2G2e2 "Ab" d2c2F2B2 | 
            "Eb" G2A2B2E2 "Bb" D2E2F2f2 |$"Cm" f2e2 G2ba "Ab" g2f2e2c'2 |"Eb" b2a2g2a2 "Bb" d6 e2 | 
            "Cm7" e2!8va(!e'f' g'2g'2 "Abmaj7" g'2g'f' e'g'f'e'!8va)! |"Eb"!8va(! e'f'e'f' g'2bc'"Bb" d'e'd'e' f'e'd'e' |
            "Cm7" e2e'f' g'2g'2 "Abmaj7" g'2g'f' e'g'f'e' |1"Eb" e'2b2g2e2 "Bb" d2e2g'2d'2!8va)! :|2
            "Eb"!8va(! e'2b2g2e2 "Bb" d2e2d2e2!8va)! ||"Cm" E2ef g2g2 "Abmaj7" g2gf egfe |
            "Eb" efef g2Bc "Bb" dede fede |"Cm" E2ef g2g2 "Abmaj7" g2gf egfe |
            "Eb" e2B2G2E2 "Bb" DEEF FGFE |"Cm" EGcd efgf "Abmaj7" gfgf egfe |
            "Eb" efef gBce "Bb" dede fede |"Cm" EGcd efgf "Abmaj7" gfba aggf |
            "Eb" gfba aggf "Bb" feed dede |"Cm" E2ef g2g2 "Abmaj7" g2gf egfe | 
            "Eb" efef g2Bc "Bb" dede fede |"Cm" E2ef g2g2 "Abmaj7" g2gf egfe |
            "Eb" e2B2G2E2 "Bb" (3D2G2F2 (3c2B2f2 | (3d2g2f2 (3c'2b2f'2 (3d'2g'2f'2 (3c''2b'2g'2 | 
            f'4 c'4 g'4 d'4 |"Cm" f'2e'2g2e'2 "Ab" d'2c'2f2b2 |"Eb" a2g2B2e2 "Bb" d8 | 
            "Cm" f2e2G2e2 "Ab" d2c2F2B2 |"Eb" G2E2G2A2 "Bb" D8 |"Eb" G16 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
        ],
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
      drums_style: {
        name: 'Drums Style',
        tunes: [
          {
            header: {
              L: '1/8',
              M: '4/4',
              K: 'C',
            },
            body: `"C" z CB,C ECB,C | G,CB,C ECB,C | z EDE FEFD | EEDE FEFD |
            ECDB, CEDB, | CG,A,B, CG,A,B, |CG,A,B, CDEF |
            G/C/E/G/ c/B/A/G/"D" ^F/D/F/A/ d/c/B/A/ |"G" BG^FG ABAG | DG^FG ABAG |z BAB cBcA |
             BBAB cBcA | BGA^F GBAF | GDE^F GDEF | GDE^F GABc |
            ddee dGGG | ddee dGGG |"G7" ddee fffe | eddc BGGG |
            GGGG FFFF | EEEE DDDD | GGGG FFFF | EEEE DD D2 |
            "Cm" z CB,C _DCB,C |z CB,C _DCB,C | z _EDE FEFD | _EEDE F_AGF |
            _EC_DB, CEDB, | CG,_A,B, CB,A,B, | G,F_ED CB,ED |CG,_A,B, CB,A,B, |
            "G" G,G,F,G, _A,G,A,F, | G,G,F,G, _A,G,A,F, | G,G,F,G, _A,G,CB, |"C" z CB,C ECB,C |
            G,CB,C ECB,C | z EDE FEFD | EEDE FAGF | ECDB, CEDB, |
            CG,A,B, CEDB, |CCB,C DCDB, | z cBc dcdB | z2 c'2 z4 |] `,
            meta: {
              C: 'Irad Doron',
            },
          },
        ],
        level: 'intermediate',
        description: '//TODO: add description',
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
          {
            header: {
              L: '1/8',
              M: '3/4',
              K: 'Gm',
            },
            body: `|:"Gm" G>A B2 c2 | AA/B/"D/F#" c2-"D" c2 |"Gm" BB/c/ dg"Cm"cg |"Gm/D" BA/B/"Gm" G4 ::
            "Gm" B>c"Bb" d2"F/A" f2 |"Bb" dc/B/ "F"A/B/c/A/"F7" F2 |"Bb/D" fd"Bb/F"Bf "Eb"g/f/e/d/ |"Cm" ec"F7" Ae "Bb/D"f/e/d/c/ |
            "Bb" dc/d/"Eb/G" ed"Cm/Eb" cB |"F" A/B/c/A/"Bb/D" B2 B,2 |"Bb" d2"Cm" e2"Eb" G2 |"D" ^FF/G/ AD FA |
            "Bb" d2"Cm" e2"Eb" G2 |"D" ^FF/G/ AD FA |"Bb" dd/e/"Gm" dd/e/"Gm/Bb" dg |"Gm/D" BA/B/"Gm" G2 G,2 :| `,
            meta: {
              title: 'Polonaise in G minor',
              'sub-title': 'BWV Anh. 119',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'Notebook for Anna Magdalena Bach',
              no: 3,
              'original-key': 'Gm',
              bpm: [80, '1/4'],
            },
          },
        ],
      },
      bach_the_well_tempered_clavier: {
        name: 'Bach - The Well-Tempered Clavier',
        tunes: [
          {
            header: {
              L: '1/16',
              M: '12/8',
              K: 'F',
            },
            body: `"F" fcAGAc FAc_edc "Bb" dBFEFB DFAcBA |"Gm" BGEDEG "C" CEGBAG "F" AGFEFA CEFAGF |
            "G7" =B12 "C" cGEDEG CEG_BAG |"A7" ^c12 "Dm" dAFEFA DFA=cBA |
            "Gm" BGEDEG "C" CEGBAG "F" AFD^CDF "Bb" B,DFAGF |"Emb5" GE^C=B,CE "A7" A,CEGFE "Dm" F2A2d2 A2F2D2 | 
            "Gm" G2B2d2 B2G2D2 "A7" G2^c2e2 c2G2E2 |"Dm" dAFEFA DFAcBA "Bb" fdBABd FBdfed |
            "E7" ^g12 "A7" ae^c=Bce Ace=g^fe |"D7" ^f12 "G7" gd=BABd GBd=f_ed |
            "Cm" _ecAGAc "F" FAcedc "Bb" dBGFGB "Eb" _EGBdcB |"Amb5" cA^FEFA "D7" DFAcBA "Gm" B12 | 
            "C7" B12 "F7" A12- |"Bb" AAFEFA DFAcBA "Gm/Bb" GdBABd GBdfed |
            "C/Bb" egedeg cegbag "F" c'afefa "Dm" dfac'ba |"Gm" bgedeg "C" cegbag "F" afcBcf Ac_egfe |
            "Bb" d6- dcBAGF "C7" B2g2e2 c2B2g2 |"F" AGFEFA "Bb" DFDB,G,E "F" FB,A,G,A,C F,4 z2 |] `,
            meta: {
              title: 'Prelude in F major',
              'sub-title': 'BWV ?',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'The Well-Tempered Clavier Book 1',
              no: 11,
              'original-key': 'F',
              bpm: [88, '3/8'],
            },
          },
        ],
      },
      bach_the_english_suites: {
        name: 'Bach - The English Suites',
        tunes: [
          {
            header: {
              L: '1/16',
              M: '3/4',
              K: 'Am',
            },
            body: `"Am7" z2 e2 A2a2 gefd | edcB cBcf BeAd |"E7" ^GdBG dBGB EdcB |"Am" cBA^G ABcF BEAB | 
"E" ^G2E2 G2B2 G2E2 |"A7" A=ge^c gece AG^FE |"D" ^F2d2 ^f2a2 f2d2 |"G7" g=fdB fdBd Gfed | 
"C" edcB "D" Acd^f "G" gBcA |"G7" Bde=f "C7" gA_BG gABG |"Fmaj7" Acde "Bmb57" fGAF fGAF | 
"Em" GEGB "Am7" eFGE eFGE |"Dm" FDFA "G7" dEFD dEFD |"Cmaj7" EDCB, C^G,A,E DB,CA, | 
"E7" B,DB,^G, DB,G,B, E,DCB, |"A7" CA,^CE GECE A,GFE |"Dm" FA,DF "B7" A^F^DF B,A^GF | 
"E7" ^GEGB dBGB EdcB |"Am7" c2e2 A2a2 gefd |"E" ba^g^f gfgb egac |"Bmb57" dfcf Bfcf BfAf | 
"E" ^GBeE "Am" AceE "E7" GBdE |"Am" cBAG FEDE "Dm" FEFc |"G" BAGF EDCD "C" EDE_B | 
"F" AGFE "Dm" FEFA "E7" ^GBAc |"G#dim" BcdB ^GEFD ECDB, |"Am" CEA^G ADEC DB,CA, | 
"E" ^G,EBA BEFD ECDB, |"Am" CDEB, C2D2 "E" C2B,2 |"F" A,B,C^G, A,EFB "E" EAD^G | 
"Am" CEA2- "E" A2^G,2 "F" A,CB,D |"E" ^G,B,DF DB,G,B, E,DCB, |"Am" CEA2- "E" A2^G2 "F" AcBd | 
"E" ^GBdf dBGB EdcB |"Am" cea2- "E" a2^g2 "F" ac'ba |"E" ^g^fgb agac' gfgb | ^fefa =fefb edea | 
dcd^g edea dcdg | cBc^f dcd^g cBcf | BABe dBcA B^GA^F | ^G^FGB E^DEG =DCD=F | 
B,A,B,D ^G,^F,G,B, E,2 z2 | z DCB, FDCB, ^GDCB, | BFED ^GFED BFED | d^G^FE BGFE dBAG | 
fedc BA^G^F EDCB, |"Am" A,2e2 A2a2 "G" gefd |"C" eBc^G "F" Acfd "E" ecdB | 
"Am" cBc^G Acec "Bmb5" dBcA |"E" BAB^G "F" AGAf "E" ecdB |"Am" cBA^G ABcf "G" ecdB | 
"C" cBA^G"F" ABcd "E" cABG |"Am" ABcA ^GAcA "G#mb5" BGA^F |"E" ^GFED "Am" CB,CA "E" B,AB,G | 
"Am" A2E2 EFE2 E2E2 |"Dm" F2D2 DED2 "G" D2D2 |"C" E2G2 GAG2 G2G2 |"B7" A2^F2 FGF2 F2F2 | 
"Em" G2B2 E2e2 "D/F#" dBcA |"G" BAG^F "Em" GFGc "D" FBEA |"B7" ^DA^FD AFDF B,AGF | 
"Em" G2B,2 B,CB,2 B,2B,2 |"Am" C2A,2 A,B,A,2 "D" A,2A,2 |"G" B,2D2 DED2 D2D2 | 
"F#7" E2^C2 CDC2 C2C2 |"Bm" DB,D^F BDFB d2d2 |"E7" dE^GB dBGB EdcB |"Am" cA,CE ACEA c2c2 | 
"D7" cD^FA cAFA DcBA |"G" B^FGB DFGB DFGB |"Am7" c^FGc DFGc DFGc |"G/B" d^FGd DFGd DFGd | 
"C" EDEd EDEd EDEd |"Am" EDEc EDEc EDEc |"D7" ^FEFc FEFc FEFc |"G/D" G^FGB GFGB GFGB | 
"C#mb5/D" G^FGe GFGe GFGe |"D7" ^FDFA "Bmb5" dE=FD "G7" dEFD |"C" ECEG "Am" cDEC "D7" cDEC | 
"Bm" D2d2 ded2 d2d2- |"Am" d2c2 cdc2 c2c2 |"Em" BAG^F GFGc FBEA |"B7" ^DcBA ^FcBA AcBA | 
B,AG^F ^DAGF FAGF | A,^FE^D CFED _EF=ED | A^FE^D cFED BAGF |"Em" G2B2 E2e2 "Bm" dBcA | 
"G" B^FG^D "C" EGcA "B7" BGAF |"Em" G^FG^D EGBG "D#mb" AFGE |"B7" ^FEF^D "C" EDEc "B7" BGAF | 
"Em" G^FE^D EFGc "Bm" BGAF |"Em" G^FE^D "C" EFGA "B7" GEFD |"Em" E^FGE ^DEGE "D#mb5" FDE^C | 
"B7" ^DcBA "Am7" GABc "B7" ^F2>E2 |"Em" E2G2 GAG2 G2G2 |"A7" _B2G2 GAG2 GBAG |"Dm" F2F2 FGF2 F2F2 | 
"G7" d2F2 FGF2 FAGF |"C" EB,CE G,B,CE G,B,CE |"Dm" FB,CF G,B,CF "G7" G,B,CF | 
"C" GB,CG G,B,CG G,B,CG |"F" A,G,A,G A,G,A,G A,G,A,G |"Dm/F" A,G,A,F A,G,A,F A,G,A,F | 
"G7" B,A,B,F B,A,B,F B,A,B,F |"C/G" CB,CE CB,CE CB,CE |"Cdim/G" CB,C_E CB,CE CB,CA | 
"G7" B,DF_A FDB,G, z4 |"F#dim" c4 _E4 "G/F" z2 B2 |"C/E" c2>d2 "G7" d6 c2 |"C" c2e2 A2a2 gefd | 
"Am" edcB cBcf BeAd |"E7" ^GdBG dBGB EdcB |"Am" cBA^G ABcF BEAB |"E" ^G2E2 G2B2 G2E2 | 
"A7" Age^c gece AG^FE |"D" ^F2d2 ^f2a2 f2d2 |"G7" gfdB fdBd Gfed |"C" edcB "D" Acd^f "G" gBcA | 
"G7" Bdef "C7" gA_BG gABG |"F" Acde "Bmb5" fGAF fGAF |"Em" GEGB "Am" eFGE eFGE | 
"Dm" FDFA "G7" dEFD dEFD |"C" EDCB, C^G,A,E DB,CA, |"E" B,DB,^G, DB,G,B, E,DCB, | 
"A7" CA,^CE GECE A,GFE |"Dm" FA,DF "B7" A^F^DF B,A^GF |"E7" ^GEGB dBGB EdcB |"Am" c2e2 A2a2 gefd | 
"E7" ba^g^f gfgb egac |"Bmb5" dfcf Bfcf BfAf |"E" ^GBeE "Am" AceE "E" GBdE | 
"Am" cBAG FEDE "Dm" FEFc |"G" BAGF EDCD "C7" EDE_B |"F" AGFE "Dm" FEFA "E7" ^GBAc | 
"G#dim" BcdB ^GEFD ECDB, |"Am" CEA^G ADEC DB,CA, |"E" ^G,EBA BEFD ECDB, | 
"Am" CDEB, C2D2 "E" C2B,2 |"F" A,B,C^G, A,EFB "E" EAD^G |"Am" CEA2- "E" A2^G,2 "F" A,CB,D | 
"E" ^G,B,DF DB,G,B, E,DCB, |"Am" CEA2- "E" A2^G2 "F" AcBd |"E" ^GBdf dBGB EdcB | 
"Am" cea2- "E" a2^g2 "F" ac'ba |"E" ^g^fgb agac' gfgb | ^fefa =fefb edea | dcd^g edea dcdg | 
cBc^f dcd^g cBcf | BABe dBcA B^GA^F | ^G^FGB E^DEG =DCD=F | B,A,B,D ^G,^F,G,B, E,2 z2 | 
z DCB, FDCB, ^GDCB, | BFED ^GFED BFED | d^G^FE BGFE dBAG | fedc BA^G^F EDCB, | 
"Am" A,2e2 A2a2 "G" gefd |"C" eBc^G "F" Acfd "E" ecdB |"Am" cBc^G Acec "Bmb5" dBcA | 
"E" BAB^G "F" AGAf "E" ecdB |"Am" cBA^G ABcf "G" ecdB |"C" cBA^G "F" ABcd "E" cABG | 
"Am" ABcA ^GAcA "G#mb5" BGA^F |"E" ^GFED "Am" CB,CA "E" B,AB,G | A12 |] `,
            meta: {
              title: 'Prelude',
              'sub-title': 'BWV ?',
              composers: ['Johann Sebastian Bach'],
              'album-name': 'The English Suite No. 2',
              no: 1,
              'original-key': 'Dm',
              bpm: [null, null],
            },
          },
        ],
      },
      bach_the_french_suites: {
        name: 'Bach - The French Suites',
        tunes: [],
      },
      bach_the_cello_suites: {
        name: 'Bach - The Cello Suites',
        tunes: [],
      },
      bach_keyboard_works: {
        name: 'Bach - Keyboard Works',
        tunes: [],
      },
      bach_organ_works: {
        name: 'Bach - Organ Works',
        tunes: [],
      },
      bach_inventions_and_sinfonias: {
        name: 'Bach - Inventions and Sinfonias',
        tunes: [],
      },
    },
  },
  technique_etudes: {
    name: 'Technique Etudes',
    urlName: 'technique_etudes',
    description: 'Etudes for practicing techniques',
    books: {
      piano_etudes_book_1: {
        name: 'Piano Etudes Book 1',
        tunes: [
          {
            header: {
              L: '1/16',
              M: '4/4',
              K: 'C',
            },
            body: `"C" CDEF GABc "F" FAcB AGFE |"G" DEFG ABcd "Em" GBdc BAGF |
            "Am" EFGA Bcde "Dm" Adfe dcBA |"G" GABc defg "Bmb5" Bdgf edcB |
            "C" cdef gabc' "F" fac'b agfe |"G" defg abc'd' "Em" gbd'c' bagf |
            "Am" efga bc'd'e' "Dm" ad'f'e' d'c'ba |"G" gabc' d'e'f'g' "Bmb5" bd'g'f' e'd'c'b |
            "C" c'c''b'a' g'f'e'd' c'e'd'c' bagf | egfe dcBA GcBA GFED | C16 |] `,
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
            body: `"C" EGcB cGEG "F" FAcB cAFA |"C" EGcB cGEG "G" DFGA BAGF |
            "C" EGcB cGEG "F" FAcB cAFA |"C" EGcB cGEG "G" DFGA BAGF |
            "C" EGAB cBAG "F" FGAB cBAG |"C" EGAB cBAG "G" DFGA BAGF |
            "C" EGAB cBAG "F" FGAB cBAG |"C" EGAB cBAG "G" DFGA BGAB |
            "C" cBAG EGAB "F" cBAG FGAB |"C" cBAG EFGA "G" BAGF DGAB |
            "C" cBAG EGAB "F" cBAG FGAB |"C" cBAG EFGA "G" BAGF DAGF |
            "C" EGcB cGEG "F" FAcB cAFA |"C" EGcB cGEG "G" DFGA BGAB |"C" c16 |]`,
            meta: {
              C: 'Irad Doron',
            },
          },
        ],
      },
    },
  },
  jazz_standards: {
    name: 'Jazz Standards',
    urlName: 'jazz_standards',
    description: 'Jazz standards',
    books: {
      ballads: {
        name: 'Ballads',
        tunes: [],
      },
      waltz: {
        name: 'Waltz',
        tunes: [],
      },
      swing: {
        name: 'Swing',
        tunes: [],
      },
    },
  },

  */
};

export default abcTunes;
