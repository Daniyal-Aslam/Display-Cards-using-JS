var cards = document.getElementById('cards');

let data = [
    {
        img: 'https://images.unsplash.com/photo-1626472154476-d3158e9e6053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        heading: 'Card 1',
        text: 'Card 1 is very beautiful'
    },
    {
        img: 'https://images.unsplash.com/photo-1680535131131-4d79b312d5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80',
        heading: 'Card 2',
        text: 'Card 2 is very beautiful'
    },
    {
        img: 'https://images.unsplash.com/photo-1659482633371-c51d3a02bc81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
        heading: 'Card 3',
        text: 'Card 3 is very beautiful'
    },
    {
        img: 'https://images.unsplash.com/photo-1659482633371-c51d3a02bc81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
        heading: 'Card 4',
        text: 'Card 4 is very beautiful'
    },
]


var magic = []

for (i = 0; i < data.length; i++) {
    // ========== Creating Column ==========
    var col = document.createElement('div');
    col.setAttribute('class', 'col-lg-4');

    // ========== Creating Card ==========
    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    col.appendChild(card);

    // ========== Creating Card Imaghe ==========
    var image = document.createElement('img');
    image.setAttribute('class', 'card-img-top');
    image.setAttribute('src', data[i].img);
    card.appendChild(image);

    // ========== Creating Card Body ==========
    var card_body = document.createElement('div');
    card_body.setAttribute('class', 'card-body');
    card.appendChild(card_body);

    // ========== Creating Card Heading ==========
    var heading = document.createElement('h4');
    heading.setAttribute('class', 'card-title');
    heading.textContent = data[i].heading;
    card_body.appendChild(heading);

    // ========== Creating Card Text ==========
    var text = document.createElement('p');
    text.setAttribute('class', 'card-text');
    text.textContent = data[i].text;
    card_body.appendChild(text);
    cards.appendChild(col);
}

 
