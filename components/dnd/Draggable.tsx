import React from 'react';
import {UniqueIdentifier, useDraggable} from '@dnd-kit/core';

export function Draggable({ children, id }: { children?: React.ReactNode, id:UniqueIdentifier }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes} className='border'>
      <div>Test Draggable</div>
      {children}
    </button>
  );
}