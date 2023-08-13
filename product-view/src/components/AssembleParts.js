import React from 'react'
import { Draggable as useDrop } from 'react-beautiful-dnd';
// import PartsSelection from './PartsSelection'

function AssembleParts({selectedParts}) {
  return (
    <div>
    <center>
    {selectedParts.map((id,imageUrl)=>
      <div key={id}>
        {imageUrl}
      </div>
      )}
    </center>
    </div>
  )
}

export default AssembleParts

// import { Draggable as useDrop } from 'react-beautiful-dnd';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/AssembleParts.css';
// import PartList from '../components/PartList';
// import { useStateContext } from '../context/StateProvider';

// const AssembleParts = ({ onAssembly, setPage }) => {
//   const { selectedParts, setSelectedParts, assembledParts, setAssembledParts } =
//     useStateContext();

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: 'image',
//     drop: (item) => addParts(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   const addParts = (id) => {
//     const partList = selectedParts.find((picture) => id === picture.id);
//     setAssembledParts((parts) => [...parts, partList]);
//     const removedItem = selectedParts.filter((picture) => id !== picture.id);

//     setSelectedParts(removedItem);
//   };

//   return (
//     <>
//       <div className='assembly-header'>
//         <div className='assembly-controls'>
//           <div>
//             <Link to='/parts'>
//               <button className='back-button' onClick={() => setPage(2)}>
//                 Back
//               </button>
//             </Link>
//           </div>
//           <div>
//             <Link to='/final'>
//               <button className='next-button' onClick={() => onAssembly()}>
//                 Next
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div ref={drop} className='assembly-container'>
//         <div className='selected-parts'>
//           {selectedParts.map((pictures) => {
//             return <PartList key={pictures.id} pictures={pictures} />;
//           })}
//         </div>
//         <div className='assembly-area'>
//           {assembledParts.map((pictures) => {
//             return <PartList key={pictures.id} pictures={pictures} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AssembleParts;
