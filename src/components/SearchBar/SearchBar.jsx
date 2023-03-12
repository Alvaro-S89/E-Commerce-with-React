









// import React, { useState } from 'react'


// const SearchBar = ({products}) => {
//     const [search, setSearch] = useState('')

//     const handleChange = (e) => {
//         setSearch (e.target.value);
//     };

//     const filteredProducts = products.filter((product) =>
//     product.name.toUpperCase().includes(search.toUpperCase())
//   );
       
//   return (
//     <div>
//         < input type="search" value={search} onChange={handleChange} placeholder='Search Item' />
//         <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default SearchBar









// import React, { useState } from 'react';

// function SearchBar(props) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = event => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredItems = props.items.filter(item =>
//     item.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input type="text" value={searchTerm} onChange={handleSearch} />
//       <ul>
//         {filteredItems.map(item => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchBar;