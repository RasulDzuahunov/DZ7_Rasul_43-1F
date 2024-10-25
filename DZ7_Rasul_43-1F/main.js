        class Cars {
        constructor(model, color, wheels = 4) {
            this.model = model;
            this.color = color;
            this.wheels = wheels;
        }

        start() {
            console.log("Машина заведена");
        }
    }

    class Truck extends Cars {
        constructor(model, color, wheels, maxLoad) {
            super(model, color, wheels);
            this.maxLoad = maxLoad;
        }
    }

    class ElectricCar extends Cars {
        constructor(model, color, wheels, batteryCapacity) {
            super(model, color, wheels);
            this.batteryCapacity = batteryCapacity;
        }
    }

    class SportsCar extends Cars {
        constructor(model, color, wheels, maxSpeed) {
            super(model, color, wheels);
            this.maxSpeed = maxSpeed;
        }
    }

    const truck = new Truck("Volvo FH16", "White", 6, 25000);
    const electricCar = new ElectricCar("Tesla Model S", "Red", 4, 100);
    const sportsCar = new SportsCar("Porsche 911", "Black", 4, 320);

    truck.start();
    electricCar.start();
    sportsCar.start();

    console.log(truck);
    console.log(electricCar);
    console.log(sportsCar);

        class TrafficLight {
            constructor() {
                this.redLight = document.querySelector('.red-light');
                this.yellowLight = document.querySelector('.yellow-light');
                this.greenLight = document.querySelector('.green-light');
                this.message = document.querySelector('.message');
            }

            resetLights() {
                this.redLight.classList.remove('red');
                this.yellowLight.classList.remove('yellow');
                this.greenLight.classList.remove('green');
            }

            changeLight() {
                this.resetLights();

                const color = prompt("Введите цвет (Красный, Желтый, Зеленый):").toLowerCase();

                if (color === 'красный') {
                    this.redLight.classList.add('red');
                    this.message.textContent = 'STOP';
                } else if (color === 'желтый') {
                    this.yellowLight.classList.add('yellow');
                    this.message.textContent = 'WAIT';
                } else if (color === 'зеленый') {
                    this.greenLight.classList.add('green');
                    this.message.textContent = 'GO';
                } else {
                    alert('Неверный цвет. Введите Красный, Желтый или Зеленый.');
                }
            }
        }

        const trafficLight = new TrafficLight();