import { useState, useEffect, useCallback, useRef } from "react";

// Fetching WEB3 Provider

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

// Async setState

export const useStateWithPromise = (initialState) => {
  const [state, setState] = useState(initialState);
  const resolverRef = useRef(null);

  useEffect(() => {
    if (resolverRef.current) {
      resolverRef.current(state);
      resolverRef.current = null;
    }
    /**
     * Since a state update could be triggered with the exact same state again,
     * it's not enough to specify state as the only dependency of this useEffect.
     * That's why resolverRef.current is also a dependency, because it will guarantee,
     * that handleSetState was called in previous render
     */
  }, [resolverRef.current, state]);

  const handleSetState = useCallback(
    (stateAction) => {
      setState(stateAction);
      return new Promise((resolve) => {
        resolverRef.current = resolve;
      });
    },
    [setState]
  );

  return [state, handleSetState];
};
