const { getPermutations } = require('.');

describe('Get permutations of a string', () => {
  it('returns permutations of a short string', () => {
    const shortString = 'ab';
    const expectedPermutations = ['ab', 'ba'];

    expect(getPermutations(shortString)).toEqual(expectedPermutations);
  });

  it('returns permutations of a long string', () => {
    const shortString = 'XUNDA';
    const expectedPermutations = ['XUNDA', 'UXNDA', 'NXUDA', 'XNUDA', 'UNXDA', 'NUXDA', 'DUXNA', 'UDXNA', 'XDUNA', 'DXUNA', 'UXDNA', 'XUDNA', 'XNDUA', 'NXDUA', 'DXNUA', 'XDNUA', 'NDXUA', 'DNXUA', 'DNUXA', 'NDUXA', 'UDNXA', 'DUNXA', 'NUDXA', 'UNDXA', 'ANDXU', 'NADXU', 'DANXU', 'ADNXU', 'NDAXU', 'DNAXU', 'XNADU', 'NXADU', 'AXNDU', 'XANDU', 'NAXDU', 'ANXDU', 'ADXNU', 'DAXNU', 'XADNU', 'AXDNU', 'DXANU', 'XDANU', 'XDNAU', 'DXNAU', 'NXDAU', 'XNDAU', 'DNXAU', 'NDXAU', 'UDXAN', 'DUXAN', 'XUDAN', 'UXDAN', 'DXUAN', 'XDUAN', 'ADUXN', 'DAUXN', 'UADXN', 'AUDXN', 'DUAXN', 'UDAXN', 'UXADN', 'XUADN', 'AUXDN', 'UAXDN', 'XAUDN', 'AXUDN', 'AXDUN', 'XADUN', 'DAXUN', 'ADXUN', 'XDAUN', 'DXAUN', 'NXAUD', 'XNAUD', 'ANXUD', 'NAXUD', 'XANUD', 'AXNUD', 'UXNAD', 'XUNAD', 'NUXAD', 'UNXAD', 'XNUAD', 'NXUAD', 'NAUXD', 'ANUXD', 'UNAXD', 'NUAXD', 'AUNXD', 'UANXD', 'UAXND', 'AUXND', 'XUAND', 'UXAND', 'AXUND', 'XAUND', 'DAUNX', 'ADUNX', 'UDANX', 'DUANX', 'AUDNX', 'UADNX', 'NADUX', 'ANDUX', 'DNAUX', 'NDAUX', 'ADNUX', 'DANUX', 'DUNAX', 'UDNAX', 'NDUAX', 'DNUAX', 'UNDAX', 'NUDAX', 'NUADX', 'UNADX', 'ANUDX', 'NAUDX', 'UANDX', 'AUNDX'];

    expect(getPermutations(shortString).sort()).toEqual(expectedPermutations.sort());
  });

  it('returns the same string if the string is one character long', () => {
    const shortString = 'a';
    const expectedPermutations = ['a'];

    expect(getPermutations(shortString)).toEqual(expectedPermutations);
  });

  it('returns an empty array for an empty string', () => {
    const shortString = '';
    const expectedPermutations = [];

    expect(getPermutations(shortString)).toEqual(expectedPermutations);
  });

  it('is case sensitive', () => {
    const shortString = 'aB';

    expect(getPermutations(shortString)).not.toEqual(['ab', 'ba']);
    expect(getPermutations(shortString)).toEqual(['aB', 'Ba']);
  });
});
