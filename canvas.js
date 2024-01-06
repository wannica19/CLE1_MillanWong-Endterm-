var wheelCanvas = document.getElementById('wheelCanvas');
        var wheelContext = wheelCanvas.getContext('2d');

        
        wheelContext.fillStyle = 'black';
        wheelContext.beginPath();
        wheelContext.arc(100, 100, 80, 0, 2 * Math.PI);
        wheelContext.fill();

       
        wheelContext.fillStyle = 'gray';
        wheelContext.beginPath();
        wheelContext.arc(100, 100, 20, 0, 2 * Math.PI);
        wheelContext.fill();


var sailboatCanvas = document.getElementById('sailboatCanvas');
        var sailboatContext = sailboatCanvas.getContext('2d');

        // Water
        sailboatContext.fillStyle = 'blue';
        sailboatContext.fillRect(0, 150, 200, 50);

        // Sail
        sailboatContext.fillStyle = 'grey';
        sailboatContext.beginPath();
        sailboatContext.moveTo(50, 50);
        sailboatContext.lineTo(150, 50);
        sailboatContext.lineTo(100, 10);
        sailboatContext.closePath();
        sailboatContext.fill();

        // Mast
        sailboatContext.fillStyle = 'brown';
        sailboatContext.fillRect(95, 50, 10, 100);

        // Boat
        sailboatContext.fillStyle = 'brown';
        sailboatContext.fillRect(50, 100, 100, 50);


 var iceCreamCanvas = document.getElementById('iceCreamCanvas');
        var iceCreamContext = iceCreamCanvas.getContext('2d');

        // Cone
        iceCreamContext.fillStyle = 'saddlebrown';
        iceCreamContext.beginPath();
        iceCreamContext.moveTo(100, 200);
        iceCreamContext.lineTo(150, 100);
        iceCreamContext.lineTo(50, 100);
        iceCreamContext.closePath();
        iceCreamContext.fill();

        // Ice Cream
        iceCreamContext.fillStyle = 'pink';
        iceCreamContext.beginPath();
        iceCreamContext.arc(100, 100, 50, 0, Math.PI, false);
        iceCreamContext.fill();

        // Cherry
        iceCreamContext.fillStyle = 'red';
        iceCreamContext.beginPath();
        iceCreamContext.arc(100, 100, 10, 0, 2 * Math.PI);
        iceCreamContext.fill();

var flowerVaseCanvas = document.getElementById('flowerVaseCanvas');
        var flowerVaseContext = flowerVaseCanvas.getContext('2d');

        // Vase
        flowerVaseContext.fillStyle = 'brown';
        flowerVaseContext.fillRect(80, 80, 40, 80);

        // Flowers
        flowerVaseContext.fillStyle = 'red';
        flowerVaseContext.beginPath();
        flowerVaseContext.arc(100, 60, 20, 0, 2 * Math.PI);
        flowerVaseContext.arc(80, 80, 20, 0, 2 * Math.PI);
        flowerVaseContext.arc(120, 80, 20, 0, 2 * Math.PI);
        flowerVaseContext.fill();


        var lipstickCanvas = document.getElementById('lipstickCanvas');
        var lipstickContext = lipstickCanvas.getContext('2d');

        lipstickContext.fillStyle = 'gray';
        lipstickContext.fillRect(70, 80, 60, 120);

        lipstickContext.fillStyle = 'red';
        lipstickContext.fillRect(80, 40, 40, 40);

        lipstickContext.fillStyle = 'red';
        lipstickContext.beginPath();
        lipstickContext.moveTo(80, 40);
        lipstickContext.lineTo(100, 0);
        lipstickContext.lineTo(120, 40);
        lipstickContext.closePath();
        lipstickContext.fill();

var smileyFaceCanvas = document.getElementById('smileyFaceCanvas');
        var smileyFaceContext = smileyFaceCanvas.getContext('2d');

        // Face
        smileyFaceContext.fillStyle = 'yellow';
        smileyFaceContext.beginPath();
        smileyFaceContext.arc(100, 100, 60, 0, 2 * Math.PI);
        smileyFaceContext.fill();

        // Eyes
        smileyFaceContext.fillStyle = 'black';
        smileyFaceContext.beginPath();
        smileyFaceContext.arc(80, 80, 10, 0, 2 * Math.PI);
        smileyFaceContext.arc(120, 80, 10, 0, 2 * Math.PI);
        smileyFaceContext.fill();

        // Mouth
        smileyFaceContext.strokeStyle = 'red';
        smileyFaceContext.lineWidth = 3;
        smileyFaceContext.beginPath();
        smileyFaceContext.arc(100, 110, 30, 0.2 * Math.PI, 0.8 * Math.PI);
        smileyFaceContext.stroke();


var fishBowlCanvas = document.getElementById('fishBowlCanvas');
        var fishBowlContext = fishBowlCanvas.getContext('2d');

        // Water
        fishBowlContext.fillStyle = 'lightblue';
        fishBowlContext.fillRect(0, 0, 200, 200);

        // Bowl
        fishBowlContext.strokeStyle = 'blue';
        fishBowlContext.lineWidth = 5;
        fishBowlContext.beginPath();
        fishBowlContext.arc(100, 100, 80, 0, 2 * Math.PI);
        fishBowlContext.stroke();

        // Fish
        fishBowlContext.fillStyle = 'orange';
        fishBowlContext.beginPath();
        fishBowlContext.arc(100, 100, 40, 0, 2 * Math.PI);
        fishBowlContext.fill();

        // Eyes
        fishBowlContext.fillStyle = 'black';
        fishBowlContext.beginPath();
        fishBowlContext.arc(85, 90, 5, 0, 2 * Math.PI);
        fishBowlContext.arc(115, 90, 5, 0, 2 * Math.PI);
        fishBowlContext.fill();

var carCanvas = document.getElementById('carCanvas');
        var carContext = carCanvas.getContext('2d');

        // Body
        carContext.fillStyle = 'blue';
        carContext.fillRect(30, 110, 140, 40);

        // Roof
        carContext.fillStyle = 'blue';
        carContext.beginPath();
        carContext.moveTo(30, 110);
        carContext.lineTo(100, 60);
        carContext.lineTo(170, 110);
        carContext.closePath();
        carContext.fill();

        // Wheels
        carContext.fillStyle = 'black';
        carContext.beginPath();
        carContext.arc(50, 150, 15, 0, 2 * Math.PI);
        carContext.arc(150, 150, 15, 0, 2 * Math.PI);
        carContext.fill();