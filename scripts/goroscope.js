var date = '2023-10-10'; 

window.onload = function() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=BORguzBPp7h4biUGGpMlHbvCmcyADsiqOinRJZoZ&date=' + date)
        .then(response => response.json())
        .then(data => {
            document.getElementById('goroscope-img').src = data.url;
            document.getElementById('goroscope-text').textContent =  generateRandomText();
        });
};

function generateRandomText() {
    var texts = [
        'Today is a great day to explore new culinary horizons! Consider trying a cuisine you have never experienced before, like Thai, Indian, or Mexican.',
        'Your lucky food item for today is pizza. Whether it is a classic Margherita, a loaded supreme, or a unique artisanal creation, indulge in some delicious pizza for a satisfying meal.',
        'Why not treat yourself to your favorite dessert? A scoop of rich, creamy ice cream, a warm slice of homemade apple pie, or a decadent chocolate lava cake - the choice is yours, but do not deny yourself this sweet pleasure today.',
        'For a healthier option, consider a fresh salad loaded with colorful vegetables and topped with a zesty vinaigrette. It is a great way to nourish your body and feel refreshed.',
        'If you are feeling adventurous, experiment with cooking a new recipe at home. Grab some ingredients and embark on a culinary journey. Who knows, you might discover a hidden talent for cooking!',
        'If you are on the go, do not forget to stay hydrated. A refreshing fruit smoothie or a bottle of sparkling water can be the perfect companion for your busy day.',
        'Lastly, remember that food is not just about nourishment; it is also about enjoyment and connection. Share a meal with a friend or loved one, and savor the moments together.',
    ];
    
    var index = Math.floor(Math.random() * texts.length);
    return texts[index];
}
