import { useState } from 'react'

const useToggle = (initialState = true) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
};

// const [isCollectionShow, setIsCollectionShow] = useState(true);

// const handleToggleClick = () => {
//   setIsCollectionShow(!isCollectionShow);
// }

export default useToggle;
