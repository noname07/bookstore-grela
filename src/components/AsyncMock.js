import Placeholder from '../../src/img/Placeholder.svg'

const products = [
    {
        id: "1",
        title: "To Kill A Mockingbird",
        author: "Harper Lee",
        price: 33.03,
        img: Placeholder,
    },
    {
        id: "2",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 41.50,
        img: Placeholder,
    },
    {
        id: "3",
        title: "1984",
        author: "George Orwell",
        price: 20.55,
        img: Placeholder,
    },
    {
        id: "4",
        title: "A Passage to India",
        author: "E.M. Forster",
        price: 3.24,
        img: Placeholder,
    },
    {
        id: "5",
        title: "To Kill A Mockingbird",
        author: "Harper Lee",
        price: 33.03,
        img: Placeholder,
    },
    {
        id: "6",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 41.50,
        img: Placeholder,
    },
    {
        id: "7",
        title: "1984",
        author: "George Orwell",
        price: 20.55,
        img: Placeholder,
    },
];

export const getProducts = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};