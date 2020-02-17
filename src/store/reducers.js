const initialState = {
  quotes: [
    {
      quote: 'The brightest light casts the darkest shadow.',
      author: 'Jesse C. Scott',
      title: 'The Darker Side of Life'
    },
    {
      quote:
        "He turns off the techno-shit in his goggles. All it does is confuse him; he stands there reading statistics about his own death even as it's happening to him. Very post-modern.",
      author: 'Neal Stephenson',
      title: 'Snow Crash'
    },
    {
      quote: 'The beautiful creatures are often the most dangerous.',
      author: 'Cindy Pon',
      title: 'Want'
    },
    {
      quote:
        "What use was time to those who'd soon achieve Digital Immortality?",
      author: 'Clyde Dsouza',
      title: 'Memories With Maya'
    },
    {
      quote:
        'The sound it made was like a world ending, like the wires that hold heaven snapping and coiling across the sky.',
      author: 'William Gibson',
      title: 'Burning Chrome'
    },
    {
      quote: 'THIS REVOLUTION IS FOR DISPLAY PURPOSES ONLY.',
      author: 'Steven Kotler',
      title: 'Last Tango in Cyperspace'
    },
    {
      quote:
        "It's a poor sort of memory that only works backwards. I wish I could just slip up and down the timeline as I pleased. It's almost what I do anyway.",
      author: 'Zachary Mason',
      title: 'Void Star'
    },
    {
      quote:
        "Over-reliance on digital infrastructure. If you don't exist in the infrastructure, where do you exist?",
      author: 'Lauren C. Teffeau',
      title: 'Implanted'
    },
    {
      quote:
        'These days you couldn’t keep things separate even in your mind. If we could only disconnect—',
      author: 'Ken MacLeod',
      title: 'The Star Fraction'
    },
    {
      quote:
        'Slums are always a marvel; how human desperation can seem to warp the very laws of physics.',
      author: 'Sam J. Miller',
      title: 'Blackfish City'
    },
    {
      quote:
        'Directional acoustics. In a place that sells sounds, they’re a must.',
      author: 'Alex Livingston',
      title: 'Glitch Rain'
    },
    {
      quote:
        'Fads swept the youth of the sprawl at the speed of light; entire subcultures could rise overnight, thrive for a dozen weeks, and then vanish utterly.',
      author: 'William Gibson',
      title: 'Neuromancer'
    },
    {
      quote: 'Those who wake...do not regret the dream.',
      author: 'Raphael Carter',
      title: 'The Fortunate Fall'
    },
    {
      quote:
        'I always forget that half of the people who watch us fly are waiting to see us die.',
      author: 'Maureen F. McHugh',
      title: 'China Mountain Zhang'
    },
    {
      quote:
        'It is a certainty, not just a conviction, the way believing in God is a conviction, but believing in gravity is a certainty.',
      author: 'Tade Thompson',
      title: 'Rosewater'
    },
    {
      quote: "That's how it ought to be... Tech to live not live to tech.",
      author: 'Joseph MacKinnon',
      title: 'Cypulchre'
    },
    {
      quote:
        'I saw them do it. Chip vandals. Right there on Commerce, behind the main road...They cut his head open. They know I watched.',
      author: 'Anna L. Davis',
      title: 'Open Source'
    },
    {
      quote:
        'In America profit is everything. They would never suspect honor. Money, greed, even revenge. But never honor.',
      author: 'Misha',
      title: 'Red Spider, White Web'
    },
    {
      quote:
        "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.",
      author: 'Roy Batty',
      title: 'Blade Runner'
    },
    {
      quote:
        'The human eye is a wonderful device. With a little effort, it can fail to see even the most glaring injustice.',
      author: 'Richard K. Morgan',
      title: 'Altered Carbon'
    },
    {
      quote:
        'Man is an individual only because of his intangible memory. But memory cannot be defined, yet it defines mankind.',
      author: 'Puppet Master',
      title: 'Ghost in the Shell'
    },
    {
      quote: "My job isn't to believe or disbelieve. It is to act or not act!",
      author: 'Colonel Shikishima',
      title: 'Akira'
    },
    {
      quote:
        "True freedom can't lean on anything. It's transient, lonely, and arduous.",
      author: 'Yoshii Kazuho',
      title: 'Texhnolyze'
    },
    {
      quote:
        "People only have substance within the memories of other people. And that's why there were all kinds of me's. There weren't a lot of me's per se, I was just inside all sorts of people, that's all.",
      author: 'Lain Iwakura',
      title: 'Serial Experiments: Lain'
    },
    {
      quote:
        "This epidemic leads innocent people to their deaths, and yet it's pathogen will never be eradicated. This is a disease called serenity, a form of death that people have wished for.",
      author: 'Rikako Oryo',
      title: 'Psycho-Pass'
    },
    {
      quote: 'He named you. Must be special.',
      author: 'K',
      title: 'Blade Runner 2049'
    }
  ],
  randomIndex: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_QUOTE':
      return Object.assign({}, state, {
        randomIndex: Math.floor(Math.random() * state.quotes.length)
      });
    default:
      return state;
  }
};

export default reducer;
