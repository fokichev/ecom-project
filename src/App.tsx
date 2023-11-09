import './App.css'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsPage from './pages/products';

const queryClient= new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ProductsPage />
		</QueryClientProvider>	
	)
}

export default App
