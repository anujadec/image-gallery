const images = [
  {
    title: 'Blade Runner 2049',
    alt: 'Blade Runner 2049 poster',
    src:
      'http://cdn-static.denofgeek.com/sites/denofgeek/files/2017/09/blade-runner-2049-main.jpg'
  },
  {
    title: 'Alien Covenant',
    alt: 'Alien covenant poster',
    src:
      'http://cdn1.thr.com/sites/default/files/2017/05/alien-covenant-ac_152_00459216_rgb_copy_-_h_2017.jpg'
  },
  {
    title: 'Goonies',
    alt: 'Goonies still',
    src:
      'http://www.indiewire.com/wp-content/uploads/2012/06/5-things-you-might-not-know-about-the-goonies.jpg'
  },
  {
    title: 'Stranger Things',
    alt: 'Stranger things poster',
    src:
      'https://az616578.vo.msecnd.net/files/2016/07/23/636048503560650585-715246431_strangerthingsposter-1.jpg'
  },
  {
    title: 'Terminator',
    alt: 'Terminator poster',
    src:
      'https://pmcdeadline2.files.wordpress.com/2013/12/terminator-arnold-as-terminator__131206182643.jpeg'
  },
  {
    title: 'Tiger cub + mom',
    alt: 'Tiger cub with mither',
    src:
      'http://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/Q-Z/tiger-mom-cub.ngsversion.1475241173666.jpg'
  },
  {
    title: 'If I fits I sits',
    alt: 'Kitten in tissue box',
    src:
      'https://peopledotcom.files.wordpress.com/2017/05/kitten-tissues-3.jpg?crop=0px%2C0px%2C2000px%2C1050px&resize=1200%2C630'
  },
  {
    title: 'Purrr',
    alt: 'Cat being pet by male owner',
    src:
      'https://www.rd.com/wp-content/uploads/sites/2/2016/04/13-cat-wants-to-tell-you-hugging.jpg'
  },
  {
    title: 'Stranger kids',
    alt: 'Cast of Stranger Things',
    src:
      'https://brightcove04pmdo-a.akamaihd.net/3653334524001/3653334524001_5317729849001_5317702884001-vs.jpg?pubId=3653334524001&videoId=5317702884001'
  },
  {
    title: 'Tiger cub meets adult tiger',
    alt: 'Tiger cub meets adult tiger',
    src: 'https://i.ytimg.com/vi/_UbDeqPdUek/maxresdefault.jpg'
  },
  {
    title: 'Kittens of instagram',
    alt: 'Three kittens in a basket',
    src:
      'https://i.amz.mshcdn.com/QeSnNurAAVbLYDKbmh4GEjgqzbY=/1200x630/2017%2F05%2F24%2F07%2F10b57942c5d54af69b451223f2fc70ef.5a8f5.jpg'
  },
  {
    title: "The cat's meow",
    alt: 'Angry kitty',
    src:
      'http://images.mentalfloss.com/sites/default/files/502332-iStock-520546640.jpg?resize=1100x740'
  },
  {
    title: 'Hawk in flight',
    alt: 'Flying hawk',
    src:
      'https://lh3.ggpht.com/aTLOyLq-XMqy55hxHon69zQ_2DPiHQj_t6qYU4N-QOMG-9caiv6XYbgaNVr6KPh9bw=h900'
  },
  {
    title: 'Stranger diving',
    alt: 'Stranger things still',
    src: 'https://i.ytimg.com/vi/5kRo6Yg091o/maxresdefault.jpg'
  },
  {
    title: 'Can bite your face',
    alt: 'Hawk close-up',
    src:
      'https://i.pinimg.com/originals/ca/1c/61/ca1c61ad8843f15fea94766f5191dbfe.jpg'
  },
  {
    title: "What'd you say?",
    alt: 'Owl yawning',
    src: 'https://i.ytimg.com/vi/Ufkcx-UqljM/maxresdefault.jpg'
  },
  {
    title: 'Terminator skeleton',
    alt: 'Terminator skeleton',
    src:
      'http://cdn1-www.superherohype.com/assets/uploads/gallery/terminator-genisys/terminator-genisys-028.jpg'
  },
  {
    title: 'Snow owl in flight',
    alt: 'Snow owl in flight',
    src:
      'https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA0Mi83OTQvb3JpZ2luYWwvc25vd3ktb3dsLTExMDcxNS0wMi5qcGc='
  },
  {
    title: "How's my hair?",
    alt: 'Owl with wind-blown feathers',
    src: 'https://farm9.staticflickr.com/8659/16167077194_d4a7a433d8_b.jpg'
  },
  {
    title: 'My name is Joey',
    alt: 'Baby kangaroo',
    src: 'https://i.redd.it/s4uc3vhnwhfz.jpg'
  },
  {
    title: 'Temple tiger',
    alt: 'Tiger with thailand monnk in buddhist temple',
    src:
      'https://cdn.theatlantic.com/assets/media/img/photo/2016/06/the-taking-of-thailands-temple-tige/t01_RTR4PA23/main_900.jpg?1464804437'
  },
  {
    title: 'Koala',
    alt: 'Koala bear in tree',
    src: 'https://i.ytimg.com/vi/1R-QFQGWYuc/maxresdefault.jpg'
  },
  {
    title: 'Grumpy Cat',
    alt: 'Grumpy cat getting fur brushed',
    src:
      'http://s.newsweek.com/sites/www.newsweek.com/files/2016/05/25/saudi-arabia-cat-ban.jpg'
  },
  {
    title: 'Trotting grizzly',
    alt: 'Grizzly bear walking in a river',
    src:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/30/08/yellowstone-grizzly-bear-.jpg'
  },
  {
    title: 'Grizzly flowers',
    alt: 'Grizzly bear walking in meadow with wild flowers',
    src:
      'https://www.yellowstonepark.com/.image/t_share/MTQ3MzIwMDY4NzkzNjQwMzk4/bear-grizzly-flowers-light_dp_680.jpg'
  },
  {
    title: 'Cat eyes',
    alt: 'Cat portrait',
    src: 'https://static.pexels.com/photos/20787/pexels-photo.jpg'
  }
]

export default images
