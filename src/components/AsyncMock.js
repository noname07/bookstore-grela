// import Placeholder from '../../src/img/Placeholder.svg';
import ToKillAMockingbird from '../../src/img/to-kill-a-mockingbird.jpg';
import TheGreatGatsby from '../../src/img/the-great-gatsby.jpg';
import NineteenEightyFour from '../../src/img/1984.jpg';
import APassageToIndia from '../../src/img/a-passage-to-india.jpg';
import Firestarter from '../../src/img/firestarter.jpg';
import TheTrial from '../../src/img/the-trial.jpg';

const items = [
    {
        id: "1",
        title: "To Kill A Mockingbird",
        description: "'Shoot all the bluejays you want, if you can hit 'em, but remember it's a sin to kill a mockingbird.' A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel - a black man falsely charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s. The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man's struggle for justice. But the weight of history will only tolerate so much. To Kill a Mockingbird is a coming-of-age story, an anti-racist novel, a historical drama of the Great Depression and a sublime example of the Southern writing tradition.",
        author: "Harper Lee",
        price: "13.98",
        img: ToKillAMockingbird,
        category: 'BestSellers'
    },
    {
        id: "2",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "The Great Gatsby, F. Scott Fitzgeralds third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
        price: "19.63",
        img: TheGreatGatsby,
        category: 'Coming Soon'
    },
    {
        id: "3",
        title: "1984",
        author: "George Orwell",
        description: "The perfect edition for any Orwell enthusiasts' collection, discover the classic dystopian masterpiece beautifully reimagined by renowned street artist Shepard Fairey Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities. Despite the police helicopters that hover and circle overhead, Winston and Julia begin to question the Party; they are drawn towards conspiracy. Yet Big Brother will not tolerate dissent - even in the mind. For those with original thoughts they invented Room 101. . . First published in 1949, 1984 is George Orwell's terrifying vision of a totalitarian future in which everything and everyone is slave to a tyrannical regime.",
        price: "15.11",
        img: NineteenEightyFour,
        category: 'New releases'
    },
    {
        id: "4",
        title: "Firestarter",
        author: "Stephen King",
        description: "King's classic thriller about a young girl with a terrifying gift. You're a firestarter honey . . . just one big zippo lighter. A year ago, he was an upstanding instructor of English at Harrison State College. Now Andy is on the run with his daughter. A pigtailed girl named Charlie. A girl with an unimaginably terrifying gift. A gift which could be useful to corrupt authorities. Soon Charlie will be caught up in the menace of a fateful drug experiment and a sinister government ploy . . . Let the reader beware: FIRESTARTER is Stephen King at his most mesmerising . . . and menacing.",
        price: "19.90",
        img: Firestarter,
        category: 'BestSellers'
    },
    {
        id: "5",
        title: "The Trial",
        author: "Franz Kafka",
        description: "'It is not necessary to accept everything as true, one must only accept it as necessary' Rediscover Kafka's classic work of psychological horror. The Trial is the terrifying tale of Joseph K, a respectable functionary in a bank, who is suddenly arrested and must defend his innocence against a charge about which he can get no information. A nightmare vision of the excesses of modern bureaucracy wedded to the insanity of twentieth-century totalitarianism has resonated with readers for generations.",
        price: "11.33",
        img: TheTrial,
        category: 'Coming Soon'
    },
];


function promiseWithTimeout(json) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(json);
        }, 30);
    });
}

export const getItems = () => {
    return promiseWithTimeout(items);
};

export const getItemById = (id) => {
    const item = items.find(item => item.id === id);
    return promiseWithTimeout(item);
};

export const getItemsByCategory = (category) => {
    const item = items.filter(item => item.category === category);
    return promiseWithTimeout(item);
}