import Countries from '../../components/Countries/Countries'
import '../../assets/reset.css'
import './App.css'
import Counter from '../../components/Counter/Counter'
import Posts from '../../components/Posts/Posts'

const App = () => {
  return(
    <>
    <div>
      <Countries/>
      <Counter/>
      <Posts/>
    </div>
    </>
  )
}

export default App
