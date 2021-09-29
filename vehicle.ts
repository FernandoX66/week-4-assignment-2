export abstract class Vehicle {
  constructor(public name: string, public currentSpeed: number) {}

  abstract accelerate(): void;

  abstract decelerate(): void;
}
