import ERROR from '../../src/constants/error.js';
import CarNamesValidator from '../../src/validators/CarNamesValidator.js';

describe('경주할 자동차의 이름 예외 상황 테스트', () => {
  const cases = [
    {
      input: '',
      description: '자동차 이름을 입력하지 않았을 경우 예외처리를 한다.',
      expected: ERROR.carNames.empty,
    },
    {
      input: ',pobi, byeong, hyeon,,',
      description: '쉼표 구분을 잘못 했을 경우 예외처리를 한다.',
      expected: ERROR.carNames.separator,
    },
    {
      input: 'pobi, pobi, byeong, hyeon',
      description: '자동차 이름을 중복되었을 경우 예외처리를 한다.',
      expected: ERROR.carNames.duplicated,
    },
    {
      input: 'pobi, byeonghyeon',
      description: '자동차 이름을 5글자를 넘었을 경우 예외처리를 한다.',
      expected: ERROR.carNames.maxLength,
    },
  ];

  test.each(cases)('자동차 이름인 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => CarNamesValidator.validateCarNames(input);

    // then
    expect(result).toThrow(expected);
  });
});
