// Взимаме canvas
let canvas = document.querySelector('#bg-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

// Настройки
let mouse = { x: undefined, y: undefined };
let maxRadius = 25; // максимален размер на кръгчето

// Цветова палитра
let colorArray = [
    '#f596beff',
    '#f9c4d2',
    '#fcd6e3',
    '#f7b0c3',
    '#eeb0c9'
];

// Проследяване на мишката
window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

// Адаптация при resize
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Circle обект с блестящ ефект
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.pulse = Math.random() * 0.03 + 0.01; // скорост на трептене

    this.draw = function() {
        c.shadowColor = this.color;
        c.shadowBlur = 20; // голямо сияние
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.shadowBlur = 0;
    };

    this.update = function() {
        // Отскачане от стените
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        // Пулсиращ ефект
        this.radius += this.pulse;
        if(this.radius > maxRadius || this.radius < this.minRadius) this.pulse = -this.pulse;

        this.draw();
    };
}

let circleArray = [];

// Инициализация на кръгчета
function init() {
    circleArray = [];
    for (let i = 0; i < 30; i++) { // по-малко кръгчета
        let radius = Math.random() * 8 + 5; // радиус 5-13px
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 0.5;
        let dy = (Math.random() - 0.5) * 0.5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

// Анимация
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

// Стартираме
init();
animate();
