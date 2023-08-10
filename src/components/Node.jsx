import React, { useState, Fragment } from 'react';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';
const initialElements = [

]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}
const reactFlowNod = {
    width: '100%',
    height: '90vh'
}



const Nodes = () => {
    const [elements, setElements] = useState(initialElements);
    const [name, setName] = useState("")

    const addNodeAPI = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: name },
            type: "default",
            position: { x: 0.1 * window.innerWidth, y: 0.1 * window.innerHeight }
        }));
    };

    const addNodeUser = () => {

        setElements(e => e.concat({

            id: (e.length + 1).toString(),

            data: { label: name },
            type: "output",
            position: { x: 0.1 * window.innerWidth, y: 0.1 * window.innerHeight },
            style: {
                backgroundColor: 'blue'
            }
        }));
    };


    const addNodeDB = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            type: 'input',
            data: { label: name },
            position: { x: 0, y: 0 }
        }));
    };

    const onConnect = (params) => setElements(e => addEdge(params, e));


    return (

        <Fragment>
            <ReactFlow
                elements={elements}
                onLoad={onLoad}
                style={reactFlowNod}
                onConnect={onConnect}
                connectionLineStyle={{ stroke: "#ddd", strokeWidth: 2 }}
                connectionLineType="bezier"
                snapToGrid={true}
                snapGrid={[16, 16]}
            >
                <Background
                    color="#888"
                    gap={16}
                />
                <MiniMap
                    nodeColor={n => {
                        if (n.type === 'input') return 'blue';

                        return 'red'
                    }} />
                <Controls />
            </ReactFlow>

            <div>
                <input type="text"
                    onChange={e => setName(e.target.value)}
                    name="title" />

                <button style={{
                    width: '50px',
                    height: '50px',
                    marginLeft: '10px',
                    borderRadius: '50%'
                }}
                    type="button"
                    onClick={addNodeAPI}
                >API </button>

                <button style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    marginLeft: '10px'
                }}
                    type="button"
                    onClick={addNodeUser}
                >Users </button>

                <button style={{
                    width: '50px',
                    height: '50px',
                    marginLeft: '10px',
                    borderRadius: '50%'
                }}
                    type="button"
                    onClick={addNodeDB}
                >DB </button>
                <button style={{
                    width: '100px',
                    height: '50px',
                    marginLeft: '100px'
                }}
                    type="button"
                    onClick={() => {
                        const jsonData = JSON.stringify(elements, null, 2)
                        console.log(jsonData)
                        const blob = new Blob([jsonData], { type: 'application/json' })
                        const url = URL.createObjectURL(blob)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = 'diagram.json'
                        a.click()

                        URL.revokeObjectURL(url);

                    }}
                    
                > Save As a JSON File</button>
            </div>
        </Fragment>
    )
}

export default Nodes;