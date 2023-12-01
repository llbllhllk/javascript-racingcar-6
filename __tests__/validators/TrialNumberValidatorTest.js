import ERROR from '../../src/constants/error.js';
import TrialNumberValidator from '../../src/validators/TrialNumberValidator.js';

describe('시도 횟수 입력 예외 상황 테스트', () => {
  const cases = [
    {
      input: '',
      description: '시도 횟수를 입력하지 않았을 경우 예외처리를 한다.',
      expected: ERROR.trialNumber.empty,
    },
    {
      input: 'a',
      description: '숫자가 아닌 값을 입력했을 경우 예외처리를 한다.',
      expected: ERROR.trialNumber.notANumber,
    },
    {
      input: '-1',
      description: '음수인 숫자를 입력했을 경우 예외처리를 한다.',
      expected: ERROR.trialNumber.negative,
    },
  ];

  test.each(cases)('사용자 시도 횟수 $input을 통해 에러를 반환한다.', ({ input, expected }) => {
    // when
    const result = () => TrialNumberValidator.validateTrialNumber(input);

    // then
    expect(result).toThrow(expected);
  });
});
