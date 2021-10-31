import React, {createContext, useState} from "react";

const FabricContext = createContext({
    state: { fabric: "", count:0},
    actions: {
        setFabric: ()=>{},
        setCount: ()=>{}
    }
});

const FabricProvider = ({children})=>{
    const [fabric, setFabric] = useState("");
    const [count, setCount] = useState(0);

    const value = {
        state: {fabric, count},
        actions: {setFabric, setCount}
    };
    return(
        <FabricContext.Provider value={value}>{children}</FabricContext.Provider>
    )
}

const FabricConsumer = FabricContext.Consumer;

export {FabricProvider, FabricConsumer};

export default FabricContext;