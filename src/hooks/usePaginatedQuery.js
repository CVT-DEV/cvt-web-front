import { useState, useEffect } from 'react';
import { api } from "../services/api";

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 8;

export function usePaginatedQuery(path) {

    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ data, setData ] = useState([]);

    async function getData () {
    await api.get('/fotos', {
      headers: {
        'x-access-token': localStorage.getItem('@cvtespacial-web/token'),
        'page': DEFAULT_PAGE * (currentPage - 1),
        'limit': DEFAULT_PAGE_SIZE
      }
    })
    .then((response) => {
        const totalPages = Math.ceil( response.data.count / DEFAULT_PAGE_SIZE);
        setTotalPages(totalPages);

        setData(response.data);

        console.log(data);
    })
    .catch((error) => {
        console.log(error);   
      })

    }
      
      useEffect(() => {
        getData(currentPage);
    }, [currentPage])

    const handlePageChange = (value) => {  
        setCurrentPage(value);  
      };
  
      const handleNextPage = (value, totalPages) => {
        value < totalPages && setCurrentPage( value + 1 );
      }
  
      const handlePreviousPage = (value) => {
        value > 1 && setCurrentPage( value - 1 );
      }

      return { data, totalPages, currentPage, handlePageChange, handleNextPage, handlePreviousPage };
}