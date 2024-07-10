const arrayFirstSentence=[
    'Life\'s journey is filled with ups and downs, but every step is meaningful.',
    'Self-belief is the key to unlocking your potential.',
    'A positive mindset can change your life.',
    'Challenges are opportunities in disguise.',
    'Persistence is the path to success.',
    'Your dreams are worth pursuing.',
    'Change is a part of life and growth.',
    'Your actions can inspire those around you.',
    'Failure is a stepping stone to success.',
    'Gratitude transforms your perspective.',
    'Ideas remain dreams without action.',
    'You are worthy of love and respect.',
    'Focus on your goals and avoid distractions.',
    'Learning is a lifelong journey.',
    'Resilience is your inner strength.',
    'Kindness has a ripple effect.',
    'Trust that everything happens for a reason.',
    'Celebrate your progress, no matter how small.',
    'Humility keeps you grounded.',
    'Your passion is your driving force.'
];
const arraySecondSentence=[
    'Embrace your path and trust the process.',
    'Trust in your abilities and stay confident.',
    'Focus on the good and stay optimistic.',
    'Face them with courage and determination.',
    'Keep pushing forward, even when it\'s tough.',
    'Dare to dream big and take bold steps.',
    'Embrace it with an open mind and a willing heart.',
    'Lead by example and spread positivity.',
    'Learn from your mistakes and keep moving forward.',
    'Focus on what you have and appreciate the little things.',
    'Take the first step towards your goals.',
    'Value yourself and prioritize self-care.',
    'Keep your eyes on the prize.',
    'Stay curious and open to new knowledge.',
    'Bounce back from setbacks with determination.',
    'One act of kindness can change someone\'s day.',
    'Have faith in your journey and stay patient.',
    'Each step forward is an achievement.',
    'Stay humble and open to learning from others.',
    'Pursue what you love with all your heart.'
];
const arrayThirdSentence=[
    'Each experience makes you stronger and wiser.',
    'You are capable of achieving greatness.',
    'Your outlook influences your reality.',
    'Each obstacle makes you stronger.',
    'Your hard work will pay off.',
    'The sky is the limit.',
    'Every change brings new opportunities.',
    'Together, we can make a difference.',
    'Each setback is a setup for a comeback.',
    'A grateful heart attracts abundance.',
    'Small actions lead to big results.',
    'Your well-being is important.',
    'Consistent effort leads to success.',
    'Growth comes from continuous learning.',
    'You have the power to overcome anything.',
    'Be the reason someone smiles today.',
    'Good things take time.',
    'Recognize and reward your efforts',
    'True success is found in humility.',
    'Passion fuels purpose and fulfillment.'
];

const arrayAsciiArt=[
    '⊂(◉‿◉)つ',
    '(ㆆ _ ㆆ)',
    '☜(⌒▽⌒)☞',
    '⤜(ⱺ ʖ̯ⱺ)⤏',
    'ʕ·͡ᴥ·ʔ',
    '(˵ ͡° ͜ʖ ͡°˵)',
    '( ͡° ᴥ ͡°)',
    '(͡ ° ͜ʖ ͡ °)',
    '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄',
    '¯\(°_o)/¯',
    '༼ つ ◕_◕ ༽つ'
];

function getRandomNumbers(){
    let arrayRandomNumbers=[];
    for(let i=0;i<3;i++){
        arrayRandomNumbers.push(Math.floor(Math.random()*20));
    }
    return arrayRandomNumbers;
}

function assignRandomPhrases(arr1,arr2,arr3,arr4){
    let arrayNumbers=getRandomNumbers();
    let arrayResultPhrases=[];
    arrayResultPhrases.push(arr1[arrayNumbers[0]]);
    arrayResultPhrases.push(arr2[arrayNumbers[1]]);
    arrayResultPhrases.push(arr3[arrayNumbers[2]]);
    arrayResultPhrases.push(arr4[Math.floor(Math.random()*11)]);
    return arrayResultPhrases;
}

console.log(assignRandomPhrases(arrayFirstSentence,arraySecondSentence,arrayThirdSentence,arrayAsciiArt));