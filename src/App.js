import { AppRouter } from './AppRouter';
//USAR EL PROVIDER DEL CONTEXTO EN LA PARTE MAS ALTA DE LA APP
import { PokemonProvider } from './components/context/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
};
export default App;
