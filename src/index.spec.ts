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

  it('should display `0` when pressZero() is invoked', (): void => {
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });

  it('should display `10` when 9.9+0.1 is calculated', (): void => {
    calculator.pressNine();
    calculator.pressDot();
    calculator.pressNine();
    calculator.pressPlus();
    calculator.pressZero();
    calculator.pressDot();
    calculator.pressOne();

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('10');
  });

  it('should display "-1" when  -6 is added to five', (): void => {
    calculator.pressFive();
    calculator.pressPlus();
    calculator.pressMinus();
    calculator.pressSix();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-1');
  });

  it('should display "-11" when  -6 is added to -5', (): void => {
    calculator.pressMinus();
    calculator.pressFive();
    calculator.pressPlus();
    calculator.pressMinus();
    calculator.pressSix();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-11');
  });

  it('should display "-20" when -5 is multiplied by 4', (): void => {
    calculator.pressMinus();
    calculator.pressFive();
    calculator.pressMult();
    calculator.pressFour();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-20');
  });

  it('should display `Infinty` when 1/0 is calculated', (): void => {
    calculator.pressOne();
    calculator.pressDiv();
    calculator.pressZero();

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('Infinity');
  });

  it('should display `NaN` when it is just operators', (): void => {
    calculator.pressMult();
    calculator.pressDiv();

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('NaN');
  });

  it('should display `` when the contents are cleared is calculated', (): void => {
    calculator.pressOne();
    calculator.pressPlus();
    calculator.pressZero();

    calculator.pressEquals();
    calculator.pressClear();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('');
  });

  it('should display `5` when "2" is added to "6/2"', (): void => {
    calculator.pressTwo();
    calculator.pressPlus();
    calculator.pressSix();
    calculator.pressDiv();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');
  });

  it('should display `1` when "7/1/7" is evaluated', (): void => {
    calculator.pressSeven();
    calculator.pressDiv();
    calculator.pressOne();
    calculator.pressDiv();
    calculator.pressSeven();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');
  });
});
