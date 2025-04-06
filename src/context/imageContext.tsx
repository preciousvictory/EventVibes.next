import { createContext, useContext, useState } from "react";

// context/ImageContext.tsx
const ImageContext = createContext({
    imageState,
    setImageState
});

export const ImageProvider = ({ children }: { children: any }) => {
  const [imageState, setImageState] = useState({});
  return (
    <ImageContext.Provider value={{ imageState, setImageState }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => useContext(ImageContext);
