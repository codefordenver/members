import { renderHook } from '@testing-library/react-hooks';
import { useUniqueId } from '../hooks';

describe('useUniqueId', () => {
  it('creates a unique id for each time it is called', () => {
    let a, b, c;
    renderHook(() => {
      a = useUniqueId();
      b = useUniqueId();
    });
    renderHook(() => {
      c = useUniqueId();
    });
    expect(a).not.toEqual(b);
    expect(b).not.toEqual(c);
  });

  it('does not create a new id on rerender', () => {
    let a;

    const { rerender } = renderHook(() => {
      a = useUniqueId();
    });
    const firstId = a;

    rerender();
    expect(firstId).toBe(a);
  });
});
