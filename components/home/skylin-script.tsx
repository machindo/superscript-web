import type { FunctionalComponent } from 'vue'

export interface Line {
  input?: string
  output?: FunctionalComponent
  nextTag?: string
}

export const skylinExample: Line[] = [
  {
    input: 'Skylin',
    output: () => <h1 class='title'>Skylin</h1>
  }, // 0
  { input: 'by Frederick Packard and Joshua Valliere' },
  { input: '' },
  { input: 'issue: 1' },
  { input: 'characters: Skylin' },
  { input: '', output: () => <p class='last-line-of-page' /> }, // 5
  {
    input: 'page',
    output: () => (
      <h1
        id='pageHeading1'
        data-count='14'
        style="--word-count:14; --word-count-string:'14';'"
      >
        PAGE 1
      </h1>
    )
  }, // 6
  { input: '' },
  {
    input: 'panel',
    output: () => (
      <h2 data-count='14' style="--word-count:14; --word-count-string:'14';">
        Panel 1
      </h2>
    )
  },
  { input: `The Demon King sits on his throne, drinking from his goblet.` },
  { input: '' },
  {
    input: `His giant Serpen lurks ominously behind him in the shadows with eyes like 4 burning red flames.`
  },
  { input: '' },
  {
    input: 'Skylin narration:',
    output: () => (
      <h3 data-count='14' style="--word-count:14; --word-count-string:'14';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `Eight hundred years ago, the six kingdoms were all ruled by the Demon King.`
  },
  { input: '', output: () => <p class='last-line-of-page' /> }, // 15
  {
    input: `page`,
    output: () => (
      <h1
        id='pageHeading2'
        data-count='42'
        style="--word-count:42; --word-count-string:'42';'"
      >
        PAGE 2
      </h1>
    )
  }, // 16
  { input: '' },
  {
    input: 'panel',
    output: () => (
      <h2 data-count='12' style="--word-count:12; --word-count-string:'12';">
        Panel 1
      </h2>
    )
  },
  {
    input: `Wide shot of a large dragon like shadow flies over Ice Kingdom villagers as they look up in horror.`
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='12' style="--word-count:12; --word-count-string:'12';">
        Skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `His cruelty overshadowed the continent as he destroyed anyone who opposed him.`
  },
  { input: '' },
  {
    input: `Panels 2-3`,
    output: () => (
      <h2 data-count='22' style="--word-count:22; --word-count-string:'22';">
        Panels 2-3
      </h2>
    )
  },
  { input: `Wide shot of destruction raining down on a Marshland village.` },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='16' style="--word-count:16; --word-count-string:'16';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `All of the noble families were powerless against his armies, so they bowed to his will.`
  },
  { input: '' },
  {
    input: `Chase (off panel):`,
    output: () => (
      <h3 data-count='6' style="--word-count:6; --word-count-string:'6';">
        Chase (off panel):
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `Father wouldn’t kneel for no one!` },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='8' style="--word-count:8; --word-count-string:'8';">
        Panel 4
      </h2>
    )
  },
  {
    input: `The Demon King's Serpen drops Ice Kingdom soldiers into a deep canyon where they will surely perish.`
  },
  { input: '' },
  {
    input: '::',
    output: () => (
      <h3 data-count='6' style="--word-count:6; --word-count-string:'6';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `Shhh, who’s telling the story here...` },
  { input: '' },
  {
    input: `chase (off panel):`,
    output: () => (
      <h3 data-count='2' style="--word-count:2; --word-count-string:'2';">
        chase (off panel):
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `Ooops sorry!` },
  { input: '', output: () => <p class='last-line-of-page' /> }, // 41
  {
    input: 'P',
    output: () => (
      <h1
        id='pageHeading3'
        data-count='72'
        style="--word-count:72; --word-count-string:'72';'"
      >
        PAGE 3
      </h1>
    )
  }, // 42
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='21' style="--word-count:21; --word-count-string:'21';">
        Panel 1
      </h2>
    )
  },
  {
    input: `Children of the Volcanic Islands look up from the shore of their village after the Demon Serpen left only debris of their homes.`
  },
  { input: '' },
  {
    input: 'Skylin narration:',
    output: () => (
      <h3 data-count='21' style="--word-count:21; --word-count-string:'21';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `The Demon King was so powerful, he took whatever he wanted from the Six Kingdoms.`,
    output: () => (
      <blockquote class='hover'>
        The Demon King was so powerful, he took whatever he wanted from the Six
        Kingdoms.
      </blockquote>
    )
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='21' style="--word-count:21; --word-count-string:'21';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `Even little children as slaves, haha!` },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='25' style="--word-count:25; --word-count-string:'25';">
        Panel 2
      </h2>
    )
  },
  {
    input: `The Demon King flying on his Demon Serpen holding an all black jagged sword in his right hand and magic coming out of his left. They fly unhindered through a Mountainous Region city.`
  },
  { input: '' },
  {
    input: `chase (off):`,
    output: () => (
      <h3 data-count='8' style="--word-count:8; --word-count-string:'8';">
        chase (off):
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `How is this supposed to help me sleep...` },
  { input: '' },
  {
    input: 'Skylin narration:',
    output: () => (
      <h3 data-count='17' style="--word-count:17; --word-count-string:'17';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `You see, the Demon King had the only Serpen and was able to use powerful dark magic.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='26' style="--word-count:26; --word-count-string:'26';">
        Panel 3
      </h2>
    )
  },
  {
    input: `Wide shot of a Woodland Divide village on fire up high in a redwood like forest. The homes are like large tree houses. `
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='12' style="--word-count:12; --word-count-string:'12';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `No one could resist him and whoever tried was never seen again.` },
  { input: '' },
  {
    input: `chase (off):`,
    output: () => (
      <h3 data-count='10' style="--word-count:10; --word-count-string:'10';">
        chase (off):
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `Why couldn’t anybody stop him? Where are the Serpen Riders?` },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='4' style="--word-count:4; --word-count-string:'4';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `I'm getting to that!` },
  { input: '', output: () => <p class='last-line-of-page' /> }, // 73
  {
    input: 'P',
    output: () => (
      <h1
        id='pageHeading4'
        data-count='78'
        style="--word-count:78; --word-count-string:'78';'"
      >
        PAGE 4
      </h1>
    )
  }, // 74
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='18' style="--word-count:18; --word-count-string:'18';">
        Panel 1
      </h2>
    )
  },
  {
    input: `Six hooded figures are standing in front of an ancient obelisk with markings. They lay their offerings at the base of the obelisk.`
  },
  {
    output: () => (
      <p class='image-p'>
        <img src='/images/hooded-figures.jpg' />
      </p>
    )
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='18' style="--word-count:18; --word-count-string:'18';">
        Skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `The leaders of the six noble families journeyed to the floating city with offerings to the ancient ones.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='6' style="--word-count:6; --word-count-string:'6';">
        Panel 2
      </h2>
    )
  },
  {
    input: `Extreme wide shot of the showing the entire obelisk with a glow shooting straight up. The nobles are tiny in comparison and stand at the base of the obelisk.`
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='6' style="--word-count:6; --word-count-string:'6';">
        Skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: `When the spirits heard their prayers` },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='27' style="--word-count:27; --word-count-string:'27';">
        Panel 3
      </h2>
    )
  },
  {
    input: `Even more extreme wide shot showing a floating island above a beautiful night landscape. A beam of light shoots straight up from the island and lighting up the sky.`
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='27' style="--word-count:27; --word-count-string:'27';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `A flood of light rushed up the obelisk and into the sky, cracking it open. The rift was seen across all the lands like a second sun.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='11' style="--word-count:11; --word-count-string:'11';">
        Panel 4
      </h2>
    )
  },
  {
    input: `Six Serpens in silhouette flying within a vortex of glowing clouds above the floating island.`
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='11' style="--word-count:11; --word-count-string:'11';">
        Skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `And from the heavens, Six Serpens descended upon the floating city.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='16' style="--word-count:16; --word-count-string:'16';">
        Panel 5
      </h2>
    )
  },
  { input: `The Serpens approach the hooded nobles.` },
  {
    output: () => (
      <p class='image-p'>
        <img src='/images/serpens.jpg' />
      </p>
    )
  },
  { input: '' },
  {
    input: ':',
    output: () => (
      <h3 data-count='16' style="--word-count:16; --word-count-string:'16';">
        Skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: `They bonded to their chosen riders, assuming the appearance of the lands they now belonged to.`
  },
  { input: '', output: () => <p class='last-line-of-page' /> },
  {
    input: 'P',
    output: () => (
      <h1 data-count='37' style="--word-count:37; --word-count-string:'37';">
        PAGE 5
      </h1>
    )
  }, // 106
  {
    input: 'p',
    output: () => (
      <h2 data-count='24' style="--word-count:24; --word-count-string:'24';">
        Panel 1
      </h2>
    )
  },
  {
    input: `Close up of a page from a book. The page shows the nobles' Serpens are laying waste to the Demon King's forces`
  },
  { input: '' },
  {
    input: 'Skylin narration:',
    output: () => (
      <h3 data-count='24' style="--word-count:24; --word-count-string:'24';">
        skylin narration:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: ` With their new bestowed powers, the Serpen Riders battled the Demon King's forces, winning victory after victory until finally, only the Demon King remained.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='1' style="--word-count:1; --word-count-string:'1';">
        Panel 2
      </h2>
    )
  },
  { input: `The book is slammed shut.` },
  { input: '' },
  {
    input: `FX:`,
    output: () => (
      <h3 data-count='1' style="--word-count:1; --word-count-string:'1';">
        FX:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` SCHWAAAP` },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='12' style="--word-count:12; --word-count-string:'12';">
        Panel 3
      </h2>
    )
  },
  {
    input: `Low angle showing Skylin, a 17 years old blond young woman sitting on Chase's bed. Chase is a young 6 year old boy. His bedroom has showcases some Ice Kingdom elements such as an arctic bear pelt hanging on the wall.`
  },
  { input: '' },
  {
    input: `chase:`,
    output: () => (
      <h3 data-count='12' style="--word-count:12; --word-count-string:'12';">
        chase:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` What happened to the Demon King?` },
  { input: ` (beat)` },
  { input: ` And what about his Serpen?` },
  { input: '', output: () => <p class='last-line-of-page' /> },
  {
    input: 'P',
    output: () => (
      <h1 data-count='68' style="--word-count:68; --word-count-string:'68';">
        PAGE 6
      </h1>
    )
  }, // 127
  {
    input: 'p',
    output: () => (
      <h2 data-count='21' style="--word-count:21; --word-count-string:'21';">
        Panel 1
      </h2>
    )
  },
  {
    input: `CARLY, a 19 year old noble and daughter of the Ice King, enters the room perturbed. She is dressed ready for bed.`
  },
  { input: '' },
  {
    input: `Carly:`,
    output: () => (
      <h3 data-count='21' style="--word-count:21; --word-count-string:'21';">
        Carly:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` I have a lot that needs to be done, Skylin! ` },
  { input: ` (beat)` },
  { input: ` There isn't time for you to play with my brother.` },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='12' style="--word-count:12; --word-count-string:'12';">
        Panel 2
      </h2>
    )
  },
  { input: `Close up of Chase yelling at his sister, Carly.` },
  { input: '' },
  {
    input: `chase:`,
    output: () => (
      <h3 data-count='12' style="--word-count:12; --word-count-string:'12';">
        chase:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` She has to finish telling me the story of the Demon King!` },
  { input: '' },
  { input: 'p', output: () => <h2>Panel 3</h2> },
  {
    input: `Carly continues to walk past Chase's room, down the hallway towards her own room. She doesn't even bother with a verbal response.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='22' style="--word-count:22; --word-count-string:'22';">
        Panel 4
      </h2>
    )
  },
  {
    input: `Skylin covers Chase's mouth, stopping him from yelling anymore. Chase calms down.`
  },
  { input: '' },
  {
    input: `Skylin:`,
    output: () => (
      <h3 data-count='22' style="--word-count:22; --word-count-string:'22';">
        Skylin:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` When I return, we will finish this story... ` },
  { input: ` (beat)` },
  {
    input: ` And start the story of Sir Thomas the brave and his Serpen Astarot.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='13' style="--word-count:13; --word-count-string:'13';">
        Panel 5
      </h2>
    )
  },
  { input: `Chase submits reluctantly and gives Skylin an angry pout.` },
  { input: '' },
  {
    input: `chase:`,
    output: () => (
      <h3 data-count='13' style="--word-count:13; --word-count-string:'13';">
        chase:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` But I must know, or I won't be able to sleep for weeks.` },
  { input: '', output: () => <p class='last-line-of-page' /> },
  {
    input: 'P',
    output: () => (
      <h1 data-count='91' style="--word-count:91; --word-count-string:'91';">
        PAGE 7
      </h1>
    )
  }, // 159
  {
    input: 'p',
    output: () => (
      <h2 data-count='13' style="--word-count:13; --word-count-string:'13';">
        Panel 1
      </h2>
    )
  },
  {
    input: `Skylin smiles sitting on the edge of Chase's bed. A candle is on his side table.`
  },
  { input: '' },
  {
    input: `:`,
    output: () => (
      <h3 data-count='5' style="--word-count:5; --word-count-string:'5';">
        skylin:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` Good always triumphs over evil.` },
  { input: '' },
  {
    input: `:`,
    output: () => (
      <h3 data-count='8' style="--word-count:8; --word-count-string:'8';">
        SKYLIN:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` I guess that just ruined the ending haha.` },
  { input: '' },
  {
    input: 'p',
    output: () => <h2>Panel 2 </h2>
  },
  { input: `Close up of Skylin blowing out the candle.` },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='38' style="--word-count:38; --word-count-string:'38';">
        Panel 3
      </h2>
    )
  },
  {
    input: `Over Chase's shoulder watching Skylin turn out all the lights in his room.`
  },
  { input: '' },
  {
    input: `chase:`,
    output: () => (
      <h3 data-count='13' style="--word-count:13; --word-count-string:'13';">
        chase:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` Why do you have to go too? Can't you stay here with me?` },
  { input: '' },
  {
    input: `:`,
    output: () => (
      <h3 data-count='25' style="--word-count:25; --word-count-string:'25';">
        skylin:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: ` Your sister will need my help on the journey. I will be back in a few weeks. Serpen Riders aren't allowed servants while in training.`
  },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='18' style="--word-count:18; --word-count-string:'18';">
        Panel 4
      </h2>
    )
  },
  { input: `Skylin kisses Chase on the cheek as he closes his eyes.` },
  { input: '' },
  {
    input: `Chase:`,
    output: () => (
      <h3 data-count='5' style="--word-count:5; --word-count-string:'5';">
        Chase:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` Bring me back a Serpen!` },
  { input: '' },
  {
    input: `Skylin:`,
    output: () => (
      <h3 data-count='13' style="--word-count:13; --word-count-string:'13';">
        skylin:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  { input: ` Haha. Sorry Chase, but I don't think they will let me take one.` },
  { input: '' },
  {
    input: 'p',
    output: () => (
      <h2 data-count='22' style="--word-count:22; --word-count-string:'22';">
        Panel 5
      </h2>
    )
  },
  { input: `Skylin stands in the doorway about to exit Chase's bedroom.` },
  { input: '' },
  {
    input: `Skylin:`,
    output: () => (
      <h3 data-count='22' style="--word-count:22; --word-count-string:'22';">
        skylin:
      </h3>
    ),
    nextTag: 'blockquote'
  },
  {
    input: ` Goodnight little prince, tomorrow your sister leaves to become the next Serpen rider and soon there will be stories written about her.`
  },
  { input: '' } // 197
]
