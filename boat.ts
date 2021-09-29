import { Vehicle } from './vehicle';

export class Boat extends Vehicle {
  constructor(public name: string, public currentSpeed: number) {
    super(name, currentSpeed);
  }

  accelerate() {
    if (this.currentSpeed <= 199) {
      this.currentSpeed += 1;
    }
  }

  decelerate() {
    if (this.currentSpeed >= 1) {
      this.currentSpeed -= 1;
    }
  }
}
