const { balancedParantheses } = require('.');

describe('Balanced parantheses in string', () => {
  let str1, str2, str3, str4;

  beforeEach(() => {
    str1 = '(())';
    str2 = '(((';
    str3 = ')(';
    str4 = '((()';
  });

  it('Should return TRUE for `(())`', () => {
    expect(balancedParantheses(str1)).toBe(true);
  });

  it('Should return FALSE for `(((`', () => {
    expect(balancedParantheses(str2)).toBe(false);
  });

  it('Should return TRUE for `)(`', () => {
    expect(balancedParantheses(str3)).toBe(false);
  });

  it('Should return TRUE for `((()`', () => {
    expect(balancedParantheses(str4)).toBe(false);
  });
});
