

import Cards from '../Components/Cards';
import { useSearchParams } from 'react-router-dom';


const Products = () => {
    const [params] = useSearchParams()
    return (
        <> 
        <h1>Dette er Products</h1>

        <Cards search={params.get('search')}/>
        </>
     );
}
 
export default Products;