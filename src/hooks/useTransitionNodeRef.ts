import { createRef, useRef } from "react";

// react-transition-group falls back to ReactDOM.findDOMNode when no nodeRef is provided.
// In React 19, findDOMNode is removed, so each transition item must receive a stable ref.
// This hook stores one ref per transition key and always returns the same ref for that key.
export function useTransitionNodeRef<TKey extends string | number, TElement extends HTMLElement>() {
  const transitionRefs = useRef(new Map<TKey, React.RefObject<TElement | null>>());

  const getNodeRef = (key: TKey) => {
    const existingRef = transitionRefs.current.get(key);
    if (existingRef) return existingRef;

    const newRef = createRef<TElement>();
    transitionRefs.current.set(key, newRef);
    return newRef;
  };

  return { getNodeRef };
}
