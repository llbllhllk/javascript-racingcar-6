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
});
