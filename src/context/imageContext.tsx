// src/context/ImageContext.tsx
"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type Image = {
  id: string;
  name: string;
  image: string;
  creator?: string;
};

type ImageContextType = {
  imageUrl: string;
  photosList: Image[];
  currentImage: number;
  eventName: string;
  setImageData: (data: {
    imageUrl: string;
    photosList: Image[];
    currentImage?: number;
    eventName: string;
  }) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<{
    imageUrl: string;
    photosList: Image[];
    currentImage: number;
    eventName: string;
  }>({
    imageUrl: '',
    photosList: [],
    currentImage: 0,
    eventName: ''
  });

  const setImageData = (data: {
    imageUrl: string;
    photosList: Image[];
    currentImage?: number;
    eventName: string;
  }) => {
    setState({
      ...state,
      ...data,
      currentImage: data.currentImage || 0
    });
  };

  return (
    <ImageContext.Provider value={{
      ...state,
      setImageData,
    }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};