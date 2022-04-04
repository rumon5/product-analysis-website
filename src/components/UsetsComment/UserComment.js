import { useEffect, useState } from "react";

const useComment = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setComments(data));

    }, []);
    return [comments, setComments];
}
export default useComment;



const users = [
    {
        name: 'Jineo Ketlin',
        body: 'Nice Laptop, Thank you',
        rating: '5 Stars',
        id: 1
    },
    {
        name: 'Mikel M0fij',
        body: 'Nothing to say just super Laptop, Thank you so much',
        rating: '5 Stars',
        id: 2
    },
    {
        name: 'Mark Fahim',
        body: 'Good Laptop',
        rating: '4 Stars',
        id: 3
    },

    {
        name: 'Spark Nahim',
        body: 'My favorite Laptop',
        rating: '5 Stars',
        id: 4
    },
    {
        name: 'Josim Khan',
        body: 'It was a really good experience buying this laptop from super shop, Thanks',
        rating: '5 Stars',
        id: 5
    },
    {
        name: 'Ripon bug',
        body: 'Really good Laptop',
        rating: '5 Stars',
        id: 6
    }
]