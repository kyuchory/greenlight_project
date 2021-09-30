import React, { createContext, useState } from "react";

const PointContext = createContext({
  state: { point: 0 },
  actions: {
    setPoint: () => {},
  },
});

const PointProvider = ({ children }) => {
  const [point, setPoint] = useState(0);

  const value = {
    state: { point },
    actions: { setPoint },
  };
  return (
    <PointContext.Provider value={value}>{children}</PointContext.Provider>
  );
};

const PointConsumer = PointContext.Consumer;

export { PointProvider, PointConsumer };

export default PointContext;
