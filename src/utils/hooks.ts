import { useRef } from 'react';

let id = 0;

export function useUniqueId() {
  const idRef = useRef(id++);
  return idRef.current;
}
