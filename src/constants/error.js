const carNames = Object.freeze({
  empty: '[ERROR] 자동자 이름을 입력해주세요.',
  duplicated: '[ERROR] 자동차 이름이 중복되었습니다.',
  maxLength: '[ERROR] 자동차 이름이 5글자를 넘었습니다.',
  separator: '[ERROR] 쉼표 구분을 잘못하였습니다.',
});

const ERROR = Object.freeze({
  carNames,
});

export default ERROR;
