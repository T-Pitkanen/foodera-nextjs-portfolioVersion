export const products = [
    {
        "title": "Rainbow Vegetable Sandwich",
        "time": "15 Minutes",
        "serves": 1,
        "image": "/products/product_01.jpg",
        "price": 10.50,
        "priceBefore": 11.50,
        "explore": true,
    },
    {
        "title": "Cheesecake Stuffed Strawberries",
        "time": "20 Minutes",
        "serves": 1,
        "image": "/products/product_02.jpg",
        "price": 27.00,
        "priceBefore": 33.50,
        "explore": true,
    },
    {
        "title": "Sandwich with Cucumber, Dill, and Cream Cheese",
        "time": "15 - 20 Minutes",
        "serves": 1,
        "image": "/products/product_03.jpg",
        "price": 13.50,
        "priceBefore": 17.50,
        "explore": true,
    },
    {
        "title": "BLT Sandwich with Avocado and Sprouts",
        "time": "25 Minutes",
        "serves": 1,
        "image": "/products/product_04.jpg",
        "price": 10.50,
        "priceBefore": 0,
        "explore": false,
    },
    {
        "title": "Rye Sandwich with Carrot and Fennel Salad",
        "time": "20 Minutes",
        "serves": 1,
        "image": "/products/product_05.jpg",
        "price": 27.00,
        "priceBefore": 33.50,
        "explore": false,
    },
    {
        "title": "Rye bread with sliced meat and salad",
        "time": "15 - 20 Minutes",
        "serves": 1,
        "image": "/products/product_06.jpg",
        "price": 21.25,
        "priceBefore": 31.50,
        "explore": false,
    }
];

export const reviews = [
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Maccy Doe - Front End',
        imagePath: '/reviews/maccy.jpg'
    },
    {
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        name: 'Piet Hein - Back End',
        imagePath: '/reviews/piet.jpg'
    }
];

export const affiliates = [
    {
        title: 'Cubico partner in Food',
        imagePath: '/affiliates/affiliate_01.png'
    },
    {
        title: 'King partner in Food',
        imagePath: '/affiliates/affiliate_02.png'
    },
    {
        title: 'Hexagon partner in Food',
        imagePath: '/affiliates/affiliate_03.png'
    },
    {
        title: 'Coffee partner in Food',
        imagePath: '/affiliates/affiliate_04.png'
    },
    {
        title: 'Mates partner in Food',
        imagePath: '/affiliates/affiliate_05.png'
    }
];

export const faqs = [
    {
        question: 'Is Foodera Bread really baked fresh each day?',
        answer: '<p>Far far away, behind the word mountains, far from the <em>countries Vokalia and Consonantia</em>, <b>there live the blind texts</b>. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: 'Do you bake breads containing animal fats or products?',
        answer: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <b>there live the blind texts</b>. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: 'Can I order your products online?',
        answer: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <b>there live the blind texts</b>. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: ' When are you opening a shop near me??',
        answer: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: 'Is Foodera Bread really baked fresh each day?',
        answer: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: 'Do you bake breads containing animal fats or products?',
        answer: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p><p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: 'Can I order your products online?',
        answer: '<p>Separated they live in Bookmarksgrove right at <em>the coast of the Semantics</em>, a large language.</p>'
    },
    {
        question: 'Have you got a gluten free bread?',
        answer: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: 'Are your products suitable for vegetarians?',
        answer: '<p>Far far away, behind the word mountains, far from the <b>countries Vokalia</b> and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>'
    },
    {
        question: 'Can I specify a delivery date when I order online?',
        answer: '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in <em>Bookmarksgrove</em> right at the coast of the Semantics, a large language.</p>'
    },
];

export const subscribers = [
    {
        "name": "Anders Christensen",
        "email": "anders@mediacollege.dk",
        "message": "Jeg er en subscriber"
    }
];

export const createDummyOrderWithProductId = (id, amount = 1) => [
    {
      "products": [{
          "id": id.toString(),
          "amount" : amount
      }],
      "email" : "anders@mediacollege.dk"
    }
];