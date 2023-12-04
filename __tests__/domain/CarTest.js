import Car from '../../src/domain/Car.js';

describe('Car 클래스 테스트', () => {
  describe(`move 메서드는 randomNumber를 입력받아 자동차의 position에 '-'를 추가한다.`, () => {
    const cases = [
      { carName: 'a', randomNumber: 4, expected: 'a : -' },
      { carName: 'b', randomNumber: 2, expected: 'b : ' },
      { carName: 'c', randomNumber: 1, expected: 'c : ' },
    ];

    test.each(cases)(
      '랜덤으로 생성된 번호 $randomNumber가 주어지는 경우, move()는 각 자동차의 position에 ' -
        '를 추가한다.',
      ({ carName, randomNumber, expected }) => {
        // when
        const car = new Car(carName);
        car.move(randomNumber);

        // then
        expect(car.status()).toEqual(expected);
      },
    );
  });

  describe(`findWinner 메서드는 max를 입력받아 자동차의 position과 max를 비교하여 자동차의 이름을 반환한다.`, () => {
    const cases = [
      { carName: 'a', randomNumber: 4, max: 1, expected: 'a' },
      { carName: 'b', randomNumber: 6, max: 0, expected: 'b' },
      { carName: 'c', randomNumber: 1, max: 3, expected: null },
    ];

    test.each(cases)(
      '자동차들의 이동의 최대값인 $max가 주어지는 경우, findWinner()는 position값이 $max보다 큰 경우 자동차의 이름을 반환한다.',
      ({ carName, randomNumber, max, expected }) => {
        // when
        const car = new Car(carName);
        car.move(randomNumber);

        // then
        expect(car.findWinner(max)).toEqual(expected);
      },
    );
  });
});
