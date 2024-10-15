import { getCalculator, ICalculator } from './index';

describe('Calculator', (): void => {
  let calculator: ICalculator;

  beforeEach(async (): Promise<void> => {
    const Calculator: any = await getCalculator();
    calculator = new Calculator();
  });

  it('should display `1` when pressOne() is invoked', (): void => {
    calculator.pressOne();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');
  });

  it('should display `2` when pressTwo() is invoked', (): void => {
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');
  });

  it('should display `3` when pressThree() is invoked', (): void => {
    calculator.pressThree();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');
  });

  it('should display `4` when pressFour() is invoked', (): void => {
    calculator.pressFour();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('4');
  });

  it('should display `5` when pressFive() is invoked', (): void => {
    calculator.pressFive();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');
  });

  it('should display `6` when pressSix() is invoked', (): void => {
    calculator.pressSix();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('6');
  });

  it('should display `7` when pressSeven() is invoked', (): void => {
    calculator.pressSeven();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7');
  });

  it('should display `8` when pressEight() is invoked', (): void => {
    calculator.pressEight();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('8');
  });

  it('should display `9` when pressNine() is invoked', (): void => {
    calculator.pressNine();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('9');
  });
});
