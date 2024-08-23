// PROJECT: Mini Linter

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
console.log('story: ', story);

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ');
console.log(storyWords);
console.log('original word count: ', storyWords.length);

var betterWords = storyWords.filter(function(w) {
  return w !== 'extremely' && w !== 'literally' && w !== 'actually';
});
console.log('revised story: ', betterWords.join(' '));

var wordsOverused = betterWords.filter(function(w) {
  if (w === 'really') {
    return w;
  } else if (w === 'very') {
    return w;
  } else if (w === 'basically') {
    return w;
  }
});
console.log(wordsOverused);

var overusedWordTally = wordsOverused.reduce(function (acc, w) {
  if (w === 'really') {
    acc['really'] += 1;
  } else if (w === 'very') {
    acc['very'] += 1;
  } else if (w === 'basically') {
    acc['basically'] += 1;
  }

  return acc

}, { really: 0, very: 0, basically: 0 });
console.log(overusedWordTally)

var sentenceCount = storyWords.reduce(function (acc, w) {
  if (w.includes('.')) {
    acc['sentences'] += 1;
  } else if (w.includes('!')) {
    acc['sentences'] += 1;
  }

  return acc

}, { sentences: 0 });
console.log(sentenceCount);
