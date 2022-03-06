const { Post } = require(`../models`);

const postdata = [
  {
    title: `TikTok suspends new video uploads and livestreaming in Russia`,
    message: `TikTok will temporarily restrict users in Russia from livestreaming and uploading new videos to its platform, the company announced on Sunday.`,
    user_id: 10
  },
  {
    title: `Apple could announce a new external display at its 'Peek Performance' event`,
    message: `If you're not excited about Apple's upcoming Peek Performance keynote, you're not the only one. According to most reports, the company will announce new iPhone SE and iPad Air models at the event.`,
    user_id: 8
  },
  {
    title: `Silicon Valley Congressman Ro Khanna says his solution to fixing social media companies would be to hire philosophers and thinkers`,
    message: `Rep. Ro Khanna said he would advise social media companies looking to make a positive change in the world to hire humanities majors and liberal arts thinkers.`,
    user_id: 1
  },
  {
    title: `Amazon's Fire TV Stick 4K drops to $30 in new streaming device sale`,
    message: `If you're looking to add a new streaming device to your living room setup or replace an aging one, you can grab one of Amazon's Fire TV devices now for less. The company has discounted many of its streaming devices to near record-low prices, including the Fire TV Stick 4K, which is only $30 right now. `,
    user_id: 4
  },
  {
    title: `Here's what we know about Starlink in Ukraine so far`,
    message: `The day after the attack, Mykhailo Fedorov, Ukraine's vice prime minister, who also oversees digital transformation, posted a tweet in which he urged SpaceX CEO Elon Musk to provide Ukraine with Starlink stations.`,
    user_id: 7
  },
  {
    title: `Fintech Roundup: Banks beginning to view fintechs as frenemies`,
    message: `Since fintech became a thing, there has been inherent friction between incumbents and startups. But something I’ve noticed over the years is that while in some cases, there will always be competition (especially between digital banks and traditional ones), there is also some cooperation generally between the two because let’s face it, banks need to stay competitive.`,
    user_id: 4
  },
  {
    title: `Here's how to get help and send automatic alerts to loved ones on your phone`,
    message: `When you make a call with Apple's Emergency SOS feature, your iPhone does a few things. It will call the local emergency number and alert your emergency contacts via text message.`,
    user_id: 1
  },
  {
    title: `Internet backbone provider Cogent cuts off service to Russia`,
    message: `Cogent Communications, an internet backbone provider that carries approximately 25 percent of all global web traffic, has begun cutting ties with Russian businesses in response to the country’s invasion of Ukraine. `,
    user_id: 1
  },
  {
    title: `Cogent News`,
    message: `The move is expected to disrupt and slow down internet connectivity. Some of Cogent’s Russian clients include state-owned telecom operator Rostelecom, one of the country’s largest internet providers, and wireless carriers Megafon and Veon`,
    user_id: 9
  },
  {
    title: `Internet Access`,
    message: `Some experts worry the move will also prevent Russians from accessing information that doesn’t come from the Kremlin. “I would like to convey to people all over the world that if you turn off the Internet in Russia, then this means cutting off 140 million people from at least some truthful information,” Mikhail Klimarev`,
    user_id: 5
  },
  {
    title: `Twitter Bans Users`,
    message: `A Twitter spokesperson confirmed to Insider the platform removed the "spammy accounts" for participating in "inauthentic amplification," after several of the tweets went mysteriously viral despite coming from accounts with relatively few followers and stock imagery for profile pictures, as first reported by NBC.`,
    user_id: 3
  },
  {
    title: `Node 17 in Development`,
    message: `Node 17 will include Express and Dotenv packages. No need to install these packages.`,
    user_id: 10
  },
  {
    title: `RedHat X11 - Docker Native`,
    message: `RedHat working on a Docker native version of its OS and it will likely reduce computing overhead by over 30%`,
    user_id: 8
  },
  {
    title: `Everyone wants a piece of Palo Alto?`,
    message: `Dell may purchase Palo Alto to strengthen is edge security lineup, but rumor has it that Cisco is also a bidder.`,
    user_id: 3
  },
  {
    title: `iPhone 14xi`,
    message: `Apple iPhone 14xi is under development and it may use a foldable screen. Crazy right?`,
    user_id: 3
  },
  {
    title: `AMD launches its next generation Chipset & it is wicked fast!`,
    message: `Got a preview of AMD's new AI chipset and it is quantum like in its speed!`,
    user_id: 7
  },
  {
    title: `Crypto Currency`,
    message: `Ethereum crypto may buy out Dogge Coin! Huge news`,
    user_id: 6
  },
  {
    title: `Cyber Security`,
    message: `Tech companies have also begun cracking down on hacking from blackhat players`,
    user_id: 4
  },
  {
    title: `SnapChat Heat Map`,
    message: `Snapchat users around the world can submit their Snaps to the heat map, which shows the concentration of Snaps taken by location. Areas that appear blue on the map indicate that relatively few people posted Snaps in the area, whereas red areas on the map indicate that many people posted Snaps there.`,
    user_id: 6
  },
  {
    title: `Twitter Accounts`,
    message: `The tweets were first identified by Owen Jones, an assistant professor of Middle East studies and digital humanities at Hamad Bin Khalifa University in Qatar, who told NBC he noticed "lots of accounts demonstrating inauthentic activity and astroturfing."`,
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
