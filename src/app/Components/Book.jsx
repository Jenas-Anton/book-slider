"use client"
import { useRef } from "react"
import { pages } from "./UI"
import { useMemo } from "react";
import { Bone } from "three";
import { 
  BoxGeometry, 
  Vector3, 
  Uint16BufferAttribute, 
  Float32BufferAttribute 
} from "three";

const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
  PAGE_WIDTH,
  PAGE_HEIGHT,
  PAGE_DEPTH,
  PAGE_SEGMENTS,
  2
);

pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const position = pageGeometry.attributes.position;
const vertex = new Vector3();
const skinIndexes = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
  vertex.fromBufferAttribute(position, i);
  const x = vertex.x;

  const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
  let skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;

  skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
  skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

pageGeometry.setAttribute(
  "skinIndex",
  new Uint16BufferAttribute(skinIndexes, 4)
);

pageGeometry.setAttribute(
  "skinWeight",
  new Float32BufferAttribute(skinWeights, 4)
);

const Page = ({ number, front, back, ...props }) => {
  const group = useRef();

   const manualSkinnedMesh = useMemo(() => {
    const bones = [];
    for (let i = 0 ; i <= PAGE_SEGMENTS; i++)
    {
        let bone = new Bone();
        bones.push(bone);
        if(i == 0)
        {
            bone.position.x = 0 ;
        }
    }
   })

  return (
    <group {...props} ref={group}>
      <mesh scale={0.5} geometry={pageGeometry}>
        <meshBasicMaterial color="red" />
      </mesh>
    </group>
  );
};

export const Book = ({ ...props }) => {
  return (
    <group {...props}>
      {pages.map((pageData, index) =>
        index === 0 ? (
          <Page
            position-x={index * 0.15}
            key={index}
            number={index}
            {...pageData}
          />
        ) : null
      )}
    </group>
  );
};
