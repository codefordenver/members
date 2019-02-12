import { testHook } from 'react-testing-library';
import { useUniqueId } from '../hooks';

describe('useUniqueId', () => {
  it('creates a unique id for each time it is called', () => {
    let a, b, c;
    testHook(() => {
      a = useUniqueId();
      b = useUniqueId();
    });
    testHook(() => {
      c = useUniqueId();
    });
    expect(a).not.toEqual(b);
    expect(b).not.toEqual(c);
  });

  it('does not create a new id on rerender', () => {
    let a;

    const { rerender } = testHook(() => {
      a = useUniqueId();
    });
    const firstId = a;

    rerender();
    expect(firstId).toBe(a);
  });
});
